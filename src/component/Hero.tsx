import React from "react";

export default function Hero() {
  return (
    <div
      className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-12
     px-4 py-12 sm:px-6 md:py-16 lg:flex-row lg:gap-8 lg:px-6 lg:py-20"
    >
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-800">
          Build Your Ideal <br />
          <span
            className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text 
          text-transparent"
          >
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-lg leading-7 text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex gap-4">
          <button
            className="rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-3 font-semibold
         text-white transition hover:scale-105"
          >
            Explore Technologies
          </button>
          <button
            className="rounded-lg border border-slate-50 px-6 py-3 font-medium text-[#374151]
         transition hover:bg-slate-100"
          >
            Learn More
          </button>
        </div>
      </div>
      <img src="/src/assets/banner-stack.png" alt="hero image" />
    </div>
  );
}
