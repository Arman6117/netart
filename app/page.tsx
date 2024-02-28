import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import PumpInfo from "@/components/PumpInfo";
import Segments from "@/components/Segments";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen ">
      <div className="flex justify-center py-1">
        <Logo />
      </div>
      <section className="flex md:flex-row flex-col  ">
        <Hero />
      </section>
      <section className="flex md:px-14 px-10 justify-center items-center mt-10">
        <PumpInfo />
      </section>
      <section className="flex md:px-14 px-10 justify-center items-center mt-7">
        <Segments />
      </section>
      <footer className="mt-10">
        <Footer/>
      </footer>
    </div>
  );
}
