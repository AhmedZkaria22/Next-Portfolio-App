import Image, { StaticImageData } from 'next/image'
import React from 'react'
import avt from '../../assets/images/profile.png';

export function TestiP({txt}: {txt: string}){
    return <p> {txt} </p>
}

export function TestiImg({src, ndx}:{src: string|StaticImageData|any, ndx: number}){
    return <Image src={src ? src : avt} alt={`testi-img${ndx}`} className='img-fluid trnsClr'
        width={400} height={300}
    />
}

export function TestiBio({ name, job }:{name: string, job: string}){
    return <div className="testiBio">
        <p>{name}</p>
        <p>{job}</p>
    </div>
}