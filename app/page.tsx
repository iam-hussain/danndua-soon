import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Subscribe from "@/components/molecules/subscribe";
import FollowUs from "@/components/molecules/follow-us";

export default function Home() {
  return (
      <div className="flex flex-col justify-center align-middle items-center m-auto">
        <div className="fixed top-2 right-6">
          <ThemeModeToggle />
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center min-h-svh w-full px-8">
          <nav className="flex py-4 justify-between w-full">
            <Image
              src="/brand-white.svg"
              alt="Next.js logo"
              width={100}
              height={100}
              priority
            />
          </nav>

          <div className="flex flex-col md:flex-col justify-center align-middle items-center m-auto">
            <div className="flex flex-col gap-6 justify-center align-middle items-center z-30">
              <div className="flex gap-6 flex-col">
                <div className="w-full flex justify-center align-middle flex-col items-center">
                  <h2 className="text-center md:text-2xl text-xl">
                    Empower Your Beauty, Naturally.
                  </h2>
                  <p className="text-center md:text-base text-sm text-foreground/70">
                    Discover the perfect blend of luxury, science, and nature in
                    skincare.
                  </p>
                </div>
                <Image
                  src="/brand.png"
                  alt="Next.js logo"
                  className="max-w-full"
                  width={600}
                  height={100}
                  priority
                />
                <h1 className="hidden">DAN N DUA</h1>
              </div>
            </div>
            <div className="z-10 p-4 max-w-screen-lg overflow-hidden flex md:pt-10">
              <Image
                className="h-[400px] md:hidden w-auto"
                src="/product/pump-10-1.png"
                alt="Product Pump"
                width={200}
                height={100}
                priority
              />
              <Image
                className="hidden md:block md:h-[200px] w-auto"
                src="/product/pump-10-1-h.png"
                alt="Product Pump"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>
        </main>
        <div className="flex md:flex-row flex-col-reverse justify-center align-middle items-center py-20 w-full gap-8 px-8">
          <Image
            src="/product/pump-10-cropped.svg"
            alt="Next.js logo"
            width={300}
            height={100}
            priority
          />
          {/* <Lottie src="https://cdn.lottielab.com/l/7uDNJPJS8tnqgM.json" autoplay /> */}
          <div className="flex flex-col gap-2 max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-4xl">Lorem ipsum</h2>
            <p className="text-pretty text-sm text-foreground/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eros metus, imperdiet in aliquet in, malesuada efficitur elit. Sed
              a augue vehicula dolor maximus suscipit ut quis purus. Sed eu ex
              eleifend, sagittis quam et, ultrices tortor. Vestibulum vitae
              magna bibendum, rutrum ipsum sit amet, porta nulla. Sed sagittis
              nisl eu nibh efficitur, at placerat augue consequat. Quisque
              hendrerit, sem at maximus aliquam, purus purus posuere leo, eu
              condimentum dolor tellus vitae felis. Proin quis sollicitudin sem.
              Donec vehicula consequat magna, sit amet maximus turpis varius
              nec. Ut at lectus rutrum, tincidunt ipsum vitae, venenatis tellus.
              Aliquam molestie mi sem, sit amet dignissim diam semper ac.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center align-middle items-center py-10 w-full md:gap-8 gap-4 px-8">
          <div className="flex flex-col gap-8">
            <FollowUs />

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground">OR</span>
              <Separator className="flex-1" />
            </div>

            <Subscribe />
          </div>
        </div>
        <footer className="flex flex-col justify-center align-middle items-center pb-20 w-full gap-8 px-8">
          <p className="text-base text-foreground/70">
            Coming soon—subscribe for updates!
          </p>
        </footer>
      </div>
  );
}
