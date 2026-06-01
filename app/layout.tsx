import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard – Predict Which SaaS Customers Will Churn Next",
  description: "Analyzes usage patterns, support tickets, and billing data to identify customers likely to cancel and suggests retention strategies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="db570f69-3c75-4cfd-8a43-641ca10e1d53"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
