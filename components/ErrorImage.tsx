import Image from 'next/image'
import React from 'react';
import err from '../assets/images/error1.png';
import Spinner from './Spinner';

function ErrorImage() {  
    return <Image src={err} alt='error' />
}

export default ErrorImage
