import LinkButton from "@/components/link-button";
import Image from "next/image";
import { Briefcase, Share2, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Logo en haut avec animation de flottement */}
      <header className="flex flex-col items-center mb-4">
        <Image
          src="/logo.png"
          alt="Carrot Pixel"
          width={100}
          height={100}
          className="animate-float pb-1"
          priority
        />
        <h1>Bringing Innovative Web Solutions to Life</h1>
        <h2>with Expertise and Passion</h2>
        <p>Hi! I&apos;m Mickaël, a French Full-Stack Developer.</p>
      </header>

      {/* Liens principaux */}
      <main className="flex flex-col items-center w-full">
        <LinkButton
          url="https://fr.fiverr.com/s/6Y22m8b"
          name="Fiverr"
          icon={<Briefcase />}
          className="link-button"
        />
        <LinkButton
          url="https://carrotpixel.fr/"
          name="Portfolio"
          icon={<Code />}
          className="link-button"
        />
        <LinkButton
          url="https://www.linkedin.com/in/micka%C3%ABl-warin-4b0275a4/"
          name="Linkedin"
          icon={<Share2 />}
          className="link-button"
        />
      </main>
    </div>
  );
}
