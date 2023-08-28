import React, { useState } from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBehance, FaUser, FaCoffee, FaSmile, FaMedal, FaCertificate} from 'react-icons/fa';
import {AiFillFolderAdd} from 'react-icons/ai';
import {VscQuote} from 'react-icons/vsc';

import avt1 from '../../assets/images/avatar1.png';
import avt2 from '../../assets/images/avatar2.png';
import avt3 from '../../assets/images/avatar3.png';

import clt1 from '../../assets/images/client1.jpg';
import clt2 from '../../assets/images/client2.jpg';
import clt3 from '../../assets/images/client3.jpg';
import clt4 from '../../assets/images/client4.jpg';
import clt5 from '../../assets/images/client5.jpg';
import clt6 from '../../assets/images/client6.jpg';


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import signature from '../../assets/images/signature.png'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { about_cltVr, about_fctVr, about_infoVr, about_tstVr, App_SectionHead, handel_navlink_source } from '../../AZ-Framer';

import { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import SectionHead from '../../components/SectionHead';
import { TestiBio, TestiImg, TestiP } from '../../components/about/Testimonials';
import { useLayoutEffect } from 'react';
import Head from 'next/head';

interface responsive_setting{
    dots: boolean,
    infinite: boolean,
    slidesToShow: number,
    slidesToScroll: number,
}

interface setting{
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    responsive: [
        {
          breakpoint: number,
          settings: responsive_setting
        }
    ]
}


function About() {
    const vr0 = App_SectionHead;
    const vr1 = about_infoVr;
    const vr2 = about_fctVr;
    const vr3 = about_tstVr;
    const vr4 = about_cltVr;

    const socis: [ReactElement, string, string][] = [
        [<FaFacebookF />, 'Fcebook', 'https://www.facebook.com/' ],
        [<FaTwitter />, 'Twitter', 'https://twitter.com/?lang=en' ],
        [<FaInstagram />, 'Instagram', 'https://www.instagram.com/' ],
        [<FaDribbble />, 'Dribbble', 'https://dribbble.com/' ],
        [<FaBehance />, 'Behance', 'https://www.behance.net/']
    ];

    const factsDt: [ReactElement, string][] = [
        [<AiFillFolderAdd className='trnsClr' />, "129 Project Completed"],
        [<FaCoffee className='trnsClr' />, "+1000 Cup of coffee"],
        [<FaSmile className='trnsClr' />, "400 Satisfied Clients"],
        [<FaMedal className='trnsClr' />, "15 Nominees winner"],
        [<FaCertificate className='trnsClr' />, "8 Years job experience"]
    ];

    const testmonialsDt: [StaticImageData, string, string, string, string][] = [
        [ avt1, "Mariam Mamado",  "CEO Founder",
            "Allison did absolutely excellent work for me designing a logo, website, and other promotional material and did it quickly! I will use Allison every time I have a need. I can’t say enough positive things about the experience",
            "../../assets/images/avatar1.png"
        ],
        [ avt2, "Allison Smith",  "CEO Founder",
            "I’ve worked with Ayoub on multiple projects, including the complete overhaul and re-design of our website. He is highly skilled and very creative. Always quick to respond to requests and incredibly thorough. Thanks, Ayoub!",
            "../../assets/images/avatar2.png"
        ],
        [ avt3, "Ayoub Martin",  "Web Designer",
            "I’ve been working with Mariam exclusively since 2014 and it has been great! He works fast and consistently delivers high-quality work. He takes my vision and translates it into a professional design that functions for my business goals.",
            "../../assets/images/avatar3.png"
        ]
    ];

    const clts: string | undefined | any[] = [clt1, clt2, clt3, clt4, clt5, clt6];
    const aboutChildR = useRef<HTMLDivElement>(null);
    const aboutParentR = useRef<HTMLElement>(null);
    const [aboutLs, setAboutLs]:[string|boolean, Function] = useState(false);
    const [wl, setWl] = useState(0);

    const settings: setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                  infinite: true,
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
            }
        ]
    };

    
    typeof window !== 'undefined' && window.addEventListener('resize', () => { 
        typeof window !== 'undefined' && setWl(window.innerWidth); 
        if(aboutParentR.current){
            aboutParentR.current.style.height = `${aboutChildR.current!.offsetHeight}px`;            
        }      
    });

    
    useMemo(() => {
        typeof window !== 'undefined' && setWl(window.innerWidth);
        
        setTimeout(() => {
            if(aboutParentR.current){
                aboutParentR.current.style.height = `${aboutChildR.current!.offsetHeight}px`;                
            }          
        }, 50);

    },[] );


    useEffect(()=>{
        setAboutLs(true);
    },[])

    useLayoutEffect(() => {
        handel_navlink_source('About');
    }, []);

    return (
        <>
        {
        aboutLs && <>
        <Head>
            <meta name="og:title" content="Next | Portfolio Card - About" />
            <meta name="og:description" content="Hi! , I am a graphic designer, and I'm very passionate and dedicated to my work. With 8 years experience as a professional graphic designer" />
            <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, about page, Surzil Dong about, facts, testimonials, clients" />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='/about' />
            <meta property='og:image' content='/about.png' />
        </Head>

        <section id='About' className='ContentInfo_item'>
            <SectionHead txt="About Me" AppSectionHead={vr0} />

            <div className="aboutInfo">
                <motion.div className="aboutInfo_wrap trnsClr"  variants={vr1}
                    initial='hidden'      whileInView='visible'      viewport={{ once: true }}
                >
                    <h5>I Am a <span className='trnsClr'>Graphic Designer</span> based in Paris</h5>
                    <p>Hi! , I am a graphic designer, and I'm very passionate and dedicated to my work. With 8 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <p>but I find the most satisfaction in seeing the finished product do everything for you that it was created to do but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                    <Image src={signature} alt="signature-img" />
                    <div className="aboutInfo_wrap_social">
                        <Link href='/contact' className='sectionButton' title='contact'>
                            <button>
                                <span> <FaUser /> </span>  <span className="sectionButton_txt">Contact Me</span>
                            </button>
                        </Link>
                        <div>
                            {
                                socis.map( (soc, c) => {
                                    return(
                                        <Link href={soc[2]} key={c} className='trnsClr' target='_blank' rel="noreferrer" title={soc[1]}> {soc[0]} </Link>
                                    )
                                } )
                            }
                        </div>
                    </div>
                </motion.div>
                <div className="aboutInfo_facts">
                    {
                        factsDt.map( (fci, f) => {
                            return(
                                <motion.div className="aboutInfo_facts_item trnsClr" key={f}   variants={vr2}     custom={f}
                                    initial='hidden'      whileInView='visible'      viewport={{ once: true }}
                                >
                                    <>{fci[0]}</>
                                    <span>{fci[1]}</span>
                                </motion.div>
                            )
                        } )
                    }
                </div>
            </div>

            <h6 className='sectionSubHead'>Testimonials</h6>

            <motion.article className='slider_wrap_0' ref={aboutParentR}  variants={vr3}
                initial='hidden'      whileInView='visible'      viewport={{ once: true }}
            >            
                <div className="slider_wrap testimonials_wrap" ref={aboutChildR}>
                    <Slider {...settings}>
                        {
                            testmonialsDt.map( (tst, t) => {
                                return(
                                    <div className="testimonialWrap" key={t}>
                                        <div className='testimonials_item'>
                                            <div className="qutaWrap trnsClr">
                                                <VscQuote/>
                                            </div>
                                            {
                                                wl >= 400.01
                                                ? <>
                                                    <div className="testiTxt">
                                                        <TestiP txt={tst[3]} />
                                                        <TestiImg src={tst[0]} ndx={t} baseSrc={tst[4]} />
                                                    </div>
                                                    <TestiBio name={tst[1]} job={tst[2]} />
                                                </>
                                                : <div className="testiTxt">
                                                    <div className="testiBioWrap">
                                                            <TestiImg src={tst[0]} ndx={t} baseSrc={tst[4]} />
                                                            <TestiBio name={tst[1]} job={tst[2]} />
                                                    </div>
                                                    <TestiP txt={tst[3]} /> 
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </Slider>
                </div>
            </motion.article>

            <h6 className='sectionSubHead clients'>My Clients</h6>
            <div className="clientsWrap">{
                clts.map( (clt, c) => {
                    return( 
                        <motion.div variants={vr4}    custom={c} key={c}
                            initial='hidden'      whileInView='visible'      viewport={{ once: true }}
                        >
                            <Image src={clt} alt={`client-${c+1}`} className='img-fluid' 
                                width={400} height={300} loading='lazy' 
                                blurDataURL={`data:../../assets/images/client${c+1}.jpg`}
                            />
                        </motion.div>
                    )

                } )
            }</div>
        </section>
        </>
    }
    </>
    )
}

export default About