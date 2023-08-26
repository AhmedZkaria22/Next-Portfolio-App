import React, { ReactElement } from 'react';
import avt from '../assets/images/profile.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBehance} from 'react-icons/fa';
import {BsThreeDotsVertical} from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    const socis:[ReactElement, string, string][] = [
        [<FaFacebookF />, 'Fcebook', 'https://www.facebook.com/' ],
        [<FaTwitter />, 'Twitter', 'https://twitter.com/?lang=en' ],
        [<FaInstagram />, 'Instagram', 'https://www.instagram.com/' ],
        [<FaDribbble />, 'Dribbble', 'https://dribbble.com/' ],
        [<FaBehance />, 'Behance', 'https://www.behance.net/']
    ];
    
    const navElem = typeof document !== 'undefined' ? document.querySelector("#appNav") as HTMLElement : null;

    const handelToggleNav = () => {    
        if( ( !navElem!.classList.contains('appNavShow') && !navElem!.classList.contains('appNavHide') ) 
            || navElem!.classList.contains('appNavHide') 
        ){
            navElem!.classList.add('appNavShow');
            navElem!.style.left = '0px';
            navElem!.classList.remove('appNavHide');
        }else{                
            navElem!.classList.add('appNavHide');
            navElem!.style.left = '-150px';
            navElem!.classList.remove('appNavShow');    
        }      
    }

    return (
        <header>

            <div className="avatarWrap">
                <Image src={avt} alt="avatar img" />
                <div className='text-start'>
                    <h1 className='mb-0 h3'>Surzil Dong</h1>
                    <h2 className='h6'>GRAPHIC DESIGNER</h2>
                </div> 
            </div>

            <div className="socWrap text-start">
                <p className='w-100 mb-0'>Follow Me On:</p>
                <div className='mt-1'>
                    {
                        socis.map( (soc, c) => {
                            return(
                                <Link href={soc[2]} target='_blank' rel="noreferrer" key={c} className='trnsClr' title={soc[1]}> {soc[0]} </Link>
                            )
                        } )
                    }
                </div>
            </div>

            <div className="menuIconWrap" onClick={() => handelToggleNav()}>
                <BsThreeDotsVertical />
            </div>

        </header>
    )
}

export default Header
