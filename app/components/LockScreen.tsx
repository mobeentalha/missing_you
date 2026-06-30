"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Delete, Lock } from "lucide-react";

const CORRECT_PIN = "1999";

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [entered, setEntered] = useState("");
  const [error, setError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const press = (digit: string) => {
    if (entered.length >= 4 || error) return;
    const nextPin = `${entered}${digit}`;
    setEntered(nextPin);

    if (nextPin.length !== 4) return;

    if (nextPin === CORRECT_PIN) {
      timerRef.current = setTimeout(onUnlock, 240);
      return;
    }

    setError(true);
    timerRef.current = setTimeout(() => {
      setError(false);
      setEntered("");
    }, 500);
  };

  const backspace = () => {
    if (error) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setEntered((current) => current.slice(0, -1));
  };

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "back"];

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden select-none bg-[radial-gradient(circle_at_top,#7cc7ff_0%,transparent_40%),radial-gradient(circle_at_bottom,#ff8ebc_0%,transparent_42%),linear-gradient(160deg,#0b1020_0%,#11162a_45%,#06070d_100%)] px-4 py-6 text-cream sm:px-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-pink-400/20 blur-[160px]" />

      <div className="relative z-10 w-full max-w-[430px] rounded-[42px] border border-white/18 bg-white/10 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-[28px] sm:p-5">
        <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-black/20 px-6 py-7">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.22),transparent_40%,rgba(255,255,255,0.06)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%)]" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl">
              <Lock className="h-8 w-8 text-white" strokeWidth={1.7} />
            </div>

            <p className="text-center text-[11px] tracking-[0.4em] text-white/65">
              iPhone style unlock
            </p>
            <h1 className="mt-3 text-center font-display text-5xl italic text-white sm:text-6xl">
              Enter PIN
            </h1>
            <p className="mt-3 max-w-xs text-center text-sm leading-6 text-white/68">
              Type the passcode to open the romantic landing page.
            </p>

            <motion.div
              animate={error ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-8 flex gap-4"
            >
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className={`h-3.5 w-3.5 rounded-full border transition ${
                    index < entered.length
                      ? error
                        ? "border-rose-300 bg-rose-300 shadow-[0_0_16px_rgba(251,113,133,0.35)]"
                        : "border-white bg-white shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                      : "border-white/35 bg-transparent"
                  }`}
                />
              ))}
            </motion.div>

            <AnimatePresence>
              {error ? (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm tracking-wide text-rose-200"
                >
                  Wrong PIN, try again.
                </motion.p>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm tracking-wide text-white/50"
                >
                  Hint: it is the year we want to keep forever.
                </motion.p>
              )}
            </AnimatePresence>

            <div className="mt-8 grid w-full max-w-[300px] grid-cols-3 gap-x-6 gap-y-4">
              {keys.map((key, index) => {
                if (key === "") {
                  return <div key={`spacer-${index}`} />;
                }

                if (key === "back") {
                  return (
                    <button
                      key="back"
                      onClick={backspace}
                      aria-label="Delete last digit"
                      className="flex h-16 w-16 items-center justify-center justify-self-center rounded-full border border-white/14 bg-white/6 text-white/80 backdrop-blur-md transition active:scale-90 active:bg-white/14"
                    >
                      <Delete size={22} strokeWidth={1.7} />
                    </button>
                  );
                }

                return (
                  <button
                    key={key}
                    onClick={() => press(key)}
                    className="flex h-16 w-16 items-center justify-center justify-self-center rounded-full border border-white/14 bg-white/8 font-display text-3xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md transition hover:scale-105 hover:bg-white/14 active:scale-95"
                  >
                    {key}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2 text-white/45">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/8">
                <Lock size={15} strokeWidth={1.7} />
              </span>
              <p className="text-xs tracking-[0.28em]">1999 unlocks the heart</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 bg-rose-500/5"
          />
        ) : null}
      </AnimatePresence>
    </main>
  );
}
