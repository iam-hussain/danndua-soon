"use client";
import SubscribeFrom from "@/components/molecules/subscribe-form";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Subscribe() {
  const [submitted, setSubmit] = useState(false);

  const onSuccessHandler = () => setSubmit(true);

  return (
    <div className="flex justify-center flex-col align-middle items-center relative max-w-xl">
      <div className={cn("flex justify-center flex-col align-middle items-center gap-6 pb-6 duration-300 transition-all ease-in-out opacity-100", {
        'opacity-0': submitted
      })}>
        <div className="flex flex-col text-center w-full px-2">
          <p className="md:text-2xl text-xl">Stay connected with us!</p>
          <p className="text-foreground/80 text-sm">
            Sign up to receive the latest updates, exclusive offers, and product
            news directly from us.
          </p>
        </div>
        <SubscribeFrom onSuccess={onSuccessHandler} />
      </div>
      
      <div className={cn("flex flex-col text-center w-full px-2 absolute duration-300 transition-all ease-in-out delay-300 opacity-0", {
        "opacity-100": submitted
      })}>
          <p className="text-xl">
            Thank you for connecting with DAN N DUA!
            <br />
            You&apos;ll hear from us soon with exciting updates and offers.
          </p>
        </div>
    </div>
  );
}
