import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "@/env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  if (env.NEXT_PUBLIC_NODE_ENV === "development") {
    return `${env.NEXT_PUBLIC_DEV_URL}${path}`;
  } else {
    return `${env.NEXT_PUBLIC_BASE_URL}${path}`;
  }
}
