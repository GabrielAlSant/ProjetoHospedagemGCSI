import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Body from './components/body'
import HeaderCard from './components/headercard'
import Cards from './components/cards'

export default function Home() {
  return (
    <div>
    <div className="background" width={"100%"}>
    <Header />
    </div>
    <div className="imgbody">
     <Body />
     </div>
     <HeaderCard />
     <Cards />
    </div>
  )
}
