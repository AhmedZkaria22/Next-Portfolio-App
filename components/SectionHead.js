import { motion } from 'framer-motion';
import React from 'react';
function SectionHead(props) {
    var txt = props.txt, AppSectionHead = props.AppSectionHead;
    return (React.createElement(motion.h5, { className: "sectionHead", variants: AppSectionHead, initial: 'hidden', whileInView: 'visible', style: { originX: 0.1, originY: 0.5 }, viewport: { once: true } },
        React.createElement("span", null, txt)));
}
export default SectionHead;
