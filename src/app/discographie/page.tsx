"use client";
import AlbumBandeau from "../../components/AlbumBandeau";

import Link from "next/link";

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
      "Pas de lumière",
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

import { useState, useRef } from "react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bandeauRefs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans overflow-hidden">
      {/* === HEADER PREMIUM === */}
      <header className="w-full px-8 py-6 flex items-center justify-center bg-transparent backdrop-blur-sm contrast-125 fixed top-0 left-0 z-50 border-b border-zinc-800">
        <nav className="flex gap-8 text-sm font-semibold">
          <Link
            href="/"
            className="hover:text-primary transition uppercase tracking-widest mx-6"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            ACCUEIL
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition uppercase tracking-widest mx-6"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            ACCUEIL
          </Link>
          <a
            href="#tournee"
            className="hover:text-primary transition uppercase tracking-widest mx-6"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            TOURNÉE
          </a>
          <a
            href="/discographie"
            className="hover:text-primary transition uppercase tracking-widest mx-6"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            DISCOGRAPHIE
          </a>
          <a
            href="#galerie"
            className="hover:text-primary transition uppercase tracking-widest mx-6"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            GALERIE
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition uppercase tracking-widest mx-6"
            style={{
              fontFamily: "InstrumentSans, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            CONTACT
          </a>
        </nav>
      </header>
      {/* === CONTENU PAGE DISCOGRAPHIE === */}
      <div className="pt-28 pb-8">
        <h1
          className="text-4xl font-extrabold uppercase mb-10 text-center"
          style={{
            fontFamily: "InstrumentSans, sans-serif",
            letterSpacing: "0.15em",
          }}
        >
          DISCOGRAPHIE
        </h1>
        <div className="flex flex-col w-full">
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
                bandeauRefs.current[idx] = el as HTMLDivElement | null; // Corrected ref type
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
