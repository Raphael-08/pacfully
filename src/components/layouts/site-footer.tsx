import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export const SiteFooter = () => {
  return (
    <footer className="bg-background py-12 px-4 border-t">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image src={"/logo.svg"} width={30} height={30} alt="PF"></Image>
              <span className="text-2xl font-bold">{siteConfig.name}</span>
            </div>
            <div className="flex space-x-4">
              <span>We growing up your business with our services</span>
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
          <div className="space-y-4 md:text-right">
            <Link href="/services" className="block text-muted-foreground hover:text-muted">
              Services
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900">
              About US
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900">
              Contact US
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 {siteConfig.name} Inc. All rights reserved.
          </p>
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700 mt-4 md:mt-0"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
