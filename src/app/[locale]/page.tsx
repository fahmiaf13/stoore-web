"use client";

import Image from "next/image";
// import logo from "@/assets/logo.svg";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  console.log(t("title"));
  return (
    <main className="w-3/4 min-h-screen flex justify-center">
      <section className="w-full h-full items-center flex">
        <div className="w-1/2 ">
          <div className="font-mont-heavy uppercase space-y-1 font-bold">
            {/* {t("title")} */}
            <div className="text-7xl">unite everything,</div>
            <div className="text-3xl ">
              just only one single <span className="text-primary tracking-tighter">link!</span>
            </div>
          </div>
          <div className="mt-16">
            <div className="relative w-3/4">
              <Input placeholder="your domain" className="font-bold focus-visible:ring-primary placeholder:text-gray-400 border-primary border-2 caret h-12 w-full text-primary text-xl rounded-lg pl-[6.7rem]" />
              <div className="absolute top-0 left-3 h-12">
                <div className="flex items-center h-full gap-1 text-primary">
                  <div className="font-bold text-xl ">stoore.id</div>
                  <div className="font-bold text-xl rotate-[18deg]">|</div>
                </div>
              </div>
              <button className="absolute top-0 text-xl font-mont-heavy right-0 rounded-e-lg p-3 bg-primary h-full">
                <div className="text-white">BOOM!</div>
              </button>
            </div>
            <div className=" text-gray-500">just one click, and watch the magic happen</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-full border rounded-lg h-96"></div>
        </div>
      </section>

      {/* <div className="flex w-[900px] h-[300px] relative">
          <Image fill src="https://placehold.co/900x300" alt="banner" />
        </div> */}
    </main>
  );
}
