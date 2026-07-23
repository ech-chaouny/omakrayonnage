import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import IsoCertification from "@/components/IsoCertification";
import Quote from "@/components/Quote";
import Campaign from "@/components/Campaign";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <IsoCertification />
        <Partners />
        <Quote />
        <Campaign />
        <Products />
        <Clients />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
