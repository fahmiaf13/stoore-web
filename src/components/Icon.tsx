"use client";

import dynamic from "next/dynamic";
import { IconProps } from "@iconify/react/dist/iconify.js";
const DynamicIcon = dynamic(() => import("@iconify/react/dist/iconify.js").then((mod) => mod.Icon));

export default function Icon(props: IconProps) {
  return <DynamicIcon {...props} />;
}
