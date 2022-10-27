import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({car, children, title = '', description = ''}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Header
          car={car}
        ></Header>
        {children}
        <Footer></Footer>
    </>
  )
}
