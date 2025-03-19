import LinkButton from "@/components/link-button";
import Image from "next/image";
import { Briefcase, Linkedin, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Logo en haut avec animation de flottement */}
      <header className="flex flex-col items-center mb-8">
        <Image
          src="/logo.png"
          alt="Carrot Pixel"
          width={150}
          height={20}
          className="w-[100px] sm:w-[120px] md:w-[135px] lg:w-[150px] h-auto animate-float"
          priority
        />
      </header>

      {/* Liens principaux */}
      <main className="flex flex-col gap-6 items-center w-full">
        <LinkButton
          url="https://fr.fiverr.com/s/6Y22m8b"
          name="Fiverr"
          icon={<Briefcase />}
        />
        <LinkButton
          url="https://carrotpixel.fr/"
          name="Portoflio"
          icon={<Code />}
        />
        <LinkButton
          url="https://www.linkedin.com/in/micka%C3%ABl-warin-4b0275a4/"
          name="Linkedin"
          icon={<Linkedin />}
        />
      </main>
    </div>
  );
}
