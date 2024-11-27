import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle items-center m-auto">
      <main className="flex flex-col gap-8 row-start-2 items-center min-h-svh w-full px-8">
        <nav className="flex py-4 justify-between w-full">
          <Image
            src="/brand-white.svg"
            alt="Next.js logo"
            width={100}
            height={100}
            priority
          />
          <div className="">
            <ThemeModeToggle />
          </div>
        </nav>

        <div className="py-20 flex flex-col md:grid md:grid-cols-2 ">
          <div className="flex flex-col gap-6 justify-center align-middle items-end">
            <div className="flex gap-6 flex-col">
              <Image
                src="/brand.png"
                alt="Next.js logo"
                className="max-w-full"
                width={600}
                height={100}
                priority
              />
              <div className="w-full flex justify-center align-middle flex-col items-center">
                <h1 className="text-xl text-center">
                  Empower Your Beauty, Naturally.
                </h1>
                <p className="text-center text-sm">
                  Discover the perfect blend of luxury, science, and nature in
                  skincare.
                </p>
              </div>
            </div>
          </div>
          <div className="rotate-12 flex">
            <Image
              src="/product-1.svg"
              alt="Next.js logo"
              width={1600}
              height={1100}
              priority
            />
          </div>
        </div>
      </main>
      <div className="flex md:flex-row flex-col justify-center align-middle items-center py-20 w-full">
        <Image
          src="/product-1.svg"
          alt="Next.js logo"
          width={500}
          height={100}
          priority
        />
        <div className="max-w-4xl flex flex-col gap-2">
          <h2 className="text-5xl">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eros metus, imperdiet in aliquet in, malesuada efficitur elit. Sed a
            augue vehicula dolor maximus suscipit ut quis purus. Sed eu ex
            eleifend, sagittis quam et, ultrices tortor. Vestibulum vitae magna
            bibendum, rutrum ipsum sit amet, porta nulla. Sed sagittis nisl eu
            nibh efficitur, at placerat augue consequat. Quisque hendrerit, sem
            at maximus aliquam, purus purus posuere leo, eu condimentum dolor
            tellus vitae felis. Proin quis sollicitudin sem. Donec vehicula
            consequat magna, sit amet maximus turpis varius nec. Ut at lectus
            rutrum, tincidunt ipsum vitae, venenatis tellus. Aliquam molestie mi
            sem, sit amet dignissim diam semper ac.
          </p>
        </div>
      </div>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Coming soon—subscribe for updates!</p>
      </footer> */}
    </div>
  );
}
