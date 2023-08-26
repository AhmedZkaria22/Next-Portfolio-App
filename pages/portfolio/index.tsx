import { motion } from 'framer-motion';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {BsPlus} from 'react-icons/bs';
import img1 from '../../assets/images/portfolio1.jpg';
import img2 from '../../assets/images/portfolio2.jpg';
import img3 from '../../assets/images/portfolio3.jpg';
import img4 from '../../assets/images/portfolio4.jpg';
import img5 from '../../assets/images/portfolio5.jpg';
import img6 from '../../assets/images/portfolio6.jpg';
import img7 from '../../assets/images/portfolio7.jpg';
import img8 from '../../assets/images/portfolio8.jpg';
import img9 from '../../assets/images/portfolio9.jpg';
import { App_SectionHead, handel_navlink_source, portfolio_btn, portfolio_card_lg, portfolio_card_md, portfolio_card_sm } from '../../AZ-Framer';
import GalleryPopup from '../../components/portfolio/GalleryPopup';
import Image, { StaticImageData } from 'next/image';

import SectionHead from '../../components/SectionHead';
import Head from 'next/head';


function Portfolio() {
    const vr0 = App_SectionHead;
    const vr1 = portfolio_btn;
    let vr2 = portfolio_card_lg;
    let vr3 = portfolio_card_sm;

    const btns: string[] = ["all", "app", "card", "web"];
    const portDt: [string, string, string, string, StaticImageData][] = [
        [ "filter-app", "app1", "app", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img1 ],
        [ "filter-card", "card1", "card", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img2 ],
        [ "filter-web", "web1", "web", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img3 ],
        [ "filter-card", "card2", "card", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img4 ],
        [ "filter-app", "app2", "app", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img5 ],
        [ "filter-web", "web2", "web", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img6 ],
        [ "filter-web", "web3", "web", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img7 ],
        [ "filter-card", "card3", "card", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img8 ],
        [ "filter-app", "app3", "app", "https://ahmed-portfolio-v1-6678d.web.app/#/Projects", img9 ]
    ];    

    const [ fnlDt, setFnlDt ] = useState(portDt);
    const [ cardNdx, setCardNdx ] = useState(0);
    const [cardLis, setCardLis] = useState(false);
    const [portfolioLs, setPortfolioLs]:[string|boolean, Function] = useState(false);
    const portWrap = useRef(null);
    
    const handelFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const btnSiblings: Element[] = Array.from((e.target as Element).parentElement!.children);
        for (const ch of btnSiblings) {
            ch.classList.remove('portBtnActive');            
        }
        (e.target as Element).classList.add('portBtnActive');
        
        ( (e.target as Element).getAttribute('data-filter') === 'filter-all' )
        ? setFnlDt( portDt )
        : setFnlDt(
            portDt.filter( (item) => { 
                return item[0] === (e.target as Element).getAttribute('data-filter') 
            }  )
        )
    };

    const handelGP = (ndx: number) => {
        setCardLis(true);
        setCardNdx(ndx);
    }

    useEffect(() => {        
        if( typeof window !== 'undefined' && window.innerWidth >= 992 ){
            vr2 = portfolio_card_lg;
            vr3 = {};
        }
        if( typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 991.9 ){
            vr2 = portfolio_card_md;
            vr3 = {};
        }
        else if( typeof window !== 'undefined' && window.innerWidth <= 767.9 ){
            vr2 = {};
            vr3 = portfolio_card_sm;
        }
    }, []) ;
    
    useEffect(()=>{
        setPortfolioLs(true);
    },[])

    useLayoutEffect(() => {
        handel_navlink_source('Portfolio');
    }, []);

    

    return (
    <>
    {
        portfolioLs && 
        <>
        <Head>
            <meta name="og:title" content="Next | Portfolio Card - Portfolio" />
            <meta name="og:description" content="My Portfolio: I made different design projects like apps, cards, web." />
            <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, portfolio page, Surzil Dong portfolio, app projects, card projects, web projects" />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='/portfolio' />
            <meta property='og:image' content='/portfolio.png' />
        </Head>

        <Container as='section' id="Portfolio" className='ContentInfo_item container-fluid p-0'>
            <SectionHead txt="Portfolio" AppSectionHead={vr0} />
            <div className="portfolioControll">
                {
                    btns.map( (btn, b) => {
                        return(
                            <motion.button  data-filter={`filter-${btn}`} key={b} className='trnsClr' onClick={ (event) => handelFilter(event) }
                                variants={vr1}     viewport={{ once: true }}      custom={b}
                                initial='hidden'    whileInView='visible'    
                            >{btn}</motion.button>
                        )
                    } )
                }
            </div>            


            <Row className="portfolioCards" ref={portWrap}>
                {
                    fnlDt.map( (prt, pt) => {
                        return(
                            <Col lg={4} md={6} sm={10} className={`mx-sm-auto ${prt[0]}`} key={pt} data-ndx={pt}>
                                <motion.div className="portItem"
                                    variants={ vr2 }     viewport={{ once: true }}     custom={ pt }
                                    initial='hidden'    whileInView='visible'    
                                >
                                    <div className="portOverlay">
                                        <div className="portOverlay_content">
                                            <p> {prt[1]} / <span>{prt[2]}</span> </p>
                                            <button className="d-inline-block" title={prt[1]} onClick={ () => handelGP(pt) }><BsPlus /></button>
                                        </div>
                                    </div> 
                                    
                                    
                                    <motion.div 
                                        variants={ vr3 }     viewport={{ once: true }}     custom={ pt }
                                        initial='hidden'    
                                        whileInView='visible'
                                    >
                                        <Image src={prt[4]} className={`img-fluid portImg${pt}`} alt={`portImg${pt}`} />
                                    </motion.div>

                                </motion.div>
                            </Col>
                        )
                    } )
                }
            </Row>

            <GalleryPopup cardLis={cardLis} setCardLis={setCardLis} initSld={cardNdx} Dta={fnlDt} />                    
        </Container>
        </>
    }
    </>
    )
}

export default Portfolio