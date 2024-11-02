"use client"
import MissionCard from "@/components/MissionCard";
import ServiceCard from "@/components/ServiceCard";
import ValuesCard from "@/components/ValuesCard";
import VissionCard from "@/components/VisionCard";
import { services } from "@/constants/services";
import { values } from "@/constants/values";
import Image from "next/image";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { useRef,useEffect } from "react";
import gsap from "gsap";

export default function Home() {
    const textRef = useRef(null);
    const spanRef = useRef(null);

  useEffect(() => {
    
    if (textRef.current) {
        
        gsap.fromTo(
            textRef.current,
            { opacity: 0 }, 
            { opacity: 1, duration: 4.5, ease: "power2.out" },
        );
    }
    const theSpan = spanRef.current;

    const animateIn = () => {
        gsap.fromTo(
            theSpan,
            { x: -200, opacity: 0 }, // Start from off-screen left and invisible
            { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // End position and fade-in
        );
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateIn();
                }
            });
        },
        { threshold: 0.5 } // Adjust threshold as needed
    );

    if (theSpan) observer.observe(theSpan);

    return () => {
        if (theSpan) observer.unobserve(theSpan);
    };
   
  }, []);


    return (
        <div className="flex flex-col gap-10 items-center z-0">
            <div className="relative -mt-24">
                <Image
                    className="h-[100vh] w-[100vw] object-cover relative"
                    src="/coffee-bg-2.jpg"
                    alt="coffee-seed"
                    width={200}
                    height={200}
                />
                <div className="absolute top-[50%] left-0  flex flex-col  py-4 gap-2 sm:px-36 px-4">
                    <span className="font-black text-2xl sm:text-7xl text-[#AACA33]">Marafiki Coffee Marketing</span>
                   
                    <span ref={spanRef} className="text-white opacity-90 sm:text-5xl font-black text-sm ">
                    Connecting Tanzania’s finest coffee to the world through a transparent, sustainable &amp; high
                    quality coffee value chain.
                    </span>
                    <div className="bg-redColor  cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl text-white px-2 py-1 w-32">
                        Discover More
                    </div>
                </div>

                {/* <div className="p-5 absolute -bottom-20 left-[5vw] sm:left-[10vw] flex gap-5 justify-evenly w-[90vw]  sm:w-[77vw] bg-redColor h-[10rem]">
                    <button className="flex flex-col items-center justify-between">
                        <svg
                            fill="#AACA33"
                            className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
                            viewBox="0 -30.87 122.88 122.88"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    stroke="#AACA33"
                                    strokeWidth="2"
                                    className="st0"
                                    d="M105.01,40.54c-5.7,0-10.3,4.63-10.3,10.3c0,5.7,4.63,10.3,10.3,10.3c5.7,0,10.3-4.63,10.3-10.3 C115.31,45.14,110.68,40.54,105.01,40.54L105.01,40.54z M61.86,41.46c-5.2,0-9.38,4.22-9.38,9.38c0,5.2,4.22,9.38,9.38,9.38 c5.2,0,9.38-4.22,9.38-9.38C71.24,45.64,67.02,41.46,61.86,41.46L61.86,41.46z M61.86,47.23c-1.99,0-3.61,1.62-3.61,3.61 s1.62,3.61,3.61,3.61c1.99,0,3.61-1.62,3.61-3.61S63.85,47.23,61.86,47.23L61.86,47.23z M24.11,41.46c-5.2,0-9.38,4.22-9.38,9.38 c0,5.2,4.22,9.38,9.38,9.38c5.2,0,9.38-4.22,9.38-9.38C33.5,45.64,29.28,41.46,24.11,41.46L24.11,41.46z M24.11,47.23 c-1.99,0-3.61,1.62-3.61,3.61s1.62,3.61,3.61,3.61c1.99,0,3.61-1.62,3.61-3.61S26.11,47.23,24.11,47.23L24.11,47.23z M47.37,53.53 H38.1v-3.01h9.27V53.53L47.37,53.53z M10.46,53.53H5.63c-1.55,0-2.95-0.66-3.96-1.71c-1.01-1.05-1.65-2.5-1.65-4.02V8.06 c0-2.44-0.36-4.44,1.62-6.42C2.66,0.63,4.05,0,5.6,0h73.32c1.55,0,2.95,0.63,3.96,1.65c1.01,1.01,1.65,2.41,1.65,3.96l0,7.26 l10.27,0.07l3.62,0.02l0,0c0.73,0.79,1.4,1.6,2.01,2.42c2.71,3.64,4.23,7.94,4.52,12.11l16.38,6.27l1.55,16.51h-5.01 c-2.31-18.03-25.03-15.84-25.73,0l-7.61,0v1.74c0,0.86-0.67,1.52-1.52,1.52l-6.69,0v-3.04h5.16V5.61c0-0.7-0.28-1.33-0.76-1.81 c-0.48-0.48-1.11-0.76-1.81-0.76H5.6c-0.7,0-1.33,0.29-1.81,0.76C2.76,4.77,3.07,6.43,3.07,7.7v40.1c0,0.73,0.32,1.43,0.79,1.93 c0.48,0.48,1.08,0.79,1.77,0.79h4.82V53.53L10.46,53.53z M94.46,17.89l-5.83-0.09v9.69h11.02C99.12,23.98,97.49,20.9,94.46,17.89 L94.46,17.89z M105.01,46.88c-2.19,0-3.96,1.77-3.96,3.96c0,2.19,1.77,3.96,3.96,3.96c2.19,0,3.96-1.77,3.96-3.96 C108.97,48.65,107.2,46.88,105.01,46.88L105.01,46.88z"
                                />
                            </g>
                        </svg>
                        <span className="text-[#AACA33] text-sm ">
                            Delivery
                        </span>
                        <span className="text-white text-xs">
                            We deliver coffee orders in time
                        </span>
                    </button>
                    <button className="flex flex-col items-center justify-between">
                        <svg
                            className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
                            viewBox="0 0 97 97"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M36.375 88.9167V48.5H60.625V88.9167M12.125 36.375L48.5 8.08334L84.875 36.375V80.8333C84.875 82.9772 84.0234 85.0332 82.5074 86.5491C80.9915 88.065 78.9355 88.9167 76.7917 88.9167H20.2083C18.0645 88.9167 16.0085 88.065 14.4926 86.5491C12.9766 85.0332 12.125 82.9772 12.125 80.8333V36.375Z"
                                stroke="#AACA33"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-[#AACA33] text-sm ">Storage</span>
                        <span className="text-white text-xs">
                            We supply coffee throughout the country
                        </span>
                    </button>
                    <button className="flex flex-col items-center justify-between">
                        <svg
                            className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
                            viewBox="0 0 97 97"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M53.5 98.0833C78.1227 98.0833 98.0833 78.1227 98.0833 53.5C98.0833 28.8773 78.1227 8.91666 53.5 8.91666C28.8773 8.91666 8.91666 28.8773 8.91666 53.5C8.91666 78.1227 28.8773 98.0833 53.5 98.0833Z"
                                stroke="#AACA33"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M53.5 80.25C68.2736 80.25 80.25 68.2736 80.25 53.5C80.25 38.7264 68.2736 26.75 53.5 26.75C38.7264 26.75 26.75 38.7264 26.75 53.5C26.75 68.2736 38.7264 80.25 53.5 80.25Z"
                                stroke="#AACA33"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M53.5 62.4167C58.4245 62.4167 62.4167 58.4245 62.4167 53.5C62.4167 48.5755 58.4245 44.5833 53.5 44.5833C48.5755 44.5833 44.5833 48.5755 44.5833 53.5C44.5833 58.4245 48.5755 62.4167 53.5 62.4167Z"
                                stroke="#AACA33"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-[#AACA33] text-sm ">Advice</span>
                        <span className="text-white text-xs">
                            We provide marketing advice for  coffee order in
                            time
                        </span>
                    </button>
                    <button className="flex flex-col items-center">
                        <svg
                            className="w-[50px] sm:w-[80px]  h-[50px] sm:h-[80px]"
                            viewBox="0 0 107 107"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M74.1667 82.625V73.7083C74.1667 68.9786 72.2878 64.4427 68.9434 61.0983C65.599 57.7539 61.063 55.875 56.3333 55.875H20.6667C15.937 55.875 11.401 57.7539 8.0566 61.0983C4.71221 64.4427 2.83334 68.9786 2.83334 73.7083V82.625M56.3333 20.2083C56.3333 30.0574 48.3491 38.0417 38.5 38.0417C28.6509 38.0417 20.6667 30.0574 20.6667 20.2083C20.6667 10.3593 28.6509 2.375 38.5 2.375C48.3491 2.375 56.3333 10.3593 56.3333 20.2083Z"
                                stroke="#AACA33"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-[#AACA33] text-sm ">
                            Delivery
                        </span>
                        <span className="text-white text-xs">
                            We deliver coffee orders in time
                        </span>
                    </button>
                </div> */}
            </div>
            {/* section 2 */}
            <div className="mt-20" id="about-us">
                <div className="flex sm:px-20 px-2 sm:flex-row flex-col">
                    <div className="relative basis-3/5">
                        <Image
                            src="/coffee_plants.jpeg"
                            width={200}
                            height={200}
                            className="h-[50vh] sm:w-[50vw] w-[75vw] object-cover border-4 border-white"
                            alt="coffee-plants"
                       />
                        <Image
                            src="/community.jpeg"
                            width={200}
                            height={200}
                            className="h-[30vh] sm:w-[25vw] w-[40vw] absolute -bottom-5 sm:bottom-0 right-0 object-cover border-4 border-white"
                            alt="community"
                        />
                    </div>
                    <div className="px-4 basis-2/5 ">
                        <h1 className="text-redColor font-extrabold">About Us!</h1>

                        <p>
                            At Rafiki Coffee Marketing, we are committed to
                            bridging the gap between Tanzanian coffee producers
                            and international markets. Based in Tanzania, our
                            mission is to bring the world closer to the rich,
                            vibrant, and high-quality coffee grown in the heart
                            of Tanzania&apos;s renowned coffee regions. We specialize
                            in enhancing the coffee value chain, ensuring that
                            every step from the farm to the buyer is carefully
                            managed, adding value and preserving quality. Our
                            desire to keep the coffee chain in flow is what sets
                            us apart, we believe flow is everything! Our name,
                            “Rafiki,” meaning “friend” in Swahili, symbolizes
                            the trust and mutual benefit that we aim to
                            cultivate between producers and buyers. We focus on
                            creating meaningful partnerships, grounded in
                            ethical trade practices, fair pricing, and a shared
                            commitment to quality and sustainability.
                        </p>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="py-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-10">
                

                <MissionCard/>
                <VissionCard />

            </div>
            <div id="values">
                <h1 className="font-black text-2xl text-center">Our Values</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-x-6 py-5 gap-y-7">
                    { values.map((item,i)=><ValuesCard link={item.link} readMore={true} key={i} title={item.title} desc={item.desc.substring(0,200)+"..."} variant={item.variant} />)}
                
                </div>

             </div>  
              {/* Our services */}
              <div id="services" className="py-4 ">
                <div className="font-black text-xl text-black text-center w-full py-2">Our Services</div>
                    
                    <div className="sm:grid-cols-3 grid-cols-1 grid gap-8">
                    {
                        services.map((item,i)=><ServiceCard key={i} title={item.title} id={item.id} desc={item.description.substring(0,70)+"..."} icon={item.icon} />)
                    }
                    
                    </div>    


              </div>

        </div>
    );
}
