// import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Subscribe from "@/components/molecules/subscribe";
import FollowUs from "@/components/molecules/follow-us";
import { Flower2, HeartHandshake, Recycle, LandPlot } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle items-center m-auto">
      {/* <div className="fixed top-2 right-6">
        <ThemeModeToggle />
      </div> */}
      <main className="flex flex-col gap-8 row-start-2 items-center min-h-svh w-full px-8">
        <nav className="flex py-4 justify-center w-full fixed top-0 z-50 bg-background/50 backdrop-blur-sm px-6">
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
          <div className="z-10 p-4 max-w-screen-lg overflow-hidden flex md:pt-10 flex-col">
            {/* <Image
              className="h-[400px] md:hidden w-auto"
              src="/product/pump-10-1.png"
              alt="Product Pump"
              width={200}
              height={100}
              priority
            /> */}
            <Image
              className="block md:h-[200px] w-auto"
              src="/product/pump-10-2-h.png"
              alt="Product Pump"
              width={200}
              height={100}
              priority
            />
            <Image
              className="block md:h-[200px] w-auto"
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
          <h2 className="text-2xl md:text-4xl">
            Your Pure Blend of Nature and Luxury.
          </h2>
          <p className="text-pretty text-sm text-foreground/70">
            Discover a luxury crafted by nature itself—free from chemicals,
            designed to indulge your senses with uncompromised purity and
            timeless elegance.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 max-w-3xl text-center py-14">
        <p>
          Experience flawless skin with our serum, crafted from nourishing
          coconut oil, aloe vera, and kojic acid to target pigmentation. Infused
          with niacinamide for refined pores, vitamin E for richness, and fruit
          extracts for tightening and rejuvenation. Unlock your skin’s natural
          radiance with this luxurious, all-in-one formula.
          <br />
          <br />
          <br />
          Personalize your experience with a choice of bottle, dropper or pump.
          Tailor your formula with a mild fragrance or completely
          fragrance-free. Luxury reimagined for you, by you.
        </p>
      </div>
      <div className="flex flex-wrap">
        <Image
          className="block md:h-[500px] w-auto"
          src="/product/dropper 7.svg"
          alt="Product Pump"
          width={400}
          height={200}
          priority
        />
        <Image
          className="block md:h-[500px] w-auto"
          src="/product/pump-10.svg"
          alt="Product Pump"
          width={200}
          height={100}
          priority
        />
      </div>
      <div className="flex justify-center align-middle items-center py-20 w-full gap-8 px-8">
        <div className="flex flex-col gap-2 max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl">OUR COMMITMENTS</h2>
          <div>
            <Flower2 />
            <HeartHandshake />
            <Recycle />
            <LandPlot />
          </div>
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
        <p className="text-base text-foreground/70 text-center max-w-3xl">
          We’re committed to bringing you more natural products, so you can
          indulge in the luxury of nature while avoiding harsh chemicals on your
          skin. Experience pure, effective skincare the way it was meant to be.
          <br />
          <span className="italic text-foreground">
            Stay tuned – Suggestions are welcome, please write us at
            ideas@dandua.com.
          </span>
        </p>
      </footer>
    </div>
  );
}
