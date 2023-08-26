import { motion, Variants } from 'framer-motion';
import React from 'react'

interface props{
    txt: string,
    AppSectionHead: Variants
}

function SectionHead(props: props) {
    const { txt, AppSectionHead } = props;
    return (
        <motion.h5 className="sectionHead"   variants={AppSectionHead}
            initial='hidden'
            whileInView='visible'
            style={{ originX: 0.1, originY: 0.5 }}
            viewport={{ once: true }}
        >
            <span>{txt}</span>
        </motion.h5>

    )
}

export default SectionHead
