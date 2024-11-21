import React from 'react';
import Image from 'next/image'

function Blog() {
  return (
      <div className="">
        {/* Welcome Section */}
        <section className={'w-screen relative -mt-24 our-services-welcome text-center '}>
          <Image width={1920} height={600} className={"object-cover h-[30rem] w-screen"} alt={"coffee crop"}
                 src={'/blog-welcome.jpg'}/>
          <div
              className={"w-full h-[30rem] bg-black/50 flex flex-col gap-y-8 items-center justify-center top-0 left-0 absolute "}>
            <header className="text-center ">
              <h1 className="text-4xl font-bold text-white">Welcome to Marafiki Coffee Insights</h1>
              <p className="text-xl text-yellowColor mt-2">
                Discover the latest updates and insights on Tanzania’s coffee industry and Marafiki Coffee Marketing’s
                journey.
              </p>
            </header>

          </div>

        </section>


        {/* Blog Content */}
        <article className="space-y-16 px-12 pt-24 pb-12 bg-deepGreenColor">
          <div className={'border-white py-4 space-y-6 border-b-2'}>

            <h3 className="text-xl font-medium text-yellowColor">The Tanzania’s Coffee Story: 2023/24 Market Insights
              | Volume 1</h3>
            <i className={'text-yellowColor/65 text-sm'}>23 November 2024</i>
            <p className={'text-white'}>
              Coffee stands as Tanzania’s second-largest traditional export, generating a substantial 24% of the
              country’s foreign exchange earnings, second only to tobacco (NBS, 2019). Not just an economic
              force, coffee is also a lifeline for 200,000 households, making it integral to the country’s social
              fabric. Recognizing this potential, the Tanzanian government classified coffee as a national
              strategic crop in 2018—a move that has sparked renewed focus, investment, and growth.
            </p>
          </div>

          <div className={'border-white py-4 space-y-6 border-b-2'}>

            <h3 className="text-xl font-medium text-yellowColor">Navigating a Volatile Market: The 2023/24 Coffee
              Season</h3>
            <i className={'text-yellowColor/65 text-sm'}>23 November 2024</i>
            <p className={'text-white'}>
              In the global arena, coffee prices have faced intense volatility. However, Tanzanian farmers have
              experienced a welcome shift: 2023/24 has brought some of the highest prices seen in recent
              years. So, what’s behind these favorable trends?
            </p>

            <ul className="list-disc list-inside space-y-2 text-white">
              <li>
                <strong>The Coffee Rehabilitation Program:</strong> Tanzania initiated a national coffee
                rehabilitation program designed to improve both yield and quality. This program has led to
                increased productivity across smallholder farms, a cornerstone of Tanzanian coffee production.
              </li>
              <li>
                <strong>Growing Demand for Tanzanian Coffee:</strong> Global steady demand is on the rise,
                especially in key markets such as the EU, Japan, and the U.S., which fuels competitive prices and
                showcases the unique flavors of our high-altitude, volcanic soils.
              </li>
              <li>
                <strong>Brazil’s Climate Catastrophe:</strong> Severe weather in Brazil has impacted global coffee
                supplies, opening doors for Tanzanian coffee to gain traction on the world stage.
              </li>
              <li>
                <strong>The Auction System:</strong> Tanzania’s coffee auction system, launched in 2018, gives
                farmers more control over pricing, enabling a fairer marketplace for Tanzanian coffee.
              </li>
            </ul>
          </div>

          <div className={'border-white py-4 space-y-6 border-b-2'}>

            <h3 className="text-xl font-medium text-yellowColor">Tanzania’s Coffee Production: Record Growth</h3>
            <i className={'text-yellowColor/65 text-sm'}>15 November 2024</i>
            <p className={'text-white'}>
              Tanzania’s 2023/24 coffee production is projected to grow by 21%, reaching 1.35 million bags in
              exports. Smallholder farmers, who produce roughly 90% of Tanzanian coffee, are at the heart of this
              success. Their dedication and resilience drive our mission at Marafiki Coffee Marketing to foster
              sustainable, long-term growth within the coffee supply chain.
            </p>

          </div>

          <div className={'border-white py-4 space-y-6 border-b-2'}>
            <h3 className="text-xl font-medium text-yellowColor">Tanzanian Coffee: A Growing Global Favorite</h3>
            <i className={'text-yellowColor/65 text-sm'}>23 November 2024</i>
            <p className={'text-white'}>
              With global coffee lovers increasingly seeking out Tanzanian beans, exports are anticipated to
              rise by 13%. International buyers are drawn to the quality and character of Tanzanian coffee, and
              the domestic market is also expanding, particularly in Tanzania’s tourism hotspots.
            </p>

            <p className={'text-white'}>
              At Marafiki Coffee Marketing, we believe that every cup of coffee represents the shared journey
              from farm to table. We are committed to supporting gender equality, driving action against climate
              change, and promoting eco-friendly, innovative farming techniques. Through partnerships and
              adherence to EUDR Standards, we’re building a sustainable coffee industry for future generations.
            </p>

            <p className={'text-white'}>
              Here’s to a thriving coffee journey—one that’s rich, resilient, and brewed with purpose!
            </p>
          </div>
        </article>
      </div>
  );
}

export default Blog;
