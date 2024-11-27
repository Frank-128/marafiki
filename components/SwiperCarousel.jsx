import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import HomeCarousel from "@/components/HomeCarousel";


const ZoomCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const images = [
        "/home/img1.png",
        "/home/img2.png",
        "/home/img3.jpeg"
    ];

    useEffect(() => {
        // Preload all background images
        const loadImages = async () => {
            const promises = images.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            // Wait until all images are loaded
            await Promise.all(promises);
            setIsLoaded(true);
        };

        loadImages();
    }, [images]);



    const handleBeforeChange = (current, next) => {
        setPrevSlide(current); // Track the exiting slide
        setCurrentSlide(next); // Track the incoming slide
    };

    return (
        <div

        >
            {isLoaded ?
            <HomeCarousel /> : <div className={'bg-greenColor h-screen w-screen '} />
            }
        </div>
    );
};

export default ZoomCarousel;
