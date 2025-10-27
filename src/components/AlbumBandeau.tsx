"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Album {
  title: string;
  cover: string;
  spotify?: string;
  apple?: string;
  year: string;
}

export default function AlbumBandeau({ album }: { album: Album }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      {/* Bandeau principal cliquable */}
      <div
        className="relative rounded-3xl shadow-xl overflow-hidden cursor-pointer border border-zinc-800 transition-all w-full h-[120px] md:h-[160px] flex items-center"
        style={{ position: "relative" }}
        onClick={() => setOpen((o) => !o)}
      >
        {/* Background cover flou */}
        <Image
          src={album.cover}
          alt={album.title}
          fill
          className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
          style={{ filter: "blur(8px) brightness(0.7)" }}
          priority
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl z-0" />
        <div className="relative z-10 w-full h-full flex flex-row items-center">
          <div className="flex flex-col items-center justify-center flex-1">
            <h2
              className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-zinc-50 text-center"
              style={{ fontFamily: "InstrumentSans, sans-serif", letterSpacing: "0.15em" }}
            >
              {album.title}
            </h2>
            <span className="text-zinc-300 font-semibold mt-2 text-lg md:text-xl text-center">{album.year}</span>
          </div>
          <span className="text-primary font-bold text-2xl ml-8">
            {open ? "−" : "+"}
          </span>
        </div>
      </div>
      {/* Accordéon vertical déroulé en dessous */}
      <motion.div
        layout
        initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
        animate={open ? { height: "auto", opacity: 1, paddingTop: 32, paddingBottom: 32 } : { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, duration: 0.3 }}
        className="w-full overflow-hidden bg-zinc-900/80 rounded-b-3xl px-8 flex flex-row items-start gap-8"
        style={{ zIndex: 10 }}
      >
        {open && (
          <>
            <div className="flex flex-col items-center" style={{ minWidth: '320px', maxWidth: '340px' }}>
              <Image
                src={album.cover}
                alt={album.title}
                width={280}
                height={280}
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl border border-zinc-700 shadow-2xl"
              />
              <button
                className="mt-6 px-8 py-3 rounded-full bg-primary text-zinc-50 font-bold text-lg shadow-xl hover:bg-primary/80 transition"
                onClick={(e) => { e.stopPropagation(); window.open('https://www.fnac.com/SearchResult/ResultList.aspx?Search=SCH', '_blank'); }}
              >
                Acheter
              </button>
            </div>
            <div className={album.title === "Rooftop" ? "w-full flex flex-row gap-4 items-center ml-auto" : "flex flex-row gap-4 items-center ml-auto"}>
              {album.title === "Rooftop" ? (
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: 12, width: "100%" }}
                  src="https://open.spotify.com/embed/album/6ocMkTP3OBnxsREsdpCMTe?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"
                />
              ) : album.spotify && (
                <iframe
                  src={album.spotify}
                  width="200"
                  height="80"
                  allow="encrypted-media"
                  className="rounded-lg border border-zinc-700 bg-black"
                  title="Spotify Player"
                ></iframe>
              )}
              {album.apple && album.title !== "Rooftop" && (
                <iframe
                  src={album.apple}
                  width="200"
                  height="80"
                  allow="encrypted-media"
                  className="rounded-lg border border-zinc-700 bg-black"
                  title="Apple Music Player"
                ></iframe>
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
