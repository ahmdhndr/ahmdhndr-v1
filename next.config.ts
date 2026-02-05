import { NextConfig } from "next";
import createMDX from "@next/mdx";

import "./src/lib/env";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

const withMDX = createMDX({
  // markdown plugin
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
