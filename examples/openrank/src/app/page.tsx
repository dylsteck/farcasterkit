'use client'
import Image from "next/image";
import { OpenRankProvider } from '../../../../packages/farcasterkit/index'
import DemoComponent from "./component";

export default function Home() {
  return (
    <OpenRankProvider baseURL="http://127.0.0.1:3001">
      <DemoComponent />
    </OpenRankProvider>
  );
}
