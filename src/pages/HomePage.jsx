import { useState, useEffect } from "react";
import '../Styles/MediaStyles.css';
import TypingEffect from "../components/TypingEffect";
const HomePage = () => {

    const [quote, setQuote] = useState('');
    const [quotedBy, setQuotedBy] = useState('');

    useEffect(() => {
        // Function to fetch article data
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://pjha:8000/api/getquote`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                
                setQuote(data[0].QuoteText);
                setQuotedBy(data[0].QuotedBy);
                console.log(quote, quotedBy);
            } catch (error) {
                console.error("Error fetching article:", error.message);
                // Handle error, e.g., redirect to an error page
            }
        };

        // Call the fetchArticle function when the component mounts
        fetchArticle();
    }, []);

return(
    <>
    <div className="w-full h-75 min-h-16" style={{ height: '375px' }}>
        <h1 className='font-bold tracking-light leading-tight md:py-5 md:text-1xl lg:text-3xl'>Hello, welcome to FAQs!</h1>
        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-10 mx-4 md:mx-10 max-w-md">
            <p className="text-lg font-medium">{quote}</p>
            <cite className="block text-right mt-4 text-gray-600">- {quotedBy}</cite>
        </blockquote>
  </div>
<center>
  <section className="container p-6 mx-auto space-y-10 dark:bg-gray-200 dark:text-white" style={{ height: '425px' }}>
    <h4 className="text-xl font-bold capitalize dark:text-gray-800 md:text-3xl text-center">⚒️ What&apos;s happening 🛠️</h4>
    <div className="flex items-center justify-center">
        <div className="grid gap-16 my-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
            <div className="object-cover object-center w-full h-75 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600 pl-4 pr-4 pb-4">
                <center className="py-3">
                    <img src="../../assets/Hexure.jpg" width="25%" height="25%" data-id="uploaded_image_104571052" data-size-coefficient="1" data-size-option="SMALL" data-size-utils="%" />
                </center>
                <span className="mt-1 font-normal dark:text-gray-100">Foster a C.A.R.I.N.G. culture to unleash life potential and skyrocket our transactions.</span>
                <center className="py-3">
                    <img src="../../assets/Hexure_Bharat.jpg" width="25%" height="25%" data-id="uploaded_image_104571052" data-size-coefficient="1" data-size-option="SMALL" data-size-utils="%" />
                </center>                        
                <span className="mt-1 font-normal dark:text-gray-100">Jeevan ke sambhaavana ko kholane aur hamaare len-den ko aakaash par udaane ke lie ek C.A.R.I.N.G. sanskrti ko protsaahit karen.</span>
            </div>
            <div className="object-cover object-center w-full h-75 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600 py-2">
                <center>
                    <img src="../../assets/Foresight.jpg" width="25%" height="25%" data-id="uploaded_image_104571052" data-size-coefficient="1" data-size-option="SMALL" data-size-utils="%" />                    
                </center>
                <div className="py-3 px-4">
                    <p className="mt-1 font-normal dark:text-gray-100">The industry standard in annuity and life insurance illustrations.</p>
                    <p className="mt-2 font-normal dark:text-gray-100">Fully customized to your brand and workflows. The ForeSight Enterprise plan is an intuitive and responsive point-of-sale insurance illustration software solution for all lines of business. Produce accurate, compliant, and compelling output that meets your clients&apos; needs.</p>
                </div>
            </div>
            <div className="object-cover object-center w-full h-75 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600 py-2">
                <center>
                    <img src="../../assets/FL.jpg" width="25%" height="25%" data-id="uploaded_image_104571052" data-size-coefficient="1" data-size-option="SMALL" data-size-utils="%" />
                </center>
                <div className="py-3 px-4">
                    <span className="mt-6 align-middle font-normal dark:text-gray-100">A product offering that is centered around simple design, focused utility and crafted execution that delights our clients while providing improvements on each iteration.</span>
                </div>
            </div>
        </div>
    </div>
</section>

<TypingEffect></TypingEffect>
</center>

</>
)
};

export default HomePage;