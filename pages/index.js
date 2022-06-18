import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import GridSection from '../components/GridSection'
import IntroduceSection from '../components/IntroduceSection'
import LandingSlider from '../components/LandingSlider'
import Navbar from '../components/Navbar'
import PopularSection from '../components/PopularSection'
import ServeSection from '../components/ServeSection'
import VideoSection from '../components/VideoSection'


export default function Home() {

  
  return (
  
    <div >
      

      <Head>
        <title>Ghazachi | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      
      <LandingSlider/>
      <ServeSection/>
      <PopularSection title='چند تا از محبوب ترین غذامون' bg={'#efefef'}/>
      <IntroduceSection/>
      <VideoSection/>
      <PopularSection title='دستور پخت محبوب ترینامون' bg={'#fff'}/>
      <GridSection/>
      
    </div>
  )
}
