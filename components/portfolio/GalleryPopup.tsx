import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import {GrClose} from 'react-icons/gr';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from 'next/image';


function GalleryPopup({cardLis, setCardLis, initSld = 0, Dta}: {cardLis: boolean, setCardLis: Function, initSld: number, Dta: [string, string, string, string, StaticImageData][]}) {
    
    interface settingTS{
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number,
        initialSlide: number
    }
    
    const [initSldST, setInitSldST] = useState(0);
    
    const gpRef = useRef<HTMLElement>(null);
    const clsBtn = useRef<HTMLButtonElement>(null);

    const setting: settingTS = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };
    if(initSld === initSldST){ setting.initialSlide = initSldST; }

    const closeGP = (e: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => {
        if( e.target == gpRef.current 
            || e.target == clsBtn.current 
            || (e.target as SVGElement).parentElement == clsBtn.current 
            || (e.target as HTMLElement).parentElement!.parentElement == clsBtn.current 
            || e.target == document.querySelector('.slick-list') 
            || e.target == document.querySelector('#GalleryPopup ul.slick-dots') 
        ){
            setCardLis(false);
        }
    }

    useEffect(() => {
        setInitSldST(initSld);
    }, [cardLis, initSld])    

    useEffect(() => {
        setTimeout(() => {
            const slickTrack = document.querySelector('#GalleryPopup .slick-track') as HTMLDivElement;        
            if(initSld === initSldST && slickTrack?.style.opacity === '1'){ 
                clsBtn.current!.style.top = `calc(${slickTrack.getBoundingClientRect().top}px - 50px)`;
            }            
        }, 500);

        window.addEventListener('resize', ()=>{
            const slickTrack = document.querySelector('#GalleryPopup .slick-track') as HTMLDivElement;
            clsBtn.current &&( clsBtn.current!.style.top = `calc(${slickTrack.getBoundingClientRect().top}px - 50px)` )
        });

        const Trg1 = document.querySelector('.slick-list') as HTMLDivElement,
        Trg2 = document.querySelector('#GalleryPopup ul.slick-dots') as HTMLUListElement;
        Trg1 !== null && Trg1.addEventListener('click', (event) => closeGP(event));
        Trg2 !== null && Trg2.addEventListener('click', (event) => closeGP(event));        

    }, [cardLis, initSldST]);
    
    return (
        <>{
        cardLis && 
        <section id='GalleryPopup' ref={gpRef} onClick={(event) => closeGP(event)}>
            {
                initSld === initSldST && <Slider {...setting}>
                    {
                        Dta.map( (item, i) => {
                            return(
                                <Image src={item[4]} key={i} className='Gallery-img' alt={`Gallery-img${i+1}`} />
                            )
                        } )
                    }
                </Slider>
            }

            <button className='closeBtn' ref={clsBtn} onClick={(event) => gpRef != null && closeGP(event) }> <GrClose /> </button>
        </section>
        }</>
    )
}

export default GalleryPopup
