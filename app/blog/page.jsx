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
      <div className="space-y-8">
          <div className={'border-white py-4 space-y-6 border-b-2'}>
            <h3 className="text-xl font-medium text-yellow-400">2025 Q1 Coffee Analysis: The Road to Crop ‘25</h3>
            <i className={'text-yellow-400/65 text-sm'}>29 March 2025</i>
            <p className={'text-white'}>
              Coffee prices remain as unpredictable as ever. While some businesses are adapting, others are still searching for ways to stay afloat. Last week, Arabica futures fluctuated within a narrow 25-cent-per-pound range before closing at 391.40 c/lb, reflecting a 3.8% increase. Robusta prices in London followed a similar pattern, rising by 2.2% to 5,515 USD per metric ton. The market’s momentum, it seems, has taken a well-earned coffee break.
            </p>
          </div>

          <div className={'border-white py-4 space-y-6 border-b-2'}>
            <h3 className="text-xl font-medium text-yellow-400">Is a Return to Stability Possible?</h3>
            <i className={'text-yellow-400/65 text-sm'}>29 March 2025</i>
            <p className={'text-white'}>
              Very unlikely! The volatility we’re witnessing isn’t a passing phase. Once bitten, twice shy — businesses must rethink their strategies and adapt to the new normal. The days of expecting predictable prices are gone. It’s time for actionable solutions.
            </p>
            <p className={'text-white'}>
              At <span className="font-medium">Marafiki Coffee Marketing</span>, we’ve been proactive. For the past two years, we’ve partnered with buyers through forward contracting for Tanzanian Robusta. This strategy provides producers with a guaranteed market while offering buyers a reliable supply chain. This direct link has been a win-win model that shields both sides from the whims of price swings. It is an old tool that has been used in trade and turned out to be useful in our case.
            </p>
          </div>

          <div className={'border-white py-4 space-y-6 border-b-2'}>
            <h3 className="text-xl font-medium text-yellow-400">Key Events Shaping Tanzania’s Coffee Landscape</h3>
            <i className={'text-yellow-400/65 text-sm'}>29 March 2025</i>
            <p className={'text-white'}>
              The last month has seen significant developments for Tanzania’s coffee industry:
            </p>
            <ol className="list-decimal list-inside text-white space-y-4">
              <li>
                <span className="font-medium">The 3rd G25 African Coffee Summit & 21st Africa Fine Coffees Conference</span><br />
                These back-to-back events brought together influential voices, including keynote speakers from organizations like the International Coffee Organization (ICO), Rainforest Alliance (RFA), and the Specialty Coffee Association (SCA). Discussions focused on reshaping Africa’s coffee narrative, promoting sustainability, and unlocking new market opportunities. The energy from these conferences has injected fresh momentum into Tanzania’s coffee sector.
              </li>
              <li>
                <span className="font-medium">Weather Patterns and Harvest Outlook</span><br />
                Weather has been dynamic across coffee-growing regions. January saw hot and dry conditions in the North and Lake Zones, which persisted until mid-February. Since then, cooler temperatures and consistent rainfall have improved soil moisture levels. Similarly, the Southern Highlands (Mbeya, Iringa, and Rukwa) experienced steady rainfall, creating ideal conditions for both Robusta and Arabica crops. As a result, a higher harvest volume is anticipated this season compared to last year.
              </li>
              <li>
                <span className="font-medium">Political Landscape: Calm Amid Campaigning</span><br />
                With Tanzania’s general elections scheduled for later this year, the political climate is gradually heating up. Campaigning has begun, with most political parties announcing their candidates. Despite the significance of the elections, Tanzania remains a beacon of peace and stability, ensuring business continuity without disruption.
              </li>
              <li>
                <span className="font-medium">Logistics: Port Developments on Track</span><br />
                There’s been no major disruption at the Dar es Salaam Port since January. Following its management takeover by DP World, expansion projects are underway, promising enhanced capacity and operational efficiency. Simultaneously, development at the Tanga and Bagamoyo ports aims to decongest Dar es Salaam and offer diversified logistics solutions. This is a positive step for coffee exporters seeking faster and more reliable shipping routes.
              </li>
            </ol>
        </div>

        <div className={'border-white py-4 space-y-6 border-b-2'}>
          <h3 className="text-xl font-medium text-yellow-400">Looking Ahead: What’s Next for Robusta?</h3>
          <i className={'text-yellow-400/65 text-sm'}>29 March 2025</i>
          <p className={'text-white'}>
            The Robusta coffee season is set to kick off in mid-May. With a month to go, companies have ample time to strategize and secure their coffee needs. Higher yields compared to last year are expected, backed by favorable weather conditions and improved farm management practices.
          </p>
          <p className={'text-white'}>
            Moreover, 2025 being an election year may further contribute to a stable business environment, fostering confidence among investors and traders.
          </p>
          <p className={'text-white'}>
            Stay tuned for our upcoming articles as we continue to bring you in-depth insights and updates. At <span className="font-medium">Marafiki Coffee Marketing</span>, we’re committed to ensuring our partners are always one step ahead.
          </p>
        </div>
      </div>
          
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
