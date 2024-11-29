import Head from 'next/head'
import AboutUs from '../components/about_us/AboutUs'
// import Image from 'next/image'
import Hero from '../components/Hero'
import Menu from '../components/Menu/Menu'
import Values from '../components/Values/Values'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foodii</title>
      </Head>
      <Hero/>
      {/* <Values/> */}
      <Menu/>
      <AboutUs/>

    </div>
  )
}
