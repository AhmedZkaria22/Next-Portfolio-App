import Image, { StaticImageData } from 'next/image'
import React from 'react'

export function TestiP({txt}: {txt: string}){
    return <p> {txt} </p>
}

export function TestiImg({src, ndx}:{src: string|StaticImageData, ndx: number}){
    return <Image src={src} alt={`testi-img${ndx}`} className='img-fluid trnsClr' style={{objectFit: 'none'}}/>
}

export function TestiBio({ name, job }:{name: string, job: string}){
    return <div className="testiBio">
        <p>{name}</p>
        <p>{job}</p>
    </div>
}