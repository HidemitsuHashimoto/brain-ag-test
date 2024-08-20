import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TabContextProvider } from "@/persistence/tabContext";
import { ProducerContextProvider } from "@/persistence/producerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brain Agriculture",
  description: "Brain Agriculture - Manager Agriculture Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TabContextProvider>
          <ProducerContextProvider>
            {children}
          </ProducerContextProvider>
        </TabContextProvider>
      </body>
    </html>
  );
}
