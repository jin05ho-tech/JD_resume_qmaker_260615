import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@napi-rs/canvas", "pdfjs-dist", "tesseract.js"],
  outputFileTracingIncludes: {
    "/api/analyze": [
      "./node_modules/@napi-rs/canvas/**/*",
      "./node_modules/pdfjs-dist/**/*",
      "./node_modules/tesseract.js/**/*",
      "./eng.traineddata",
      "./kor.traineddata",
    ],
  },
};

export default nextConfig;
