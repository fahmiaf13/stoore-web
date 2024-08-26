"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { Link, useRouter, usePathname } from "@/navigation";
// import {  } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Icon from "../Icon";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const handleChangeLanguage = (val: string) => {
    console.log(val);
    router.push(pathname, { locale: val });
  };
  return (
    <header className="fixed z-10 flex justify-center h-28 items-center w-full">
      <nav className="w-3/4 border rounded-full bg-white p-5">
        <div className="flex w-full justify-between items-center">
          <div className="w-1/3 flex items-center gap-3 hover:opacity-60 duration-300 cursor-pointer">
            <Link href="/">
              <Image src={logo} height={40} width={40} alt="logo" />
            </Link>
            <div className="text-4xl font-bold text-primary -mt-2 tracking-tight">stoore</div>
          </div>
          <div className="flex gap-3 w-1/3 justify-end">
            <Button className="font-bold w-1/4" variant="outline">
              Register
            </Button>
            <Button className="font-bold w-1/4 me-5">
              <Link href="/login">Login</Link>
            </Button>

            {locale === "id" ? (
              <Button variant="outline" onClick={() => handleChangeLanguage("en")} className="font-bold w-1/4 gap-3">
                <Icon icon="openmoji:flag-indonesia" width={40} />
                ID
              </Button>
            ) : locale === "en" ? (
              <Button variant="outline" onClick={() => handleChangeLanguage("id")} className="font-bold w-1/4 gap-3">
                <Icon icon="openmoji:flag-england" width={40} />
                EN
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
