import { motion } from 'framer-motion';
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import {IoMdCloudDownload} from 'react-icons/io'
import { App_SectionHead, handel_navlink_source, resume_h6, resume_p, resume_progress, resume_span } from '../../AZ-Framer';
import cvFile from '../../assets/cv.pdf';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHead from '../../components/SectionHead';
import SectionSubHead from '../../components/SectionSubHead';
import Link from 'next/link';
import Head from 'next/head';

function Resume() {
    const vr0 = App_SectionHead;
    const vr1 = resume_h6;
    const vr2 = resume_span;
    const vr3 = resume_p;
    const vr4 = resume_progress;

    const experienceDt: string[][] = [
        [
            'Professional Graphic Designer',    '2019 - present',
            'I am an experienced designer and have worked as a graphic designer for more than 10 years.'
        ],
        
        [
            'Frontend-Developer',   '2015 - 2019',            
            'I am a part-time front end developer and excited to show real web pages from design with maintaining, optimizing and improving web pages'
        ],
        
        [
            'Graphic Designer',     '2013 - 2015',            
            'I am a full-time graphic designer and my passion is to design product packaging with 100% unique design, high quality, and amazing service.'
        ],
        
        [
            'Academic Degree',  '2010 - 2013',
            'I got a Marketing degree from Alexandria university after mis graduate to improve my marketing skill - From Oct 2010 to Jun 2013.'
        ],
        
        [
            'Bachelor’s Degree',    '2008 - 2010',
            'Bachelor’s degree in Management Information Systems , general degree is excellent, graduated from Alexandria university - From Oct 2008 to Jun 2010.'
        ],
        
        [
            'Specialization Course',    '2005 - 2008',
            'I got many courses to improve my graphic design skill from udacity website and ITI , It’s as follows Branding design, Website design and Print design'
        ]
    ];

    const skillsDt: string[][] = [
        ['Photoshop', '92'],
        ['Javascript', '92'],
        ['Illustrator', '80'],
        ['React', '75'],
        ['Adobe XD', '75'],
        ['CSS', '70'],
        ['Figma', '70'],
        ['HTML', '65']
    ];
    
    const factWrap = useRef<HTMLDivElement>(null);
    const obsOption = {
        root: null,  threshold: 0, rootMargin: "0px"
    }
    
    useEffect( () => {
        let counters: HTMLSpanElement[] = Array.from(document.querySelectorAll('.skills_item p span'));
        let speed = 50;
        
        let counterObserver = new IntersectionObserver( (entries, observer) => {
            let [entry] = entries;
            if( ! entry.isIntersecting ) return;            
            
            counters.forEach( (counter, index: number) => {
                const updateCounter = () => {
                    const targetNumber = +(counter.dataset.target as string) ;
                    const initialNumber = +(counter.textContent as string) ;
                    const initialPerCount = targetNumber / speed;
                    if( initialNumber < targetNumber ){                        
                        counter.textContent = Math.ceil(initialNumber + initialPerCount).toString(); 
                        setTimeout(() => { 
                            updateCounter();
                        }, 50);
                    }
                }
                updateCounter();     
            } );
        }, obsOption);
        
        counterObserver.observe(factWrap.current as HTMLElement);

            
        const prW = (document.querySelector('.progressWrap') as HTMLDivElement).clientWidth,
            chW = (document.querySelector('.progressWrap span') as HTMLSpanElement).clientWidth;

        if( (chW / prW * 100) === 100 ){
            const sklSps: HTMLSpanElement[] = Array.from(document.querySelectorAll('.progressWrap span'));
            for (let i = 0; i<sklSps.length; i++) {
                sklSps[i].style.width = `${skillsDt[i][1]}%`;
            }
        }
    }, [obsOption]);

    useLayoutEffect(() => {
        handel_navlink_source('Resume');
    }, []);

    return ( 
    <>
        <Head>
            <meta name="og:title" content="Next | Portfolio Card - Resume" />
            <meta name="og:description" content="Professional Graphic Designer (2019 - present) : I am an experienced designer and have worked as a graphic designer for more than 10 years." />
            <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, resume page, Surzil Dong resume, skills, download cv, cv" />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='/resume' />
            <meta property='og:image' content='/resume.png' />
        </Head>

        <Container as='section' id='Resume' className='ContentInfo_item container-fluid'>
            <SectionHead  txt='My Resume' AppSectionHead={vr0}/>

            <Row>{
                experienceDt.map( (expr, e) => {
                    return(                        
                        <Col lg={6} sm={12} key={e}>
                            <motion.h6 className='cardHead' variants={vr1} 
                                initial='hidden'    whileInView='visible' viewport={{ once: true }}
                            > {expr[0]} </motion.h6>


                            <motion.span    variants={vr2}  custom={e} className='trnsClr' 
                                initial='hidden'    whileInView='visible' viewport={{ once: true }}                                
                            > {expr[1]} </motion.span>

                            <motion.p   variants={vr3}     custom={e} 
                                initial='hidden'    whileInView='visible' viewport={{ once: true }}
                            > {expr[2]} </motion.p>                        
                        </Col>
                    )
                } )
            }</Row>
            
            <SectionSubHead  txt='My Skills' />

            <Row ref={factWrap}>{
                skillsDt.map( (skl, s) => {
                    return(                        
                        <Col lg={6} sm={12} className="skills_item" key={s}>
                            <p>{skl[0]}<span data-target={skl[1]}>0</span></p>

                            <div className="progressWrap">
                                <motion.span  className=''   variants={vr4}     custom={s}
                                    initial='hidden'    whileInView='visible'
                                    viewport={{ once: true }}
                                ></motion.span>
                            </div>

                        </Col>
                    )
                } )
            }</Row>

            <Link href={cvFile} target='_blank' className='sectionButton' title='Download CV' rel="noopener noreferrer" download>
                <button>
                    <span> <IoMdCloudDownload /> </span> 
                    <span className='sectionButton_txt'>Download my cv </span>
                </button>
            </Link>
        </Container>
    </>
    )
}

export default Resume
