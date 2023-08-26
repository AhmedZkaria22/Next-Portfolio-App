import { motion } from 'framer-motion';
import React from 'react'

interface props{
    txt: string    
}

function SectionSubHead(props: props) {
    const { txt } = props;
    return (
        <motion.h6 className="sectionSubHead"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{ originX: 0.1, originY: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.25, type: 'tween' }}
        >
            <span>{txt}</span>
        </motion.h6>
    )
}

export default SectionSubHead
