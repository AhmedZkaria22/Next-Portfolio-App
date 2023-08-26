import { Variants } from "framer-motion";

/* ------------------------     H o m e     ------------------------ */
const home_imageWrap: Variants = {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0,
        transition:{ delay: 0.3, duration: 0.4, type: 'tween' }
    },
    done: { opacity: 1, x: 0 }
}

const home_p__ul: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, 
        transition: { delay: 0.4, duration: 0.3, type: 'tween' },
    },
    done: { opacity: 1, y: 0 }
}



const home_sectionButton: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1,
        transition: { delay: 0.4, duration: 0.3, type: 'tween' }
    },
    done: { opacity: 1, scale: 1 },
}
/* ------------------------     H o m e     ------------------------ */

/* ------------------------     A b o u t     ------------------------ */
const about_infoVr: Variants = {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5, ease: 'linear' } },
    done: { opacity: 1, x: 0 }
}


const about_factDl: Array<number> = [ 0.4, 0.6, 0.8, 1, 1.2 ];
const about_fctVr: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (ndx) => ({ opacity: 1, y: 0, transition: { 
        delay: about_factDl[ndx], duration: 0.35, ease: 'linear' 
    } }),
    done: { opacity: 1, y: 0 }
}

const about_tstVr: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4, ease: 'linear' } },
    done: { opacity: 1, y: 0 }
}

const about_cltDl: Array<number> = [ 0.2, 0.4, 0.6, 0.8, 1, 1.2 ];
const about_cltVr: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (ndx) => ({ opacity: 1, scale: 1, transition: { 
        delay: about_cltDl[ndx], duration: 0.3, ease: 'linear' 
    } }),
    done: { opacity: 1, scale: 1 }
}
/* ------------------------     A b o u t     ------------------------ */


/* ------------------------     R e s u m e     ------------------------ */
const exprsDelay: number[] = [ 0.2, 0.4, 0.6, 0.8, 1, 1.2 ];
const resume_h6: Variants = {
    hidden: {opacity: 0, x: -35},
    visible: (index) => ({
        opacity: 1, x: 0, 
        transition: {
            delay: exprsDelay[index], duration: 0.3, type: 'tween'
        }
    }),
    done: {opacity: 1, x: 0}
}


const resume_span: Variants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
        opacity: 1,
        transition: { delay: (exprsDelay[index] + 0.3), duration: 0.2, type: 'tween' }
    }),
    done: { opacity: 1 }
}


const resume_p: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index) => ({
        opacity: 1, y: 0,
        transition: { delay: (exprsDelay[index] + 0.5), duration: 0.25, type: 'tween' }
    }),
    done: { opacity: 1 }
}


const skillsProgress: string[] = [ '92%', '92%', '80%', '75%', '75%', '70%', '70%', '65%' ];
const resume_progress: Variants = {
    hidden: { width: '0%' },
    visible: (index) => ({
        width: skillsProgress[index],
        // transition: { delay: 0.2, duration: 3.5, type: 'spring' }
        transition: { delay: 0.2, duration: 5.0, type: 'spring' }
    }),
    // done: { width: '0%' }
    exit: (index) => ({ width: skillsProgress[index] })
}
/* ------------------------     R e s u m e     ------------------------ */



/* ------------------------     S e r v i c e     ------------------------ */
const service_plan: Variants = {
    hidden: { y: 0 },
    visible: {  y: -7,  transition: { duration: 0.3, ease: 'easeInOut', when: 'beforeChildren' } },
    done: { y: 0 }        
}
/* ------------------------     S e r v i c e     ------------------------ */


/* ------------------------     P o r t f o l i o     ------------------------ */
const portfolioBtnDly: number[] = [ 0.2, 0.4, 0.5, 0.7 ];
const portfolio_btn: Variants = {
    hidden: { y: -25, opacity: 0 },
    visible: (index) => ({ 
        y: 0,  opacity: 1,
        transition: { delay: portfolioBtnDly[index], duration: 0.3 }
    }),
    done: { y: 0,  opacity: 1 }
};

