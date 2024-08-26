import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lady from '../assets/lady.svg';
import frame8057 from '../assets/Frame-8057.svg';

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const slidesData = [
        {
            id: 1,
            image: lady,
            name1: 'Thierry Pro',
            position1: 'Chief Portal Organizer',
            name2: 'Memory Kashumba',
            position2: 'Senior Director',
            message: 'Exceptional service from RootPointer! Their UI/UX team demonstrated a keen understanding of our brand, delivering designs that perfectly aligned with our vision. The web development work was flawless, and their game development skills added a unique edge to our projects. RootPointer is a reliable partner committed to excellence.'
        },
        {
            id: 2,
            image: lady,
            name1: 'Jane Doe',
            position1: 'Project Manager',
            name2: 'John Smith',
            position2: 'CTO',
            message: 'RootPointer provided us with an amazing service, delivering a sleek and user-friendly interface. Their team was responsive and worked diligently to meet our needs, making the project a success.'
        },
        {
            id: 3,
            image: lady,
            name1: 'Emily Clark',
            position1: 'Marketing Head',
            name2: 'Michael Lee',
            position2: 'CEO',
            message: 'Working with RootPointer was a pleasure. Their expertise in web development and design helped our business grow exponentially. They are a highly recommended partner for any digital project.'
        }
    ];

    return (
        <section className="py-[7rem]">
            <div className="">
                <div className="flex flex-col items-center justify-center text-center">
                    <div data-aos="fade-left" data-aos-duration="1200" className="max-w-[544px] lg:max-w-[800px] 2xl:mt-12 2xl:pb-4 mt-5">
                        <h2 className="text-2xl lg:text-[40px] text-primary lg:leading-10 font-semibold mb-5 lg:mb-8">
                            Our <span className="text-[#4A83E7]">Clients Review</span>
                        </h2>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1200">
                        <p className="text-[#5F5F5F] text-xl lg:text-[36px] font-semibold">
                            What Our Clients Say About Us
                        </p>
                    </div>
                </div>

                <div className="container flex justify-center w-1/2 mt-5">

                </div>
            </div>

            <div className="container lg:flex flex justify-center">
                <div data-aos='fade-left' className=" max-w-[544px] lg:max-w-[1200px] 2xl:mt-12 2xl:pb-4 mt-5">
                    <div>
                        <Slider {...settings}>
                            {slidesData.map((slide) => (
                                <div key={slide.id} className="rounded-38 bg-slider-bg bg-no-repeat bg-cover">
                                    <div className="flex">
                                        <div className="w-2/4 rounded-38 relative hidden lg:block">
                                            <div className="ml-15">
                                                <img className="absolute bottom-0" height="300px" width="181px" src={slide.image} alt="SliderComp Image" />
                                            </div>
                                        </div>
                                        <div className="w-2.5/4 px-16">
                                            <div className="lg:flex pb-28 py-[2.5rem] px-5">
                                                <div className="w-2/3">
                                                    <div className="bg-white rounded-2xl sm:pl-4 p-2 w-auto card_width">
                                                        <div className="lg:flex p-3">
                                                            <div className="w-1/4 px-2">
                                                                <img alt="Avatar" className="avatar" src={frame8057} />
                                                            </div>
                                                            <div className="w-3/4">
                                                                <div className="font-bold mt-2">
                                                                    <b >{slide.name1}</b>
                                                                </div>
                                                                <div className="text-base text-[#555555] mt-1">
                                                                    <span>{slide.position1}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-2/3">
                                                    <div className="card_width">
                                                        <div className="lg:flex p-3">
                                                            <div className="w-1/4 px-2">
                                                                <img alt="Avatar" src={frame8057} />
                                                            </div>
                                                            <div className="w-3/4">
                                                                <div className="font-bold mt-2">
                                                                    <b >{slide.name2}</b>
                                                                </div>
                                                                <div className="text-[#555555] mt-1">
                                                                    <span >{slide.position2}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-16">
                                                <div className="lg:flex">
                                                    <div className="w-1/12">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                            <path d="M14.6377 12.2769L16.6377 8.27686H12.6377C8.2177 8.27686 4.6377 13.8569 4.6377 18.2769V32.2769H18.6377V18.2769H10.6377C10.6377 12.2769 14.6377 12.2769 14.6377 12.2769ZM28.6377 18.2769C28.6377 12.2769 32.6377 12.2769 32.6377 12.2769L34.6377 8.27686H30.6377C26.2177 8.27686 22.6377 13.8569 22.6377 18.2769V32.2769H36.6377V18.2769H28.6377Z" fill="#4A83E7" />
                                                        </svg>
                                                    </div>
                                                    <div className="w-10/12 mt-4 px-2">
                                                        <span>
                                                            <p className="text-[#555555] font-medium ml-3 lg:leading-[42px]">{slide.message}</p>
                                                        </span>
                                                        <div className="flex justify-end -mt-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                                <path d="M22.6367 18.2773V32.2773H36.6367V18.2773C36.6367 13.8773 33.0367 8.27734 28.6367 8.27734H24.6367L26.6367 12.2773C26.6367 12.2773 30.6367 12.2773 30.6367 18.2773H22.6367ZM4.63672 18.2773V32.2773H18.6367V18.2773C18.6367 13.8773 15.0367 8.27734 10.6367 8.27734H6.63672L8.63672 12.2773C8.63672 12.2773 12.6367 12.2773 12.6367 18.2773H4.63672Z" fill="#4A83E7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default SliderComp;
