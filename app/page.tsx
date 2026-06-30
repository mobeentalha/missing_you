"use client";

import { useState } from "react";
import LockScreen from "./components/LockScreen";
import MissingYouPage from "./components/MissingYouPage";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <MissingYouPage />
  ) : (
    <LockScreen onUnlock={() => setUnlocked(true)} />
  );
}
