"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { formSchema, FormSchemaType } from "@/lib/form";
import { createSubscriber } from "@/app/actions";

const defaultValues = {
  email: undefined,
  phone: "",
  comments: "",
  agree: undefined,
};

export default function SubscribeFrom({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function handleSubscribe() {
    if (typeof window !== "undefined" && window.gtag) {
      // Log the subscription event
      window.gtag("event", "subscribe", {
        event_category: "Subscription",
        event_label: "Newsletter Subscription",
        value: 1,
      });
    }
  }

  async function onSubmit(values: FormSchemaType) {
    try {
      const response = await createSubscriber(values);
      console.log({ response });
      if (response.success) {
        console.log(values);
        form.reset(defaultValues);
        handleSubscribe();
        onSuccess();
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
      // toast.success("Thank you for connecting with DAN N DUA! You'll hear from us soon with exciting updates and offers.");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@domain.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your email to receive our updates and offers.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Phone Number</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder="(200) 000-0000"
                  {...field}
                  defaultCountry="CA"
                />
              </FormControl>
              <FormDescription>
                Provide your phone number to receive updates via text.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I’m interested in your skincare products..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Let us know what you&apos;re looking for or share your feedback.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to receive updates from DAN N DUA.
                </FormLabel>
                <FormDescription>
                  By checking this box, you consent to receiving promotional
                  emails, updates, and offers from DAN N DUA. You can
                  unsubscribe at any time.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign Me Up
        </Button>
      </form>
    </Form>
  );
}
