import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import {FaUser} from 'react-icons/fa';

import { motion } from 'framer-motion'
import {useLayoutEffect} from 'react';
import SectionHead from '../components/SectionHead';
import { App_SectionHead, handel_navlink_source, home_imageWrap, home_p__ul, home_sectionButton } from '../AZ-Framer';
import homeImg from '../assets/images/hero-1.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  	
  const vr0 = App_SectionHead;
  const vr1 = home_imageWrap;
  const vr2 = home_p__ul;
  const vr3 = home_sectionButton;

  useLayoutEffect(() => {
    handel_navlink_source('Home');
  }, []);


  return (
    <>
      <Head>
        <meta name="og:title" content="Next | Portfolio Card - Home" />
        <meta name="og:description" content="Hello, I’m a Surzil Dongo, Graphic Designer based on Paris. I have rich experience in graphic design & building and customization." />
        <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, home page, Surzil Dong home" />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='' />
        <meta property='og:image' content='/home.png' />
      </Head>

    	
      <Container as='section' id='Home' className='ContentInfo_item container-fluid p-0'>
            <Row className='justify-content-between'>
                <motion.div className="imageWrap col-lg-6"      variants={vr1}
                    initial='hidden'    whileInView='visible' 
                    viewport={{ once: true }}                    
                >
                  <Image src={homeImg} alt="home-img" />
                </motion.div>
                <Col lg={6} className="contentWrap">
                    <SectionHead  txt='Who I Am' AppSectionHead={vr0} />
                    <motion.p       variants={vr2}
                        initial='hidden'    whileInView='visible' 
                        viewport={{ once: true }}
                    >
                        Hello, I’m a Surzil Dongo, Graphic Designer based on Paris. I have rich experience in graphic design & building and customization.
                    </motion.p>
                    <motion.ul      variants={vr2}
                        initial='hidden'    whileInView='visible' 
                        viewport={{ once: true }}
                    >                        
                        <li><span>Phone :</span> + 113-804-9098.</li>
                        <li><span>Email :</span> contact@dongo.com.</li>
                        <li><span>Address :</span> 1000 Proctor St France.</li>
                        <li><span>Freelancer :</span> Available.</li>
                    </motion.ul>
                    
                    <Link href='/about' title='about' className='sectionButton mb-2'>
                        <motion.button                        
                            variants={vr3}
                            initial='hidden'    whileInView='visible' 
                            viewport={{ once: true }}       style={{ originZ: 0.5 }}                            
                        >
                            <span> <FaUser /> </span> <span className="sectionButton_txt">More about me</span>
                        </motion.button>                    
                    </Link>
                </Col>
            </Row>
        </Container>
    </>
  )
}
