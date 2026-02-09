import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Events />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}
