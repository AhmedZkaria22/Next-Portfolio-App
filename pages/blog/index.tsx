import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Pagination } from 'react-bootstrap';

import bgIm1 from '../../assets/images/blog1.jpg';
import bgIm2 from '../../assets/images/blog2.jpg';
import bgIm3 from '../../assets/images/blog3.jpg';
import bgIm4 from '../../assets/images/blog4.jpg';
import bgIm5 from '../../assets/images/blog5.jpg';
import bgIm6 from '../../assets/images/blog6.jpg';
import { motion } from 'framer-motion';
import { App_SectionHead, blog_item, handel_navlink_source } from '../../AZ-Framer';
import SectionHead from '../../components/SectionHead';
import Image, { StaticImageData } from 'next/image';
import Head from 'next/head';


function Blog() {
    const vr0 = App_SectionHead;
    const vr1 = blog_item;

    const blogsDt: [StaticImageData, string, string[]][]  = [
        [bgIm1, 'Best Resources And Tuto To Help You Learn Graphic Design', ['#resources', '#graphic', '#tuto', '#design']],
        [bgIm2, 'How To Create Your First UX Design Portfolio?', ['#portfolio', '#UX', '#Design', '#website']],
        [bgIm3, 'Everything You Need To Know About Working From Home', ['#working', '#remote', '#fromhome', '#info']],
        [bgIm4, 'How To Increase Your Productivity In The Age Of Coronavirus', ['#Productivity', '#Business', '#tools', '#corona']],
        [bgIm5, '7 Most essential frontend development tools.', [ '#front-end', '#tools', '#website', '#portfolio' ]],
        [bgIm6, 'How To become a web designer.', [ '#design', '#resources', '#working', '#portfolio' ]]
    ];
    const screenLmts = [3, 8, 3, 4, 0];   
    const [pagNum, setPagNum] = useState(0);    
    const pagiPR = useRef<HTMLLIElement>(null), pagiNR = useRef<HTMLLIElement>(null);

    const [blogLs, setBlogLs]:[string|boolean, Function] = useState(false);

    const handel_pagi_add = (pagiRef: React.RefObject<HTMLLIElement>) => {
        pagiRef !== null && pagiRef.current!.classList.add('blogsPaginationDisable');
    }

    const handel_pagi_remove = (pagiRef: React.RefObject<HTMLLIElement>) => {
        pagiRef !== null && pagiRef.current!.classList.remove('blogsPaginationDisable');
    }

    const handelPageItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        let childs: HTMLAnchorElement[] = Array.from(document.querySelectorAll('#Blog .blogsPagination li a'));
        for (const it of childs) {
            if (e.target as HTMLAnchorElement !== it) {
                it.classList.remove('active');
                it.classList.add('deActive');
            }
        }

        (e.target as HTMLSpanElement).tagName === 'SPAN' ? (e.target as HTMLSpanElement).parentElement!.classList.remove('deActive') : (e.target as HTMLSpanElement).classList.remove('deActive');
        (e.target as HTMLSpanElement).tagName === 'SPAN' ? (e.target as HTMLSpanElement).parentElement!.classList.add('active') : (e.target as HTMLSpanElement).classList.add('active');
        
        document.querySelector('#ContentWrap #ContentInfo #ContentInfoInherit') && (document.querySelector('#ContentWrap #ContentInfo #ContentInfoInherit') as HTMLDivElement).scrollTo(0, 0);


        if( (e.target as HTMLAnchorElement).dataset.process === 'First' ){
            handel_pagi_add(pagiPR);
        }else{
            handel_pagi_remove(pagiPR);
        }

        if( (e.target as HTMLAnchorElement).dataset.process === 'Last' ){
            handel_pagi_add(pagiNR);
        }else{
            handel_pagi_remove(pagiNR);
        }
     
        if( (e.target as HTMLAnchorElement).dataset.process === 'Prev' || (e.target as HTMLSpanElement).parentElement!.dataset.process === 'Prev' ){
            const pagNumLis =  pagNum-screenLmts[3] <= screenLmts[4] ? screenLmts[4] : pagNum-screenLmts[3];
            if( pagNumLis === 0 ){
                handel_pagi_add(pagiPR);
            }else{
                handel_pagi_remove(pagiPR);
            }   
        }

        if( (e.target as HTMLAnchorElement).dataset.process === 'Next' || (e.target as HTMLSpanElement).parentElement!.dataset.process === 'Next' ){
            const pagNumLis =  pagNum+screenLmts[1] > blogsDt.length-1 ? blogsDt.length-1 - screenLmts[2] : pagNum+screenLmts[3];
            if( pagNumLis === blogsDt.length-1 - screenLmts[2] ){
                handel_pagi_add(pagiNR);
            }else{
                handel_pagi_remove(pagiNR);
            }            
        }

    }                
    
    useEffect(()=>{
        setBlogLs(true);
    },[])
    
    useLayoutEffect(() => {
        handel_navlink_source('Blog');
    }, []);

    return (
    <>
    {
        blogLs && <>
            <Head>
                <meta name="og:title" content="Next | Portfolio Card - Blog" />
                <meta name="og:description" content="My Last Post (2 May) : Best Resources And Tuto To Help You Learn Graphic Design" />
                <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, blog page, Surzil Dong blog, 
                resources, graphic, tuto, design, portfolio, UX,  website, working, remote, fromhome, info,  Productivity,  Business,  tools,  corona,  front-end" />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='/blog' />
                <meta property='og:image' content='/blog.png' />
            </Head>

            <section id="Blog" className='ContentInfo_item'>
                <SectionHead txt="My Last Post" AppSectionHead={vr0}/>
                <div className="blogsWrap">
                    {
                        blogsDt.map( (blg, index) =>   
                            (index >= pagNum && index <= pagNum+screenLmts[0] && index < blogsDt.length) ? 
                                <motion.div className="blogsWrap_item" key={index}
                                    variants={vr1}      initial='hidden'    whileInView='visible'
                                    viewport={{ once: true }}    custom={index}
                                >
                                    <div className="imgWrap">
                                        <Image src={blg[0]} className="img-fluid" alt={`img-thumbnail-${index}`} />
                                        <span className='trnsClr'>02 <br /> May</span>
                                    </div>
                                    <h5>{blg[1]}</h5>
                                    <ul className="list-unstyled">{
                                        blg[2].map( (lit, l) => {
                                            return(
                                                <li className="text-muted" key={l}> {lit} </li>                                            
                                            )
                                        } )
                                    }</ul>
                                </motion.div>
                                : null
                        ) 
                    }
                </div>
                
                <Pagination className='blogsPagination mt-3'> 
                    <Pagination.Prev className='blogsPaginationPrev trnsClr' ref={pagiPR} data-process='Prev' onClick={ (event) => { setPagNum( (prevPag => (prevPag-screenLmts[3] <= screenLmts[4]) ? screenLmts[4] : prevPag-screenLmts[3] ) ); handelPageItem(event); } }/>
                    <Pagination.Item className='blogsPaginationFrstPg trnsClr' data-process='First' onClick={ (event) => { setPagNum( 0 ); handelPageItem(event); } }>{1}</Pagination.Item>        
                    <Pagination.Item className='blogsPaginationLstPg trnsClr' data-process='Last' onClick={ (event) => { setPagNum( screenLmts[3] ); handelPageItem(event); } }>{2}</Pagination.Item>
                    <Pagination.Item className='blogsPaginationDisable trnsClr'>{3}</Pagination.Item>
                    <Pagination.Next className='blogsPaginationNext trnsClr' ref={pagiNR} data-process='Next' onClick={ (event) => { setPagNum( (prevPag => (prevPag+screenLmts[1] > blogsDt.length-1) ? blogsDt.length-1 - screenLmts[2] : prevPag+screenLmts[3] ) ); handelPageItem(event); } }/>
                </Pagination>            
            </section>
        </>
    }
    </>
    )
}
export default Blog