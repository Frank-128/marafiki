import React, { useState } from 'react';
import { Carousel } from 'antd';


const ZoomCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleChange = (current) => {
        setCurrentSlide(current);
    };

    const images = [
        "/home/img1.png",
        "/home/img2.png",
        "/home/img3.jpeg"
    ];

    return (
        <Carousel
            className="w-full"
            autoplaySpeed={5000}
            autoplay
            afterChange={handleChange}
        >
            {images.map((item, i) => (
                <div key={i}>
                    <div
                        className={`zoom-effect ${currentSlide === i ? "carousel-slide-enter-active" : ""}`}
                        style={{
                            backgroundImage: `url(${item})`,
                            height: "100vh",
                            width: "100%",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent "></div>
                </div>
            ))}
        </Carousel>
    );
};

export default ZoomCarousel;
