import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/Components/Layout/Layout'
import FeaturedServices from '@/Components/Content/FeaturedService'
import About from '@/Components/Content/About'
import Client from '@/Components/Content/Clients'
import CTA from '@/Components/Content/CallToAct'
import OnFucus from '@/Components/Content/OnFocus'
import Features from '@/Components/Content/Features'
import ServicesSection from '@/Components/Content/ServicesSection'
import Faq from '@/Components/Content/Faq'
import Team from '@/Components/Content/Team'
import ParticlesJS from '@/Components/Partials/Particles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <FeaturedServices/>
      <About/>
      {/* <ParticlesJS/> */}
      <Features/>
      <Client/>
      <CTA/>
      <OnFucus/>
      <ServicesSection/>
      {/* <Faq/> */}
      {/* <Team/> */}
    </Layout>
  )
}
