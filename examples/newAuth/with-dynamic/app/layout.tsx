import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
} from "../lib/dynamic";

import { FarcasterKitProvider } from "@/providers/FarcasterKitProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "with-dynamic",
  description: "Farcaster Kit with-dynamic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FarcasterKitProvider>
        <DynamicContextProvider
          settings={{
            environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
            walletConnectors: [
              EthereumWalletConnectors,
            ],
          }}
        >
          <DynamicWagmiConnector>
            <body className={inter.className}>{children}</body>
          </DynamicWagmiConnector>
        </DynamicContextProvider>
      </FarcasterKitProvider>
    </html>
  );
}
