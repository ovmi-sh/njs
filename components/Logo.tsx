import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export default function Logo() {
  return (
    <>
      <Icons.logo />
      <span className="hidden font-bold sm:inline-block">
        {siteConfig.name}
      </span>
    </>
  );
}
