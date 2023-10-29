import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Header from '../components/sections/homepage/Header'
import WhatsInTheBox from '@/components/sections/homepage/WhatsInTheBox'
import GettingStarted from '@/components/sections/homepage/GettingStarted'
import Footer from '@/components/sections/homepage/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Header />
      <WhatsInTheBox />
      <GettingStarted />
      <Footer />
    </Layout>
  )
}
