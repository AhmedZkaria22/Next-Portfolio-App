import React, { useEffect, useMemo, useState, useRef, ReactElement, useLayoutEffect } from 'react';
import { ImPhone } from 'react-icons/im';
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { Button, Form } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { App_SectionHead, contact_form, contact_li_p1, contact_li_p2, contact_li_svg, 
    contact_map, contact_p, handel_navlink_source } from '../../AZ-Framer';

import SectionHead from '../../components/SectionHead';
import Head from 'next/head';


function Contact() {
    const vr0 = App_SectionHead;
    const vr1 = contact_p;
    const vr2 = contact_li_svg;
    const vr3 = contact_li_p1;
    const vr4 = contact_li_p2;
    const vr5 = contact_map;
    const vr6 = contact_form;
    
    const contactList: [ReactElement, string, string][] = [
        [<ImPhone className='trnsClr' />, 'Phone:', '+113-804-9098'],
        [<FaEnvelope className='trnsClr' />, 'Email:', 'contact@dongo.com'],
        [<MdLocationPin className='trnsClr' />, 'Adress:', '1000 Proctor St USA.'],
    ];

    const contactRef = useRef<HTMLElement>(null);
    const [contactLs, setContactLs]:[string|boolean, Function] = useState(false);

    useEffect(()=>{
        setContactLs(true);
    },[])

    useLayoutEffect(() => {
        handel_navlink_source('Contact');
    }, []);    
    
    return (
    <>
    {
        contactLs && <>
            <Head>
                <meta name="og:title" content="Next | Portfolio Card - Contact" />
                <meta name="og:description" content="Don't hesitate to send your opinion in latest project or request to any service web design and development, marketing or else." />
                <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, contact page, Surzil Dong contact, contact details, send message" />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='/contact' />
                <meta property='og:image' content='/contact.png' />
            </Head>

            <section id="Contact" className='ContentInfo_item' ref={contactRef}>
                <SectionHead txt="Contact Me" AppSectionHead={vr0}/>
                
                <div className="contactWrap">
                    <div className="contactInfo">
                            <h6 className="sectionSubHead">Get in Touch</h6>
                            <motion.p   variants={vr1}      
                                initial='hidden'    whileInView='visible'    viewport={{ once: true }}
                            >
                                Don't hesitate to send your opinion in latest project or request to any service web design and development, marketing or else.
                            </motion.p>

                            <ul className="list-unstyled">
                                {
                                    contactList.map( (cnt, index) => {
                                        return(
                                            <li key={index}>
                                                <motion.div className="svgWrap trnsClr"     variants={vr2}      
                                                    initial='hidden'    whileInView='visible'    viewport={{ once: true }}
                                                > {cnt[0]} </motion.div>            
                                                <motion.p   variants={vr3}      
                                                    initial='hidden'    whileInView='visible'    viewport={{ once: true }}
                                                > {cnt[1]} </motion.p>
                                                <motion.p   variants={vr4}      
                                                    initial='hidden'    whileInView='visible'    viewport={{ once: true }}
                                                > {cnt[2]} </motion.p>
                                            </li>
                                        )
                                    } )
                                }
                            </ul>
                    </div>
                    <motion.div className="contactMap"    variants={vr5}      
                        initial='hidden'    whileInView='visible'    viewport={{ once: true }}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7761732110393!2d29.917975779035718!3d31.19921886917715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c329a9da767f%3A0x27aaca33d088371a!2z2LPYp9i52Kkg2KfZhNiy2YfZiNix!5e0!3m2!1sen!2seg!4v1656230372215!5m2!1sen!2seg" 
                            width="100%" height="300" style={{"border":"0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                </div>

                <motion.div className="contactForm"     variants={vr6}      
                    initial='hidden'    whileInView='visible'    viewport={{ once: true }}
                >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Message' />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='sectionButton'>                        
                            <span> <FaTelegramPlane /> </span> <span className="sectionButton_txt">Send Message</span>
                        </Button>
                    </Form>
                </motion.div>
            </section>
        </>
    }
    </>
    )
}
export default Contact