import React, { ReactElement } from 'react';
import Header from './Header';
import Nav from './Nav';
import ColorPalletes from './ColorPalletes';
import { Container } from 'react-bootstrap';
import {Mulish} from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

function Layout({children}: {children: ReactElement}) {

    return (
    <Container id='App' className={`App ${mulish.className}`}>
        <Header />
        <section id='ContentWrap'>
            <Nav/>
            <section id='ContentInfo'>
                <div id="ContentInfoInherit">
                    {children}
                </div>
            </section>
        </section>
        <ColorPalletes /> 
        <div id = 'polygonOverlay' >
            <div className = 'shapeWrap' >        
                <div className = "shapes-basic shape1 trnsClr"></div> 
                <div className = "shapes-basic shape2 trnsClr"></div> 
                <div className = "shapes-basic shape3 trnsClr"></div> 
                <div className = "shapes-basic shape4 trnsClr"></div> 
                <div className = "shapes-basic shape5 trnsClr"></div> 
            </div> 
        </div>
    </Container>
    )
}

export default Layout
