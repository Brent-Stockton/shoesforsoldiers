import Head from "next/head";

import CallToAction from "@/Pages/CallToAction.tsx";
import ContactForm from "@/Pages/Contact/Contact";
import CTA from "@/Pages/CTA.tsx";
import FAQ from "@/Pages/FAQ/FAQ";
import Footer from "@/Pages/Footer/Footer";
import Gallery from "@/Pages/Gallery.tsx";
import Hero from "@/Pages/Hero.tsx";
import StickyNavbar from "@/Components/NavBar";

const App = () => {
  <Head>
    <title>Your Site Title</title>
    <meta
      name="description"
      content="Empowering Our Soldiers, One Step at a Time - Join Us in Making a Difference Through Every Home Loan Closed."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="www.shoesforsoldiers.org" />
    <meta property="og:title" content="Shoes For Soldiers" />
    <meta
      property="og:description"
      content="Empowering Our Soldiers, One Step at a Time - Join Us in Making a Difference Through Every Home Loan Closed."
    />
    <meta property="og:image" content="Your Image URL" />

    <link rel="icon" href="/images/logo.jpeg" />
  </Head>;
  return (
    <main>
      <StickyNavbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <CallToAction />
      </section>
      <section id="CTA">
        <CTA />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="faq">
        <ContactForm />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};
export default App;
