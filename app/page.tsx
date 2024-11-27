import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center align-middle items-center">
      <div className=" absolute top-4 right-4">
        <ThemeModeToggle />
      </div>
      <main className="flex gap-8 row-start-2 items-center min-h-svh py-20 m-auto px-8">
        <div className="flex flex-col gap-6">
            <Image
          src="/brand.png"
          alt="Next.js logo"
          width={600}
          height={100}
          priority
        />
        <div className="w-full flex justify-center align-middle flex-col items-center">
            <h1 className="text-xl text-center">Empower Your Beauty, Naturally.</h1>
            <p className="text-center text-sm">Discover the perfect blend of luxury, science, and nature in skincare.</p>
        </div>
                <Image
          src="/product-1.svg"
          alt="Next.js logo"
          width={600}
          height={100}
          priority
        />
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Coming soon—subscribe for updates!</p>
      </footer> */}
    </div>
  );
}
