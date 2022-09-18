import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Body from './components/body'

export default function Home() {
  return (
    <div>
    <div className="background">
    <Header />
    </div>
    <div className="imgbody">
     <Body />
     </div>
    </div>
  )
}
