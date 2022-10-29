import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

export default function Layout({children, title, description}: Props) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Header
        ></Header>
            {children}
        <Footer></Footer>
    </>
  )
}
