import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center px-5 gap-2.5 h-16 font-black  bg-gradient-to-r from-blue-700 to-zinc-900">
      <span><IconBrandReact size={30} stroke={1}/></span>
      <span className="text-2xl">React</span>
    </Link>
  )
}