import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStory />
        <Products />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
