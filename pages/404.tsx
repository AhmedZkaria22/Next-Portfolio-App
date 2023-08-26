import React, { ReactElement } from 'react'
import Layout from '../components/Layout'
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Spinner from '../components/Spinner';
import { Mulish } from 'next/font/google';
import dynamic from 'next/dynamic';

const mulish = Mulish({ subsets: ['latin'] });

function Error() {
    const er404Vr: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.2, duration: 0.2 } }
    }

    const er404ChVr: Variants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    }

    const DynamicImg = dynamic(() => import('../components/ErrorImage'), {
        // loading: () => <Spinner />
        loading: () => <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    })

    return (
        <section id='ErrorSec' className={`ErrorPage ${mulish.className}`}>
            <DynamicImg />            

            <div className='errorWrap'>
                <motion.p variants={er404Vr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }}
                className='er404'>404</motion.p>

                <motion.p variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
                transition={{ delay: 0.4,  duration: 0.2 }}
                className='vrLine'>|</motion.p>

                <motion.p variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
                transition={{ delay: 0.6,  duration: 0.5 }}
                className='erMsg'>Page not found</motion.p>
            
                <div className='backWrap'>
                    <p className='er404'>404</p>
                    <motion.p variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
                        transition={{ delay: 0.8,  duration: 0.2 }}
                        className='vrLine'>|</motion.p>
                    
                    <Link href={'/'} className='backLink' title='back to home'>
                        <motion.span  variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
                        transition={{ delay: 1.0,  duration: 0.5 }}>Back Home</motion.span>
                    </Link>
                </div>
            </div>
        </section>
    )
}



Error.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
}

export default Error
