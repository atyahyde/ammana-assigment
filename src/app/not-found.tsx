"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center  justify-center">
      <img src="/images/error/404.png" className="w-4/12" />

      <Link href="/" className="underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
