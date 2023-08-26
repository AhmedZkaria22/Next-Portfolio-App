import React from 'react';
import { FaCameraRetro, FaPalette, FaCode, FaImages, FaBullhorn, FaShareAlt, FaUser } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { App_SectionHead, handel_navlink_source, service_plan } from '../../AZ-Framer';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHead from '../../components/SectionHead';
import { ReactElement, useLayoutEffect } from 'react';
import Head from 'next/head';



function Services() {
    const vr0 = App_SectionHead;

    const servicesDt: [ReactElement, string, string][] = [
        [
            <FaCameraRetro className='trnsClr'/>, 
            'Photography',
            'Photography is the art, application, and practice of creating durable images by recording light.'
        ],
        
        [
            <FaPalette className='trnsClr'/>, 
            'Web Design',
            'Build professional mobile apps and responsive websites by tallented designers in user friendly interfaces.'
        ],
        
        [
            <FaCode className='trnsClr'/>, 
            'Web Development',
            'Web Design and Development services, to deliver complete software solution using Web applications.'
        ],
        
        [
            <FaImages className='trnsClr'/>, 
            'Graphic Design',
            'We have also a team that would take your logos, photos, any material you have and transform them to banners'
        ],
        
        [
            <FaBullhorn className='trnsClr'/>, 
            'Branding',
            'Branding, to gives your brand a character, a makeover, and an Identity.'
        ],
        
        [
            <FaShareAlt className='trnsClr'/>,
            'Marketing',
            'supporting companies with reaching out to their target customers by professional market team'
        ]        
    ];    

    const pricesDt: string[][] = [
        [
            'Basic',
            '19',
            '10 Pages.',
            'Free Installation.',
            'Fee Hosting.',
            '10 Addon Domains.',
            'Email support'
        ],
        [
            'Standard',
            '29',
            '20 Pages.',
            'Free Installation.',
            'Fee Hosting.',
            '20 Addon Domains.',
            'Mon-Fri support'            
        ],
        [
            'Premium',
            '39',
            '30 Pages.',
            'Free Installation.',
            'Fee Hosting.',
            '30 Addon Domains.',
            '24/7 support'
        ]
    ];    

    useLayoutEffect(() => {
        handel_navlink_source('Services');
    }, []);

    return (
        <>
        <Head>
            <meta name="og:title" content="Next | Portfolio Card - Services" />
            <meta name="og:description" content="My Services: Photography, Web Design, Web Development, Graphic Design, Branding, Marketing" />
            <meta name="og:keywords" content="Surzil Dong, Graphic Designer, Porfolio app, Portfolio card, services page, Surzil Dong services, pricing plans, plans, prices" />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='/service' />
            <meta property='og:image' content='/service.png' />
        </Head>

        <Container as='section' id='Services' className='ContentInfo_item container-fluid'>
            <SectionHead txt="My Services" AppSectionHead={vr0} />
            <Row>
                {
                    servicesDt.map( (srv, s) => {
                        return(
                            <Col lg={6} className='serviceItem' key={s}>
                                <div className="serviceItem_svgWrap trnsClr"> {srv[0]} </div>
                                <h6 className='cardHead'>{srv[1]}</h6>
                                <p>{srv[2]}</p>
                            </Col>
                        )
                    } )
                }
            </Row>
            <h6 className='sectionSubHead'>Pricing Plans</h6>            
            <Row>
                {
                    pricesDt.map( (prp, pr) => {
                        return(
                            <motion.div className="col-lg-4 col-sm-12 planItem" key={pr}
                                variants={service_plan}     viewport={{ once: true }}
                                initial='hidden'    whileHover='visible'
                            >
                                <h6 className='cardHead'>{prp[0]}</h6>
                                <div className="priceWrap">
                                    <h3 className='m-0 trnsClr'>{prp[1]}</h3>
                                    <span className='trnsClr'>$/month</span>
                                </div>

                                <p>{prp[2]}</p>
                                <p>{prp[3]}</p>
                                <p>{prp[4]}</p>
                                <p>{prp[5]}</p>
                                <p>{prp[6]}</p>

                                <button className='sectionButton' title='Get Service'> 
                                    <span> <FaUser /> </span> <span className="sectionButton_txt">Get Service</span> 
                                </button>
                            </motion.div>
                        )
                    } )
                }
            </Row>
        </Container>
        </>
    )
}

export default Services