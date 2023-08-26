import { useRouter } from 'next/navigation';
import React, {useEffect}  from 'react';
import { ReactElement } from 'react';
import {FaHome, FaUserTie, FaGraduationCap, FaCogs, FaBriefcase, FaReceipt, FaEnvelope} from 'react-icons/fa';


const Nav = () => {
    const navElms: string[] = [ 'Home', 'About', 'Resume', 'Services', 'Portfolio', 'Blog', 'Contact' ];
    const navIcs: ReactElement[] = [ <FaHome />, <FaUserTie />, <FaGraduationCap />, <FaCogs />, <FaBriefcase />, <FaReceipt />, <FaEnvelope /> ];
    const navLnks: string[] = [ '', 'about', 'resume', 'services', 'portfolio', 'blog', 'contact' ];    
    
    const router: any = useRouter();
    
    const handelSections = (String: string, ndx: number) => {        
        router.push(`/${navLnks[ndx]}`);
        
        if( window.innerWidth <= 767.9 ){
            (document.querySelector("#appNav") as HTMLElement)!.classList.add('appNavHide');
            (document.querySelector("#appNav") as HTMLElement)!.style.left = '-150px';
            (document.querySelector("#appNav") as HTMLElement)!.classList.remove('appNavShow');
        }
        
        if( String === 'About'  &&  document.querySelector('.slider_wrap_0') ){
            (document.querySelector('.slider_wrap_0') as HTMLElement).style.height = ""+document.querySelector('.testimonials_wrap')!.clientHeight+"px";
        }
    }

    useEffect(() => {
        if( document.querySelector('.ContentInfo_item') && document.querySelector('.ContentInfo_item')!.getAttribute('id') === 'About' ){
            (document.querySelector('.slider_wrap_0') as HTMLElement).style.height = ""+document.querySelector('.testimonials_wrap')!.clientHeight+"px";
        }
    }, []);


    return (
        <nav id='appNav'>
            {
                navElms.map( (elem, l) => {
                    return(
                        <button className={`navItem ${elem}`} key={l} onClick={ () => handelSections(elem, l) }>
                            <div className="lineWrap"><span></span></div>
                            {navIcs[l]}
                            <span>{elem}</span>
                        </button>
                    )
                } )
            }
        </nav>
    )
}

export default Nav
