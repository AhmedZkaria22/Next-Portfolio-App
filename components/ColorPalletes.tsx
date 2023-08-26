import React, { RefObject, useMemo, useRef } from 'react';
import { ReactElement } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {IoMdColorPalette, IoMdClose, IoMdUndo, IoMdMoon} from 'react-icons/io';


function ColorPalletes() {
    const featureWrap = useRef<HTMLDivElement>(null),
        [vsbLisnSt, setVsbLisn] = useState(false),
        resetBtn = useRef<HTMLButtonElement>(null),
        LDBtn = useRef<HTMLButtonElement>(null),

        resetBtnSm = useRef<HTMLButtonElement>(null),
        LDBtnSm = useRef<HTMLButtonElement>(null),
        [winLis, setWinLis] = useState(false),

        Palettes = [
            ['#f21e4e', '#f21e4e1a', '#f21e4e00'],
            ['#2e64ca', '#2e64ca1a', '#2e64ca00'],
            ['#0dcdbd', '#0dcdbd1a', '#0dcdbd00'],
            ['#DEA729', '#DEA7291a', '#DEA72900'],
            ['#2eca7f', '#2eca7f1a', '#2eca7f00']
        ];


    const rootElem: HTMLElement | null = typeof document !== 'undefined' ? document.querySelector(":root") : null;
    const [appBackColor, setAppBackColor]:[string|null, Function] = useState(null);

    const handelRespElem = ( Elem: RefObject<HTMLButtonElement>, removedClasses: string[] | null, addedClasses: string[] | null, displayVal: string | null, cursorVal: string | null ) => {
        if(removedClasses != null && Elem.current != null){ Elem.current.classList.remove(...removedClasses); }
        if(addedClasses != null && Elem.current != null){ Elem.current.classList.add(...addedClasses); }
        if(displayVal != null && Elem.current != null){ Elem.current.style.display = displayVal; }
        if(cursorVal != null && Elem.current != null){ Elem.current.style.cursor = cursorVal; }
    }

    const resetAddAnmy = () => {
        if( window.innerWidth <= 1819 && window.innerWidth > 500 ){
            if( resetBtn != null ){
                resetBtn.current!.classList.add('activeRstLg');
            }
        }else if( window.innerWidth <= 500 ){
            if( resetBtnSm != null ){
                resetBtnSm.current!.classList.add('activeRstLg');
            }
        }else{ resetBtn != null && resetBtn.current!.classList.add('activeRst'); }
    }

    const handelFeatureVisiblity = () => {
        const featureItems: HTMLDivElement[] = Array.from(document.querySelectorAll('.colorPalletes_wrap_item'));
        setVsbLisn( prvSt => prvSt === false ? true : false );

        if(vsbLisnSt === false && featureWrap){
            featureWrap.current!.classList.remove('hideFeature');
            featureWrap.current!.classList.add('paletteWrapAnmy');
            for (const ft of featureItems) {
                ft.classList.add('palleteAnmy');                
                
                window.innerWidth <= 1819 
                ? rootElem!.style.setProperty('--dir', '-1')
                : rootElem!.style.setProperty('--dir', '1');


                setTimeout(() => {
                    ft.style.opacity = '1';
                }, 400);
            }
            setTimeout(() => {
                LDBtnSm != null && window.innerWidth <= 500 && handelRespElem(LDBtnSm, ['LDOut'], ['palleteAnmy'], null, null);

                LDBtn != null && window.innerWidth > 500 && handelRespElem(LDBtn, ['LDOut'], ['LDIn'], null, null);
            }, 2000);

            setTimeout(() => {                
                if( getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() != '#00a3e1' ){
                    resetBtn != null && window.innerWidth > 500 && handelRespElem(resetBtn, ['activeRst', 'activeRstLg'], null, 'block', 'pointer');

                    resetBtnSm != null && window.innerWidth <= 500 && handelRespElem(resetBtnSm, ['activeRstLg'], null, 'block', 'pointer');

                    resetAddAnmy();
                }        
            }, 2300);
        }else{
            featureWrap.current!.classList.remove('paletteWrapAnmy');

            featureWrap.current!.classList.add('paletteWrapAnmyOut');
            setTimeout(() => {
                for (const ft of featureItems) {
                    ft.style.opacity = '0';
                    ft.classList.remove('palleteAnmy');                
                }                
                LDBtnSm != null && window.innerWidth <= 500 && handelRespElem(LDBtnSm, ['palleteAnmy'], ['LDOut'], null, null);
                featureWrap.current!.classList.remove('paletteWrapAnmyOut');
                featureWrap.current!.classList.add('hideFeature');
            }, 300);
            LDBtn != null && window.innerWidth > 500 && handelRespElem(LDBtn, ['LDIn'], ['LDOut'], null, null);

            setTimeout(() => {
                resetBtnSm != null && window.innerWidth <= 500 && handelRespElem( resetBtnSm, ['activeRstLg'], null, 'none', null );
            }, 400);
            resetBtn != null && window.innerWidth > 500 && handelRespElem( resetBtn, ['activeRstLg', 'activeRst'], null, 'none', null );
        }        
    }

    const handelFeature = (ndx: number) => {        
        rootElem!.style.setProperty( '--primary', Palettes[ndx][0] );
        rootElem!.style.setProperty( '--primaryHighlight', Palettes[ndx][1] );
        rootElem!.style.setProperty( '--primarySrvOut', Palettes[ndx][2] );
        
        resetBtn != null && window.innerWidth > 500 && handelRespElem( resetBtn, null, null, 'block', 'pointer' );

        resetBtnSm != null && window.innerWidth <= 500 && handelRespElem( resetBtnSm, null, null, 'block', 'pointer' );

        resetAddAnmy();
    }

    const handelFeatureReset = (resetRef: RefObject<HTMLButtonElement>) => {
        rootElem!.style.setProperty( '--primary', '#00a3e1' );
        rootElem!.style.setProperty( '--primaryHighlight', '#00a3e11a' );
        const featureItems: HTMLElement[] = Array.from(document.querySelectorAll('.colorPalletes_wrap_item'));

        setVsbLisn( false );

        featureWrap.current!.classList.remove('paletteWrapAnmy');
        
        featureWrap.current!.classList.add('paletteWrapAnmyOut');

        LDBtn != null && window.innerWidth > 500 && handelRespElem(LDBtn, ['LDIn'], ['LDOut'], null, null);        


        resetRef != null && resetRef.current!.classList.remove('activeRstLg');

        if(window.innerWidth > 1819 && resetBtn != null){
            resetBtn.current!.classList.remove('activeRst');
            resetBtn.current!.style.top = '6.5rem';
        }

        resetRef != null && handelRespElem( resetRef, null, null, 'none', 'default' );
        
        setTimeout(() => {
            for (const ft of featureItems) {
                ft.style.opacity = '0';
                ft.classList.remove('palleteAnmy');
            }  

            LDBtnSm != null && window.innerWidth <= 500 && handelRespElem(LDBtnSm, ['palleteAnmy'], ['LDOut'], null, null);

            featureWrap.current!.classList.remove('paletteWrapAnmyOut');
            featureWrap.current!.classList.add('hideFeature');
        }, 400);
    }

    const handelFeatureLD = () => {
        (document.querySelector('#App') as HTMLElement).classList.toggle('darkMode');
        if((document.querySelector('#App') as HTMLElement).classList.contains('darkMode')){
            rootElem!.style.setProperty( '--txt1', '#ffffff' );
            rootElem!.style.setProperty( '--white', '#343a40' );
        }else{
            rootElem!.style.setProperty( '--txt1', '#343a40' );
            rootElem!.style.setProperty( '--white', '#ffffff' );
        }
    }
    
    typeof window !== 'undefined' && window.addEventListener('resize', () => {
        if( window.innerWidth <= 500 ){
            setWinLis(true);            
        }else{ 
            setWinLis(false); 
        }
        if( featureWrap.current != null && featureWrap.current!.classList.contains('paletteWrapAnmy') ){
            LDBtn != null && window.innerWidth > 500 && handelRespElem(LDBtn, ['LDOut'], ['LDIn'], null, null);
            
            LDBtnSm != null && window.innerWidth <= 500 && handelRespElem(LDBtnSm, ['LDOut'], ['palleteAnmy'], null, null);
    
            if( getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() != '#00a3e1' ){

                resetBtn != null && window.innerWidth > 500 && handelRespElem(resetBtn, ['activeRst', 'activeRstLg'], null, 'block', 'pointer');
    
                resetBtnSm != null && window.innerWidth <= 500 && handelRespElem(resetBtnSm, ['activeRstLg'], null, 'block', 'pointer');
            }
        }        
    });

    
    useEffect( () => {
        typeof window !== 'undefined' && setAppBackColor(window.getComputedStyle(document.documentElement).getPropertyValue('--appBack'));
        if( window.innerWidth <= 500 ){
            setWinLis(true);
        }else{ setWinLis(false); }
    }, []);



    return (
        <div className='colorPalletes'>
            <button className='colorPalletes_btn trnsClr' onClick={() => {handelFeatureVisiblity();  }}><>{ 
                vsbLisnSt == true ? <IoMdClose /> : <IoMdColorPalette />
            }</></button>
            <div className="colorPalletes_wrap hideFeature" ref={featureWrap}
                style={{ 'backgroundColor': `${appBackColor}cf` }}
            >
            {
                Palettes.map( (plt, i) => {
                    return(
                        <div className="colorPalletes_wrap_item" key={i} style={{
                            'animationDelay': `${ 0.1 + 0.4 * i }s`,   'transitionDelay': `${ 0.1 + 0.4 * i }s`}}
                            onClick={() => handelFeature(i)}>
                            <span style={{ 'backgroundColor': plt[0] }}></span>
                        </div>
                    )
                } )
            }
            {
                winLis &&
                <>
                    <button className='colorPalletes_LD LDOut' ref={LDBtnSm}  onClick={handelFeatureLD}> <IoMdMoon /> </button>
                    <button className='colorPalletes_reset' ref={resetBtnSm}  onClick={() => handelFeatureReset(resetBtnSm)}> <IoMdUndo /> </button>
                </>
            }
            </div>
            {
                winLis === false &&
                <>
                    <button className='colorPalletes_LD LDOut'  ref={LDBtn}  onClick={handelFeatureLD}> <IoMdMoon /> </button>
                    <button className='colorPalletes_reset' ref={resetBtn} onClick={() => handelFeatureReset(resetBtn)}> <IoMdUndo /> </button>
                </>
            }
        </div>
    )
}

export default ColorPalletes
