import Link from "next/link";
import Image from "next/image";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export const SiteFooter = () => {
  return (
    <footer className="bg-background py-12 px-4 border-t">
      <div className="container mx-auto max-w-screen-2xl px-0">
        <div className="flex flex-col md:flex-row px-2 gap-8 items-start justify-between">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Pa</span>
              <Image src={"/logo.svg"} width={30} height={30} alt="PF"></Image>
              <span className="text-2xl font-bold">fully</span>
            </div>
            <div className="flex space-x-4">
              <span>India&apos;s First Hybrid Cloud Printing Ecosystem</span>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-foreground hover:text-muted-foreground"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-foreground hover:text-muted-foreground"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-foreground hover:text-muted-foreground"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-foreground hover:text-muted-foreground"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
          <div className="space-y-4 md:text-right flex flex-col items-start">
            <Link
              href="/services"
              className="block text-foreground hover:text-muted-foreground"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-muted-foreground"
            >
              About US
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-muted-foreground"
            >
              Contact US
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {siteConfig.name} Inc. All rights reserved.
          </p>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-muted-foreground/60 mt-4 md:mt-0"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
