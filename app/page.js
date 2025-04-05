import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
export default function Home() {
  return (
   <div className="m-6 flex flex-col gap-6">
    <Header/>
    <Hero/>
   </div>
  );
}
