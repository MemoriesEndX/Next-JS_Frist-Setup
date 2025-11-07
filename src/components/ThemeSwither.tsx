"use client";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  // 🔹 Saat pertama kali load, cek tema tersimpan
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
      setDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // 🔹 Setiap kali dark berubah, update class dan simpan ke localStorage
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }, [dark]);

  return (
    <button
      id="theme-switcher"
      onClick={() => setDark(!dark)}
      className="p-2 mt-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg"
    >
      {dark ? "🌙 Mode Gelap" : "☀️ Mode Terang"}
    </button>
  );
}
