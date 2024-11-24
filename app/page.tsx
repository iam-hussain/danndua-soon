import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className=" absolute top-4 right-4">
        <ThemeModeToggle />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={600}
          height={100}
          priority
        />
        <div className="w-full flex justify-center align-middle flex-col items-center">
            <h1 className="text-xl text-center">Empower Your Beauty, Naturally.</h1>
            <p className="text-center text-sm">Discover the perfect blend of luxury, science, and nature in skincare.</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Coming soon—subscribe for updates!</p>
      </footer>
    </div>
  );
}
