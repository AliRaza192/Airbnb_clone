import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import styles from './page.globals.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Explore from '@/components/Explore'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <>
      <Header />
      <Banner />
      <Explore />
      <Footer/>
    </>
  )
}
