import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans flex items-center justify-center">
      <main className="w-full max-w-5xl flex flex-row items-center justify-between px-8 py-24">
        {/* Image SCH à gauche (remplacer /sch.png par ton image réelle) */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/sch.png"
            alt="SCH"
            width={350}
            height={350}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        {/* Logo SCH à droite + CTA */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          <Image
            src="/logo-sch.png"
            alt="Logo SCH"
            width={180}
            height={80}
            className="mb-6"
            priority
          />
          <div className="flex flex-row gap-4">
            <a
              href="#biographie"
              className="px-8 py-3 rounded-full bg-zinc-900 text-zinc-50 font-semibold text-lg shadow-lg hover:bg-zinc-800 transition"
            >
              Biographie
            </a>
            <a
              href="#discographie"
              className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-50 font-semibold text-lg hover:bg-zinc-900 transition"
            >
              Discographie
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
