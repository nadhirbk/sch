"use client";
import AlbumBandeau from "../../components/AlbumBandeau";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const albums = [
  {
    title: "A7",
    year: "2015",
    cover: "/albums/a7.jpeg",
    spotify: "https://open.spotify.com/embed/album/1wZfQJz6KQyCwQ6r5A2l0V",
    tracklist: [
      "A7",
      "Gomorra",
      "Champs-Élysées",
      "Mauvaises idées",
      "Solides",
      "Pas de rêve",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "Anarchie",
    year: "2016",
    cover: "/albums/anarchie.jpeg",
    spotify: "https://open.spotify.com/embed/album/2Q0QhYQ0QhYQ0QhYQ0QhYQ",
    tracklist: [
      "Anarchie",
      "Nino Brown",
      "A l'envers",
      "Champs-Élysées",
      "Je la connais",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Mauvaises idées",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "Deo Favente",
    year: "2017",
    cover: "/albums/deo-favente.jpeg",
    spotify: "https://open.spotify.com/embed/album/3Q0QhYQ0QhYQ0QhYQ0QhYQ",
    tracklist: [
      "Poches pleines",
      "Comme si",
      "Mauvaises idées",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "JVLIVS",
    year: "2018",
    cover: "/albums/jvlivs1.jpeg",
    spotify: "https://open.spotify.com/embed/album/4Q0QhYQ0QhYQ0QhYQ0QhYQ",
    tracklist: [
      "JVLIVS",
      "Mort de rue",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "Rooftop",
    year: "2019",
    cover: "/albums/rooftop.jpeg",
    spotify: "https://open.spotify.com/embed/album/1A2GTWGtFfWp7KSQTwWOyo",
    tracklist: [
      "Rooftop",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "JVLIVS II",
    year: "2021",
    cover: "/albums/jvlivs2.jpeg",
    spotify: "https://open.spotify.com/embed/album/3n3Ppam7vgaVa1iaRUc9Lp",
    tracklist: [
      "JVLIVS II",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "JVLIVS Prequel : Julio",
    year: "2022",
    cover: "/albums/jvlivs-prequel-julio.jpeg",
    spotify: "https://open.spotify.com/embed/album/5Q0QhYQ0QhYQ0QhYQ0QhYQ",
    tracklist: [
      "Julio",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
  {
    title: "JVLIVS III : Ad Finem",
    year: "2023",
    cover: "/albums/jvlivs3.jpeg",
    spotify: "https://open.spotify.com/embed/album/6Q0QhYQ0QhYQ0QhYQ0QhYQ",
    tracklist: [
      "Ad Finem",
      "Solides",
      "Liquide",
      "Rêves de mômes",
      "Fusil",
      "Interlude",
      "Réseaux",
      "Je la connais",
      "A l'ombre",
      "La nuit",
      "A7 (Outro)",
    ],
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bandeauRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      <header
        ref={headerRef}
        className="w-full px-4 py-2 flex items-center justify-center bg-gradient-to-r from-zinc-900/90 via-zinc-800/80 to-zinc-900/90 border-b-2 border-yellow-400/80 shadow-yellow-400/10 shadow-lg backdrop-blur-md contrast-125 fixed top-0 left-0 z-50 transition-transform duration-300"
      >
        <nav className="flex gap-3 text-base font-extrabold tracking-widest">
          <Link
            href="/"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            ACCUEIL
          </Link>
          <a
            href="#tournee"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            TOURNÉE
          </a>
          <Link
            href="/discographie"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            DISCOGRAPHIE
          </Link>
          <a
            href="#galerie"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            GALERIE
          </a>
          <a
            href="#contact"
            className="mx-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-300/90 uppercase text-zinc-50 font-extrabold tracking-widest"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.18em",
              border: "2px solid transparent",
            }}
          >
            CONTACT
          </a>
        </nav>
      </header>
      {/* === CONTENU PAGE DISCOGRAPHIE === */}
      <div className="flex flex-col w-full pt-16">
        {albums.map((album, idx) => (
          <AlbumBandeau
            key={idx}
            album={album}
            open={openIndex === idx}
            onClick={() => {
              const willOpen = openIndex !== idx;
              setOpenIndex(willOpen ? idx : null);
              setTimeout(() => {
                if (willOpen && bandeauRefs.current[idx]) {
                  bandeauRefs.current[idx]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }, 100);
            }}
            ref={(el) => {
              bandeauRefs.current[idx] = el as HTMLDivElement | null;
            }}
          />
        ))}
      </div>
    </div>
  );
}
