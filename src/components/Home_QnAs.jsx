import React, { useState } from 'react';

const Home_QnAs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        console.log(index);
        console.log("hell");


    };

    const faqs = [
        {
            question: "What services does RootPointers provide?",
            answer: "RootPointers offers a comprehensive range of services, including frontend and backend development, game development, and the creation of iOS and Android apps."
        },
        {
            question: "Can you elaborate on RootPointers' game development services?",
            answer: "We specialize in game development, creating engaging and immersive experiences for various platforms. Our team is skilled in designing and developing games that cater to different genres and audiences."
        },
        {
            question: "Does RootPointers provide iOS and Android app development services?",
            answer: "Yes, RootPointers excels in iOS and Android app development. We create user-friendly and feature-rich applications to meet your specific requirements."
        },
        {
            question: "Is there ongoing support for apps developed by RootPointers?",
            answer: "Yes, we provide ongoing support and maintenance for the apps we develop. Our support team is available to address any issues and ensure the continued smooth functioning of your applications."
        }
    ];

    return (
        <div className="container p-4 mx-auto">
            <div className="heading max-w-[544px] lg:max-w-[1000px] 2xl:mt-12 2xl:pb-4 mx-auto text-center">
                <h2 className="text-2xl lg:text-[40px] text-primary lg:leading-10 font-semibold mb-2 lg:mb-5">
                    Frequently Asked <span className="text-[#4A83E7]">Questions</span>
                </h2>
                <p className="text-[#555555] text-sm lg:text-lg">
                    Rootpointers website offers an exceptional user experience through intuitive design, seamless navigation, and personalized interactions. Explore our comprehensive FAQ section for quick answers and enhanced convenience.
                </p>
            </div>

            <div className="accordion flex flex-col items-center justify-center mt-10">
    {faqs.map((faq, index) => (
        <div key={index} className="w-full mt-3">
            <button
                className="accordion-button relative block text-gray-800 p-5 w-full max-w-xl mx-auto rounded-xl bg-blue-200 text-lg cursor-pointer"
                onClick={() => toggleAccordion(index)}
            >
                {faq.question}
            </button>
            <div
                className={`accordion-content overflow-hidden bg-blue-100 w-full max-w-xl mx-auto rounded-xl mt-3 transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] p-4' : 'max-h-0'
                    }`}
            >
                {activeIndex === index && (
                    <p>{faq.answer}</p>
                )}
            </div>
        </div>
    ))}
</div>

        </div>
    );
};

export default Home_QnAs;
