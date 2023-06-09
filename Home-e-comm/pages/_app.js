import '../styles/globals.css'
import Header from "../component/header"
import Footer from "../component/footer"
import Head from 'next/head'
import NProgress from "nprogress"
import { Router } from 'next/router'
import { JssProvider } from 'react-jss'
function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner:false})

  Router.events.on("routeChangeStart",()=>{
    NProgress.start()
  })
  Router.events.on("routeChangeComplete",()=>{
    NProgress.done()
  })
  return (  
   <div>
      <Head>
        <title>E-commerce Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/9.jpg" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
        <link rel='stylesheet' href='nprogress.css'/>
      </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
 </div>)
}

export default MyApp
