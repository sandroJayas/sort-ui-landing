"use client";

import {useReducedMotion} from "framer-motion";
import Link from "next/link";

export function PricingCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Link href={"https://app.sortstorage.com"}>
      <button
        className="mt-12 px-12 py-4 bg-[#F8B24E] text-[#0F1A7D] font-black text-lg hover:bg-[#F5A02C] transition-all shadow-[6px_6px_0px_#1724B6] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#1724B6] active:scale-95"
        style={{
          transform: prefersReducedMotion ? "none" : undefined,
        }}
      >
        START NOW
      </button>
    </Link>

  );
}
