import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://caredee.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Caredee | AI Home Care Platform",
  description:
    "Caredee is an AI-powered home care and nursing operations platform for patient care, caregiver workflows, family visibility, consent, medical documents, and clinical review.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Caredee | AI Home Care Platform",
    description:
      "AI-powered nursing home and home-care operations for patient journeys, daily care workflows, family visibility, consent, and reviewable clinical intelligence.",
    images: [`${basePath}/brand/caredee-logo-slogan-thai.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
