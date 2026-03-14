"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg font-semibold transition ${
      pathname === path
        ? "bg-indigo-500 text-white"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg flex gap-4 px-4 py-2">
        <Link href="/" className={linkStyle("/")}>
          Camera Detection
        </Link>

        <Link href="/recog" className={linkStyle("/recog")}>
          Image Recognition
        </Link>
      </div>
    </div>
  );
}