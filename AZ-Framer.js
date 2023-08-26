/* ------------------------     H o m e     ------------------------ */
var home_imageWrap = {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0,
        transition: { delay: 0.3, duration: 0.4, type: 'tween' }
    },
    done: { opacity: 1, x: 0 }
};
var home_p__ul = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.4, duration: 0.3, type: 'tween' }
    },
    done: { opacity: 1, y: 0 }
};
var home_sectionButton = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1,
        transition: { delay: 0.4, duration: 0.3, type: 'tween' }
    },
    done: { opacity: 1, scale: 1 }
};
/* ------------------------     H o m e     ------------------------ */
/* ------------------------     A b o u t     ------------------------ */
var about_infoVr = {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5, ease: 'linear' } },
    done: { opacity: 1, x: 0 }
};
var about_factDl = [0.4, 0.6, 0.8, 1, 1.2];
var about_fctVr = {
    hidden: { opacity: 0, y: -20 },
    visible: function (ndx) { return ({ opacity: 1, y: 0, transition: {
            delay: about_factDl[ndx], duration: 0.35, ease: 'linear'
        } }); },
    done: { opacity: 1, y: 0 }
};
var about_tstVr = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4, ease: 'linear' } },
    done: { opacity: 1, y: 0 }
};
var about_cltDl = [0.2, 0.4, 0.6, 0.8, 1, 1.2];
var about_cltVr = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: function (ndx) { return ({ opacity: 1, scale: 1, transition: {
            delay: about_cltDl[ndx], duration: 0.3, ease: 'linear'
        } }); },
    done: { opacity: 1, scale: 1 }
};
/* ------------------------     A b o u t     ------------------------ */
/* ------------------------     R e s u m e     ------------------------ */
var exprsDelay = [0.2, 0.4, 0.6, 0.8, 1, 1.2];
var resume_h6 = {
    hidden: { opacity: 0, x: -35 },
    visible: function (index) { return ({
        opacity: 1, x: 0,
        transition: {
            delay: exprsDelay[index], duration: 0.3, type: 'tween'
        }
    }); },
    done: { opacity: 1, x: 0 }
};
var resume_span = {
    hidden: { opacity: 0 },
    visible: function (index) { return ({
        opacity: 1,
        transition: { delay: (exprsDelay[index] + 0.3), duration: 0.2, type: 'tween' }
    }); },
    done: { opacity: 1 }
};
var resume_p = {
    hidden: { opacity: 0, y: -10 },
    visible: function (index) { return ({
        opacity: 1, y: 0,
        transition: { delay: (exprsDelay[index] + 0.5), duration: 0.25, type: 'tween' }
    }); },
    done: { opacity: 1 }
};
var skillsProgress = ['92%', '92%', '80%', '75%', '75%', '70%', '70%', '65%'];
var resume_progress = {
    hidden: { width: '0%' },
    visible: function (index) { return ({
        width: skillsProgress[index],
        // transition: { delay: 0.2, duration: 3.5, type: 'spring' }
        transition: { delay: 0.2, duration: 5.0, type: 'spring' }
    }); },
    // done: { width: '0%' }
    exit: function (index) { return ({ width: skillsProgress[index] }); }
};
/* ------------------------     R e s u m e     ------------------------ */
/* ------------------------     S e r v i c e     ------------------------ */
var service_plan = {
    hidden: { y: 0 },
    visible: { y: -7, transition: { duration: 0.3, ease: 'easeInOut', when: 'beforeChildren' } },
    done: { y: 0 }
};
/* ------------------------     S e r v i c e     ------------------------ */
/* ------------------------     P o r t f o l i o     ------------------------ */
var portfolioBtnDly = [0.2, 0.4, 0.5, 0.7];
var portfolio_btn = {
    hidden: { y: -25, opacity: 0 },
    visible: function (index) { return ({
        y: 0, opacity: 1,
        transition: { delay: portfolioBtnDly[index], duration: 0.3 }
    }); },
    done: { y: 0, opacity: 1 }
};
var portfolioCardDly = [0.5, 0.6, 0.7, 1.2, 1.3, 0.8, 1.1, 1.0, 0.9];
var portfolio_card_lg = {
    hidden: { scale: 0, opacity: 0 },
    visible: function (index) { return ({
        scale: 1, opacity: 1,
        transition: { delay: portfolioCardDly[index], duration: 0.4 }
    }); },
    done: { scale: 1, opacity: 1 }
};
var portfolio_card_sm = {
    hidden: { scale: 1, opacity: 0, x: -30 },
    visible: {
        opacity: 1, x: 0,
        transition: { delay: 0.5, duration: 0.8 }
    },
    done: { scale: 1, opacity: 1, x: 0 }
};
var portfolioCardMdDly = [0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3];
var portfolio_card_md = {
    hidden: { scale: 1, opacity: 0, y: -25 },
    visible: function (index) { return ({
        opacity: 1, y: 0,
        transition: { delay: portfolioCardMdDly[index], duration: 0.6 }
    }); },
    done: { scale: 1, opacity: 1 }
};
/* ------------------------     P o r t f o l i o     ------------------------ */
/* ------------------------     B l o g     ------------------------ */
var blogDly = [0.1, 0.2, 0.1, 0.2];
var blog_item = {
    hidden: { opacity: 0, y: 50 },
    visible: function (index) { return ({
        opacity: 1, y: 0,
        transition: { delay: blogDly[index], duration: 0.3, ease: 'linear' }
    }); },
    done: { opacity: 1, y: 0 }
};
/* ------------------------     B l o g     ------------------------ */
/* ------------------------     C o n t a c t     ------------------------ */
var contact_p = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.2, duration: 0.4 }
    },
    done: { opacity: 1, y: 0 }
};
var contact_li_svg = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1,
        transition: { delay: 0.25, duration: 0.4 }
    },
    done: { opacity: 1, scale: 1 }
};
var contact_li_p1 = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0,
        transition: { delay: 0.5, duration: 0.4 }
    },
    done: { opacity: 1, x: 0 }
};
var contact_li_p2 = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.6, duration: 0.5 }
    },
    done: { opacity: 1, y: 0 }
};
var contact_map = {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0,
        transition: { delay: 0.3, duration: 0.6 }
    },
    done: { opacity: 1, x: 0 }
};
var contact_form = {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0,
        transition: { delay: 0.4, duration: 0.9 }
    },
    done: { opacity: 1, y: 0 }
};
/* ------------------------     C o n t a c t     ------------------------ */
var App_SectionHead = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.25, type: 'tween' } },
    done: { opacity: 1, scale: 1 }
};
var handel_framer_router = function (lc, vrnt, setSt) {
    // if (lc === '0') {
        setSt(vrnt);
    // }
    // else {
        // setSt({});
    // }
};
var handel_navlink_source = function (targetSc) {
    document.querySelector('#ContentWrap #ContentInfo #ContentInfoInherit') && document.querySelector('#ContentWrap #ContentInfo #ContentInfoInherit').scrollTo(0, 0);
    // setTimeout(() => {
    var allSiblings = Array.from(document.querySelectorAll('.navItem'));
    for (var _i = 0, allSiblings_1 = allSiblings; _i < allSiblings_1.length; _i++) {
        var sib = allSiblings_1[_i];
        sib.classList.remove('navLinkDeActive', 'navLinkActive');
    }
    document.querySelector(".navItem.".concat(targetSc)).classList.add('navLinkActive');
    // }, 10);
};
var handel_localStorage_lis = function (secLs, comLis, locSt) {
    if (secLs == '0' && comLis === true) {
        setTimeout(function () {
            localStorage.setItem(locSt, '1');
        }, 1500);
    }
};
var handel_navlink_Listener = function (targetSc) {
    if (typeof document !== 'undefined' && document.getElementById("".concat(targetSc))) {
        handel_navlink_source(targetSc);
        // if(localStorage.getItem(`${targetSc}Lis`) === '0' && targetSc != 'Home'){ 
        //     console.log('hello from about');
        //     setTimeout(() => {
        //         localStorage.setItem(`${targetSc}Lis`, '1');                 
        //     }, 100);            
        // }
        setTimeout(function () {
            var allSiblings = Array.from(document.querySelectorAll('.navItem'));
            for (var _i = 0, allSiblings_2 = allSiblings; _i < allSiblings_2.length; _i++) {
                var sib = allSiblings_2[_i];
                sib.classList.remove('navLinkDeActive', 'navLinkActive');
            }
            document.querySelector(".navItem.".concat(targetSc)).classList.add('navLinkActive');
        }, 10);
    }
};
export { home_imageWrap, home_p__ul, home_sectionButton, about_infoVr, about_fctVr, about_tstVr, about_cltVr, resume_h6, resume_span, resume_p, resume_progress, service_plan, portfolio_btn, portfolio_card_lg, portfolio_card_sm, portfolio_card_md, blog_item, contact_p, contact_li_svg, contact_li_p1, contact_li_p2, contact_map, contact_form, App_SectionHead, handel_framer_router, handel_navlink_source, handel_navlink_Listener, handel_localStorage_lis };
