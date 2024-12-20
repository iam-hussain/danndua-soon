"use server";

import { FormSchemaType } from "@/lib/form";
import prisma from "./db";

export async function createSubscriber(input: FormSchemaType) {
  try {
    const created = prisma.subscriber.create({ data: input });
    return {
      success: true,
      data: created,
      message: "",
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
}
