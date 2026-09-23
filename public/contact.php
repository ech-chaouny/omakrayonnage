<?php
/**
 * OMAK RAYONNAGE — réception du formulaire de devis.
 *
 * Hébergement mutualisé cPanel : le site est exporté en HTML statique,
 * ce script PHP est le seul morceau dynamique. Il envoie la demande
 * vers la boîte définie dans $TO (livraison locale sur le même serveur).
 */

declare(strict_types=1);

// ---------------------------------------------------------------------------
// Réglages — à adapter si l'adresse change.
// ---------------------------------------------------------------------------
$TO      = 'contact@omakrayonnage.com';          // destinataire des demandes
$FROM    = 'no-reply@omakrayonnage.com';         // doit appartenir au domaine
$SUBJECT = 'Nouvelle demande de devis — omakrayonnage.com';

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

/** Récupère un champ POST nettoyé. */
function field(string $key, int $max = 2000): string
{
    $value = $_POST[$key] ?? '';
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    $value = trim((string) $value);
    // Neutralise les retours à la ligne dans les en-têtes (injection SMTP).
    $value = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $value);
    return mb_substr($value, 0, $max);
}

// Piège à robots : rempli => on fait semblant d'accepter et on ignore.
if (field('bot-field') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = field('name', 120);
$phone   = field('phone', 40);
$email   = field('email', 160);
$company = field('company', 160);
$city    = field('city', 120);
$needs   = field('need', 400);
$message = trim((string) ($_POST['message'] ?? ''));
$message = mb_substr($message, 0, 5000);

if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid_fields']);
    exit;
}

$lines = [
    'Nom complet   : ' . $name,
    'Téléphone     : ' . $phone,
    'Email         : ' . $email,
    'Société       : ' . ($company !== '' ? $company : '—'),
    'Ville         : ' . ($city !== '' ? $city : '—'),
    'Type de besoin: ' . ($needs !== '' ? $needs : '—'),
    '',
    'Message :',
    ($message !== '' ? $message : '—'),
    '',
    '---',
    'Envoyé depuis omakrayonnage.com',
    'Date : ' . date('d/m/Y H:i'),
    'IP   : ' . ($_SERVER['REMOTE_ADDR'] ?? '—'),
];
$body = implode("\n", $lines);

$headers = implode("\r\n", [
    'From: OMAK RAYONNAGE <' . $FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
]);

$sent = @mail($TO, $SUBJECT, $body, $headers, '-f' . $FROM);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
