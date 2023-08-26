import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import { ReactElement, ReactNode, useMemo } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/error.css';
import '../styles/spinner.css';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ( (page) => page );
  const routerLis = useRouter();

  useMemo(() => {
    if(typeof document !== 'undefined'){
      document.onload = () => {
        (document.querySelector('.App') as HTMLDivElement).style.margin = `calc((100vh - ${(document.querySelector('.App') as HTMLDivElement).clientHeight}px)/2) auto`;
      }
    }
  }, []);

  
  useLayoutEffect(() => {
    if( typeof window !== 'undefined' && document.querySelector('#App') != null && document.querySelector("#appNav") != null ){
      const TargetElem = document.querySelector('.App') as HTMLDivElement;
        if( window.innerWidth > 767.9 ){
          (document.querySelector("#appNav") as HTMLElement).style.left = '0px';
          (document.querySelector("#appNav") as HTMLElement).classList.remove('appNavHide', 'appNavShow');
        } 
        TargetElem.style.margin = `calc((100vh - ${TargetElem.clientHeight}px)/2) auto`;
    }
    window.onresize = () => {  
      if( typeof window !== 'undefined' && document.querySelector('#App') != null && document.querySelector("#appNav") != null ){
        const TargetElem = document.querySelector('.App') as HTMLDivElement;

        if( window.innerWidth > 767.9 ){
          (document.querySelector("#appNav") as HTMLElement).style.left = '0px';
          (document.querySelector("#appNav") as HTMLElement).classList.remove('appNavHide', 'appNavShow');
        }           
        
        TargetElem.style.margin = `calc((100vh - ${TargetElem.clientHeight}px)/2) auto`;
      }
    }      
  }, []);    
  

  return(
    <>
    <Head>
      <title>Next | Portfolio Card</title>
      <meta charSet="utf-8" />
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00A3E1" />
      <meta name="description" content="Surzil Dong - Graphic Designer - Portfolio card app built using nextjs, reactjs, typescript, scss, framer motion, react slick" />
      <meta name="keywords" content="Surzil Dong, Graphic Designer, Porfolio app, nextjs, reactjs, typescript, scss, framer motion, react slick, 
        resources, graphic, tuto, design, portfolio, UX,  website, working, remote, fromhome, info,  Productivity,  Business,  tools,  corona,  front-end" />
      <meta property="og:site_name" content="Next React Portfolio app" />
    </Head>
      {
        routerLis.pathname === '/404'
        ? <Component {...pageProps} />
        : getLayout(
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
      }    
    </>
  )
}


