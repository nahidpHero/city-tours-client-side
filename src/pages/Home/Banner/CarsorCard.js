import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import BannerItem from './BannerItem';



const Banner = () => {
    const bannerData=[
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
       
    ]
    return (
        <div>
             <div className="carousel w-full">
                {
                    bannerData.map(slide=><BannerItem
                        kay={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }
             </div>
        </div>
    );
};

export default Banner;