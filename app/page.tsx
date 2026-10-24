import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Products />
        <Services />
        <Work />
        <About />
        <ContactCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
