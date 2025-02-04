import React, { useState } from 'react';

const Blogs = () => {
    const [showMore, setShowMore] = useState(false);
    const [blogsToShow, setBlogsToShow] = useState(4); // Initially show 4 blogs

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setBlogsToShow(showMore ? 4 : blogsToShow + 4); // Show 4 more blogs if not showing more, otherwise keep the same number
    };

    const blogs = [
        {
            title: "Sensex at 80,000: ICICI Bank, Nestle among top 7 stock picks of brokerages",
            content: "Sensex crossed the 80,100 mark for the first time ever today, while it had achieved the 80,000 milestone on Wednesday. The journey from 70k to 80k was covered by the index in just 139 trading, its fastest ever.",
            website: "https://economictimes.indiatimes.com/markets/stocks/news/sensex-at-80000-icici-bank-nestle-among-top-7-stock-picks-of-brokerages/sensex-at-80000/slideshow/111480756.cms",
        },
        {
            title: "Bitcoin hits 2-month low on election uncertainty, Mt Gox flows",
            content: "The world's biggest cryptocurrency has been under pressure in recent months, its slide accelerating this week after the first debate between U.S. presidential candidates Joe Biden and Donald Trump raised the spectre of Biden being replaced as a candidate.",
            website: "https://economictimes.indiatimes.com/markets/cryptocurrency#CryptoNews",
        },
        {
            title: "Stock Market Highlights: Nifty tanks 6%, ends below short-term and medium-term averages.",
            content: "Nifty ended Tuesday's session 6% lower at 21,884.50 to form a long bearish candle on the daily charts.",
            website: "https://economictimes.indiatimes.com/markets/stocks/live-blog/bse-sensex-today-live-nifty-stock-market-updates-4-june-2024/liveblog/110684661.cms",
        },
        {
            title: "HDFC Life Insurance Company Stocks Live Updates: HDFC Life Insurance Company Sees Positive Movement with 1.74% Increase Today, 3-Year Returns at -12.46%",
            content: "Welcome to the HDFC Life Insurance Company Stock Liveblog, your real-time source for the latest updates and comprehensive analysis on a prominent stock. Dive into the current details of HDFC Life Insurance Company, including: Last traded price 606.05, Market capitalization:",
            website: "https://www.healthcaredive.com/nhttps://economictimes.indiatimes.com/markets/stocks/stock-liveblog/hdfc-life-insurance-company-stocks-live-updates-04-jul-2024/liveblog/111473876.cmsews/digital-health-funding-q1-2024-pitchbook/720067/",
        },
        {
            title: "Retail Reinvention: FashionTech's Virtual Shopping Success",
            content: "StyleTech Ventures pioneers virtual shopping experiences, doubling online sales and captivating fashion enthusiasts worldwide. Step into the future of retail innovation, where virtual reality transforms how consumers interact with fashion.",
            website: "https://www.voguebusiness.com/consumers/virtual-retail-the-tech-redefining-in-store-sales",
        },
        {
            title: "Adani Enterprises Share Price Live Updates: Adani Enterprises Sees 1.17% Decline in Stock Price, SMA5 at Rs 3208.24",
            content: "FinanceStay up-to-date with the Adani Enterprises Stock Liveblog, your trusted source for real-time updates and thorough analysis of a prominent stock. Explore the latest details on Adani Enterprises, including:  Fusion expands into Asian markets, doubling its customer base and securing strategic partnerships. Discover their playbook for international success in fintech, navigating regulatory landscapes and cultural nuances adeptly.",
            website: "https://timesofindia.indiatimes.com/blogs/blhttps://economictimes.indiatimes.com/markets/stocks/stock-liveblog/adani-enterprises-share-price-live-updates-04-jul-2024/liveblog/111473853.cmsuesky-thinking/indias-expanding-biz-ed-fuels-international-partnership-demand/",
        },
        {
            title: "Green Energy Revolution: SolarTech Co.'s Mega Project",
            content: "SolarTech Innovations completes largest solar farm in the region, powering 100,000 homes sustainably. Explore their role in driving renewable energy adoption, contributing to a greener future and sustainable development goals.",
            website: "https://www.linkedin.com/pulse/green-energy-revolution-innovations-shaping-future-vg3ge/",
        },
        {
            title: "Automotive Innovation: Electric Vehicles' Sales Hindalco Industries Share Price Today Updates: Hindalco Industries Sees Marginal Decline in Stock Price with EMA3 Holding Steady at 686.28Surge",
            content: "ElectroDrive Motors accelerates electric vehicle sales, capturing 15% of the global EV market. Learn Stay updated with the Hindalco Industries Stock Liveblog, your one-stop destination for real-time information and analysis of a leading stock. Explore the latest updates on Hindalco Industries stock, includinghow their eco-friendly solutions are reshaping the automotive industry, paving the way for a cleaner and more efficient transportation future.",
            website: "https://kadence.com/revvinhttps://economictimes.indiatimes.com/markets/stocks/stock-liveblog/hindalco-industries-share-price-today-live-updates-03-jul-2024/liveblog/111445738.cmsg-up-innovation-the-surge-of-electric-vehicles-in-global-markets/",
        },
    ];

    return (
        <div id="blogs" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Blogs</h2>
                    
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Recent Updates, Success Stories and General News</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                        {blogs.slice(0, blogsToShow).map((blog, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-black rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <h2 className="font-semibold my-4 text-2xl text-center">{blog.title}</h2>
                                    <p className="text-md font-medium">
                                        {blog.content} <a href={blog.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Read more</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center my-8">
                    <button onClick={toggleShowMore} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
