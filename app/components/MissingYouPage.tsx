"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const photos = [
  { src: "/photos/01.jpg", alt: "A cherished moment with your wife", caption: "A smile I still replay in my mind." },
  { src: "/photos/02.jpg", alt: "A beautiful portrait of your wife", caption: "My favorite kind of quiet is with you." },
  { src: "/photos/03.jpg", alt: "A warm memory together", caption: "Every photo feels like a soft reminder." },
  { src: "/photos/04.jpg", alt: "Another sweet photo of your wife", caption: "You make ordinary moments feel golden." },
  { src: "/photos/05.jpg", alt: "A loving picture of your wife", caption: "I keep finding new ways to miss you." },
  { src: "/photos/06.jpg", alt: "A romantic memory", caption: "Home is whatever room you are in." },
];

const quotes = [
  "You are my favorite thought in the middle of every busy day.",
  "No matter how far apart we are, my heart still knows your name first.",
  "Loving you is the easiest thing I have ever done.",
];

export default function MissingYouPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_top,#ffe1ec_0%,transparent_30%),radial-gradient(circle_at_bottom,#b9e6ff_0%,transparent_30%),linear-gradient(180deg,#0b1020_0%,#10162b_45%,#06070d_100%)] px-4 py-6 text-cream sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-15" />
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-400/20 blur-[140px]" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-300/15 blur-[170px]" />

      <section className="relative mx-auto flex min-h-[70dvh] max-w-6xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] tracking-[0.35em] text-white/70 backdrop-blur-xl"
        >
          <Sparkles size={14} />
          A LOVE NOTE UNLOCKED
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="mt-6 max-w-4xl font-display text-5xl italic leading-[1.02] text-white sm:text-6xl lg:text-8xl"
        >
          For my wife, the one who makes everything feel softer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg"
        >
          A little glass gallery for the person I love most, with photos, soft light,
          and a few words that never stop meaning more than they did yesterday.
        </motion.p>
      </section>

      <section className="relative mx-auto max-w-6xl pb-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/14 bg-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),transparent_40%,rgba(255,255,255,0.06)_100%)]" />
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <figcaption className="relative mt-4">
                <p className="font-display text-2xl italic text-white">{photo.caption}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Every photo is another reason I would choose you again.
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-5 py-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] border border-white/14 bg-white/10 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8"
        >
          <p className="text-[11px] tracking-[0.35em] text-white/60">ROMANTIC NOTES</p>
          <div className="mt-5 space-y-4">
            {quotes.map((quote) => (
              <div key={quote} className="rounded-[22px] border border-white/10 bg-black/12 px-5 py-4">
                <p className="text-lg leading-8 text-white/88 sm:text-xl">{quote}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="flex flex-col justify-between rounded-[32px] border border-white/14 bg-white/10 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8"
        >
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
              <Heart size={24} fill="currentColor" />
            </div>
            <h2 className="mt-5 font-display text-4xl italic text-white">
              Always missing you.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-white/68">
              This little page is just a soft place for your pictures and a few
              words to sit together until I can hold you again.
            </p>
          </div>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5">
            <p className="text-sm tracking-[0.25em] text-white/58">FOREVER TEXT</p>
            <p className="mt-3 text-xl leading-8 text-white/88">
              You are the best part of my day, the calm in my noise, and the
              reason my heart feels at home.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
