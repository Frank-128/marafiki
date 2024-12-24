"use client"
import MissionCard from "@/components/MissionCard";
import ServiceCard from "@/components/ServiceCard";
import ValuesCard from "@/components/ValuesCard";
import VissionCard from "@/components/VisionCard";
import { services } from "@/constants/services";
import { values } from "@/constants/values";
import { useRef,useEffect } from "react";
import gsap from "gsap";
import SwiperCarousel from "@/components/SwiperCarousel";
import Link from "next/link";


export default function Home() {
    const textRef = useRef(null);
    const spanRef = useRef(null);
    const aboutUsRef = useRef(null);

    const serviceCardsRef = useRef([]);
    const sectionRef = useRef(null); // Reference to the section

    useEffect(() => {
        // Set up the Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Create a GSAP timeline when the section is in view
                    const tl = gsap.timeline();

                    // Animate each service card with a delay
                    serviceCardsRef.current.forEach((card, index) => {
                        tl.from(card, {
                            opacity: 0,
                            y: 20,  // Optional: animate vertical movement
                            duration: 0.2,  // 1 second duration for fade-in
                            delay: 0.1,  // 0.1 seconds delay for each card
                            ease: 'power2.out',  // Easing for smoothness
                        });
                    });

                    // Once the animation is complete, we can unobserve the section
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

        const currentSectionRef = sectionRef.current;

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

  useEffect(() => {
    
    if (textRef.current) {
        
        gsap.fromTo(
            textRef.current,
            { opacity: 0 }, 
            { opacity: 1, duration: 4.5, ease: "power2.out" },
        );
    }

  if (aboutUsRef.current) {

          gsap.fromTo(
              aboutUsRef.current,
              { opacity: 0 },
              { opacity: 1, duration: 4.5, ease: "power2.out" },
          );
      }

    const theSpan = spanRef.current;

    const animateIn = () => {
        gsap.fromTo(
            theSpan,
            { y: -200, opacity: 0 }, // Start from off-screen left and invisible
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // End position and fade-in
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
        <div  className="flex flex-col  items-center z-0">
            <div
                style={{
                    backgroundImage: `url("/community.jpeg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                    height: "100vh",
                    width: "100vw",
                }}
                className={"fixed -z-20 inset-0 top-0 left-0"}
            />
            <div className="relative w-screen -mt-24">
                <div className={""}>


                {/*<HomeCarousel />*/}
                    <SwiperCarousel/>
                </div>
                <div className="absolute top-[10%] left-0  items-center  flex flex-col  py-4 gap-8 sm:px-36 px-4">
                    <span className="font-light text-4xl sm:text-2xl text-yellowColor">Marafiki Coffee Marketing</span>
                    <span ref={spanRef} className="text-white opacity-90 sm:text-7xl text-center font-black text-2xl ">Crafting a Global Coffee Community, One Relationship at a Time</span>
                    <span className="text-[#d9d9d9] opacity-90 sm:text-xl font-light text-sm text-center">
                    Building a reliable, responsible and sustainable coffee supply chain on principles of transparency,quality and fair trade. The future of our coffee is what sets us apart.
                    </span>
                    <Link
                        href={'/our-services'}
                        className="border-white border-2  cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl text-white px-2 py-1 w-32">
                        Discover More
                    </Link>
                </div>


            </div>
            {/* section 2 */}
            <div className="" id="about-us">
                <div className="flex sm:px-20 px-2 sm:flex-row flex-col">

                    <div className="bg-greenColor sm:-mx-20 -mx-2 flex  sm:flex-row flex-col px-4 py-10">
                        <div className={"basis-1/2 space-y-8"}>
                        <h2 className=" font-semibold text-2xl text-yellowColor">About Us!</h2>
                        <h1 className={"sm:text-5xl text-2xl text-white "}>
                            A team of passionate coffee enthusiasts
                        </h1>
                        
                        <a 
                        href={'/business_profile.pdf'}
                        download={"MarafikiBusinessProfile.pdf"}
                        className="border-yellowColor border-2 block  cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl text-yellowColor px-2 py-1 w-fit"
                        >
                        Download bussiness profile
                            </a>

                        </div>

                        <div ref={aboutUsRef} className={"basis-1/2 px-3 text-white"}>
                            We’re a team of passionate coffee enthusiasts, deeply invested in the journey of Tanzanian
                            coffee, from farm to cup. For us, coffee isn’t just a product; it’s a commitment to the
                            future of the entire coffee value chain. One question drives us forward: What does the
                            future hold for Tanzanian coffee?

                            The industry faces significant challenges, particularly when it comes to reliability and
                            trust in international transactions.<div className={"my-8"}/> We understand the difficulties our buyers
                            encounter in finding dependable partners and recognize the value our producers bring to this
                            global market. That’s why we operate with a foundation of transparency, ensuring that every
                            step of our business reflects fairness, quality, and a focus on sustainability.
                            <div className={"my-8"}/> Marafiki Coffee Marketing was built to bridge the gap between global buyers and
                            Tanzanian producers. Our mission is about more than transactions; it’s about building
                            long-term relationships that uplift communities and ensure a steady, reliable coffee supply
                            for years to come. So whether you’re a small business or a large roaster looking for a
                            consistent source of premium Tanzanian coffee, we’re here to connect, support, and grow
                            together as friends (marafiki). Let&apos;s embark on this journey together
                            <div className={"my-8"}>
                                Why Choose Us:
                                Steady supply &amp; Longterm relationships: With strong connections to coffee producers,
                                cooperatives, and estates across Tanzania, we guarantee a steady and reliable supply of high-
                                quality coffee, even during challenging seasons.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="py-10 bg-deepGreenColor sm:-mx-20 w-full flex flex-col sm:flex-row items-center gap-10 justify-center ">
                

                <MissionCard/>
                <VissionCard />

            </div>
            <div id="values" className={"bg-black/80 sm:-mx-20 py-10 w-full"}>
                <h1 className="font-black  text-center text-3xl text-white">Our Values</h1>
                <div className="w-full grid max-w:sm:grid-cols-2 grid-cols-4  py-5  place-items-center gap-y-7">
                    { values.map((item,i)=><ValuesCard link={item.link} readMore={true} key={i} title={item.title} desc={item.desc.substring(0,200)+"..."} variant={item.variant} />)}
                
                </div>

             </div>  
              {/* Our services */}
              <div id="services" className="py-24 bg-deepGreenColor w-full flex flex-col sm:flex-row sm:-mx-20 -mx-2 items-center  justify-between">
                <div className={'px-5 py-2'}>
                  <div className="font-black text-xl basis-1/4 text-yellowColor  text-center w-full py-2">Our Services</div>
                    <div className={"text-white text-4xl text-center font-black"}>From Farm to Cup,<br/> We Deliver Quality</div>
                </div>

                    <div ref={sectionRef} className="lg:grid-cols-3 sm:grid-cols-2 basis-3/4 grid-cols-1 grid gap-8">
                    {
                        services.map((item,i)=><ServiceCard ref={(el) => (serviceCardsRef.current[i] = el)} key={i} title={item.title} id={item.id} desc={item.description.substring(0,70)+"..."} icon={item.icon} className="transition-all duration-500 ease-out opacity-0 transform translate-y-4" />)
                    }
                    
                    </div>    


              </div>

        </div>
    );
}
