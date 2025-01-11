// import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Subscribe from "@/components/molecules/subscribe";
import FollowUs from "@/components/molecules/follow-us";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle items-center m-auto">
      {/* <div className="fixed top-2 right-6">
        <ThemeModeToggle />
      </div> */}
      <main className="flex flex-col gap-8 row-start-2 items-center min-h-svh w-full px-8">
        <nav className="flex py-4 justify-center w-full fixed top-0 z-50 bg-background/50 backdrop-blur-sm px-6">
          <Image
            src="/brand/brand-white.svg"
            alt="DAN N DUA"
            width={100}
            height={100}
            priority
          />
        </nav>

        <div className="flex flex-col md:flex-col justify-center align-middle items-center m-auto">
          <div className="flex flex-col gap-6 justify-center align-middle items-center z-30">
            <div className="flex gap-12 flex-col">
              <div className="w-full flex justify-center align-middle flex-col items-center gap-2">
                <h2 className="text-center text-3xl">
                  Empower Your <br className="md:hidden" />
                  Beauty, Naturally.
                </h2>
                <p className="text-center text-base text-foreground/70">
                  Discover the perfect blend of luxury, science, and nature in
                  skincare.
                </p>
              </div>
              <Image
                src="/brand.png"
                alt="DAN N DUA"
                className="max-w-full md:pb-4 pb-12"
                width={600}
                height={100}
                priority
              />
              <h1 className="hidden">DAN N DUA</h1>
            </div>
          </div>
          <div className="z-10 max-w-screen-lg overflow-hidden flex md:pt-10 flex-col">
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
              alt="DAN N DUA - Product Pump Open"
              width={200}
              height={200}
              priority
            />
            <Image
              className="block md:h-[200px] w-auto"
              src="/product/pump-10-1-h.png"
              alt="DAN N DUA - Product Pump Close"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </main>

      <section className="flex flex-col justify-center align-middle items-center w-full gap-20 pt-10 pb-36 px-6 max-w-2xl">
        <div className="flex md:flex-row flex-col-reverse justify-center align-middle items-center w-full gap-8">
          <Image
            src="/product/main-removebg.png"
            alt="DAN N DUA - Product"
            width={300}
            height={300}
            priority
          />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl md:text-4xl">
              Your Pure Blend of <br /> Nature and Luxury.
            </h2>
            <p className="text-pretty text-base text-foreground/70">
              Discover a luxury crafted by nature itself—free from chemicals,
              designed to indulge your senses with uncompromised purity and
              timeless elegance.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center text-base text-foreground/80">
          <p>
            Experience flawless skin with our serum, crafted from nourishing
            coconut oil, aloe vera, and kojic acid to target pigmentation.
            Infused with niacinamide for refined pores, vitamin E for richness,
            and fruit extracts for tightening and rejuvenation. Unlock your
            skin’s natural radiance with this luxurious, all-in-one formula.
            <br />
            <br />
            Personalize your experience with a choice of bottle, dropper or
            pump. Tailor your formula with a mild fragrance or completely
            fragrance-free. Luxury reimagined for you, by you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center align-middle items-center">
          <Image
            className="md:h-[500px] h-[300px] w-auto"
            src="/product/pump-11-cropped.svg"
            alt="DAN N DUA - Product Pump"
            width={500}
            height={500}
            priority
          />
          {/* <Image
          className="block md:h-[500px] w-auto"
          src="/product/pump-12-cropped.svg"
          alt="Product Pump"
          width={200}
          height={100}
          priority
        /> */}
        </div>
      </section>
      <div className="flex flex-col justify-center align-middle items-center py-20 w-full gap-8 px-8 border-t-2">
        <h2 className="text-xl md:text-2xl">OUR COMMITMENTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-2xl text-center">
          <div className="flex flex-col gap-2 justify-center align-middle items-center">
            <Image
              className="block h-[80px] w-auto"
              src="/commitment/nature.png"
              alt="Responsible Sourcing"
              width={200}
              height={200}
              priority
            />
            <p className="text-foreground/70 text-sm">RESPONSIBLE SOURCING</p>
          </div>
          <div className="flex flex-col gap-2 justify-center align-middle items-center">
            <Image
              className="block h-[80px] w-auto"
              src="/commitment/group.png"
              alt="Act of Solidarity"
              width={200}
              height={200}
              priority
            />
            <p className="text-foreground/70 text-sm">ACTS OF SOLIDARITY</p>
          </div>
          <div className="flex flex-col gap-2 justify-center align-middle items-center">
            <Image
              className="block h-[80px] w-auto"
              src="/commitment/recycle.png"
              alt="Eco Design"
              width={200}
              height={200}
              priority
            />
            <p className="text-foreground/70 text-sm">ECO DESIGN</p>
          </div>
          <div className="flex flex-col gap-2 justify-center align-middle items-center">
            <Image
              className="block h-[80px] w-auto"
              src="/commitment/canada.png"
              alt="Made in Canada"
              width={200}
              height={200}
              priority
            />
            <p className="text-foreground/70 text-sm">MADE IN CANADA</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle items-center py-10 gap-8 px-6 border-t-2 border-b-2 w-full">
        <div className=" grayscale grid grid-cols-3 md:grid-cols-6 gap-4 y-gap-0 md:gap-8 w-full max-w-2xl text-center">
          <Image
            className="block h-[80px] w-auto"
            src="/payment/visa.png"
            alt="Pay us with Visa Card"
            width={120}
            height={120}
            priority
          />
          <Image
            className="block h-[80px] w-auto"
            src="/payment/maestro.png"
            alt="Pay us with Maestro Card"
            width={120}
            height={120}
            priority
          />
          <Image
            className="block h-[80px] w-auto"
            src="/payment/amex.png"
            alt="Pay us with American Express Card"
            width={120}
            height={120}
            priority
          />
          <Image
            className="block h-[80px] w-auto"
            src="/payment/apple.png"
            alt="Pay us with Apple Pay"
            width={120}
            height={120}
            priority
          />
          <Image
            className="block h-[80px] w-auto"
            src="/payment/paypal.png"
            alt="Pay us with PayPal"
            width={120}
            height={120}
            priority
          />
          <Image
            className="block h-[80px] w-auto"
            src="/payment/amazon.png"
            alt="Pay us with PayPal"
            width={120}
            height={120}
            priority
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center align-middle items-center py-20 w-full px-6">
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          <FollowUs />
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <Subscribe />
        </div>
      </div>
      <footer className="flex flex-col justify-center align-middle items-center pb-36 w-full gap-4 px-8 border-t-2 pt-10">
        <p className="text-base text-foreground/70 text-center max-w-2xl">
          We’re committed to bringing you more natural products, so you can
          indulge in the luxury of nature while avoiding harsh chemicals on your
          skin. Experience pure, effective skincare the way it was meant to be.
        </p>
        <p className="italic text-foreground/80">
          Stay tuned – Suggestions are welcome, please write us at
          ideas@dandua.com.
        </p>
      </footer>
    </div>
  );
}
