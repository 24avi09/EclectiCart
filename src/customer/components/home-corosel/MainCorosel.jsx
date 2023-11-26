import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCoroselData } from './MainCoroselData';


export const MainCarousel = () => {
    const items = mainCoroselData.map(e => <img role="presentation" className='cursor-pointer' src={e.image} alt='' />)
    return (
        <AliceCarousel
            items={items} autoPlay
            disableButtonsControls
            autoPlayInterval={1000} 
            infinite     //When goes to the last image automatically comes to the first image.
        />
    );
}


