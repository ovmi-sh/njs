import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex gap-2">
          <Logo />
        </div>
        <p className="text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href="https://ovmi.sh"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            ovmi.sh
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel
          </a>
          .
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-center text-sm leading-loose md:text-left">
            The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