const portfolioCardDly: number[] = [ 0.5, 0.6, 0.7, 1.2, 1.3, 0.8, 1.1, 1.0, 0.9 ];
const portfolio_card_lg: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({ 
        scale: 1,  opacity: 1,
        transition: { delay: portfolioCardDly[index], duration: 0.4 }
    }),
    done: { scale: 1,  opacity: 1 }
}; 


const portfolio_card_sm: Variants= {
    hidden: { scale: 1, opacity: 0, x: -30 },
    visible: { 
        opacity: 1,   x:0,
        transition: { delay: 0.5, duration: 0.8 }
    },
    done: { scale: 1,  opacity: 1,  x:0 }
};


const portfolioCardMdDly: number[] = [ 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3 ];
const portfolio_card_md: Variants = {
    hidden: { scale: 1, opacity: 0, y: -25 },
    visible: (index) => ({ 
        opacity: 1, y:0,
        transition: { delay: portfolioCardMdDly[index], duration: 0.6 }
    }),
    done: { scale: 1,  opacity: 1 }
}

/* ------------------------     P o r t f o l i o     ------------------------ */


/* ------------------------     B l o g     ------------------------ */
const blogDly: number[] = [0.1, 0.2, 0.1, 0.2];
const blog_item: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({ 
        opacity: 1, y: 0,
        transition: { delay: blogDly[index], duration: 0.3, ease: 'linear' }
    }),
    done: { opacity: 1, y: 0 }
}
/* ------------------------     B l o g     ------------------------ */


/* ------------------------     C o n t a c t     ------------------------ */
const contact_p: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.2, duration: 0.4 }
    },        
    done: { opacity: 1, y: 0 }
};


const contact_li_svg: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1,
        transition: { delay: 0.25, duration: 0.4 }
    },        
    done: { opacity: 1, scale: 1 }
};

const contact_li_p1: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0,
        transition: { delay: 0.5, duration: 0.4 }
    },        
    done: { opacity: 1, x: 0 }
};

const contact_li_p2: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.6, duration: 0.5 }
    },        
    done: { opacity: 1, y: 0 }
};

const contact_map: Variants = {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0,
        transition: { delay: 0.3, duration: 0.6 }
    },        
    done: { opacity: 1, x: 0 }
};

const contact_form: Variants = {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.4, duration: 0.9 }
    },        
    done: { opacity: 1, y: 0 }
};
/* ------------------------     C o n t a c t     ------------------------ */


const App_SectionHead: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1,     transition:{ delay: 0.1, duration: 0.25, type: 'tween' }},
    done: { opacity: 1, scale: 1 }
}


const handel_navlink_source = (targetSc: string) => {
    document.querySelector('#ContentWrap #ContentInfo #ContentInfoInherit') && (document.querySelector('#ContentWrap #ContentInfo #ContentInfoInherit') as HTMLElement).scrollTo(0, 0);
    
    const allSiblings: HTMLElement[] = Array.from(document.querySelectorAll('.navItem'));
    for( let sib of allSiblings ){ sib.classList.remove('navLinkDeActive', 'navLinkActive'); }
    
    (document.querySelector(`.navItem.${targetSc}`) as HTMLElement).classList.add('navLinkActive');                            
}


export { 
    home_imageWrap, home_p__ul, home_sectionButton,
    about_infoVr, about_fctVr, about_tstVr, about_cltVr,
    resume_h6, resume_span, resume_p, resume_progress,
    service_plan,
    portfolio_btn,     
    portfolio_card_lg, portfolio_card_sm, portfolio_card_md,
    blog_item,
    contact_p, contact_li_svg, contact_li_p1, contact_li_p2, contact_map, contact_form,
    App_SectionHead, handel_navlink_source,
};