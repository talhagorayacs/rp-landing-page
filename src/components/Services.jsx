import React from 'react'
import hero_svg from '../assets/service_hero.svg'
import leftTriangles from '../assets/left-triangles.png'
import circle_left from '../assets/circle-left.png'
import rounded_pointer from '../assets/rounded-pointer.svg'
import frontend_application from '../assets/frontend-application.svg'
import backend_application from '../assets/backend-application.svg'
import e_commerce from '../assets/e-commerence-application.svg'
import cms_application from '../assets/cms-application.svg'
import web_dev from '../assets/web-application-development.png'
import discovery_and_analysis from '../assets/discovery-and-analysis.svg'
import planning_and_design from '../assets/planning-and-design.svg'
import development_image from '../assets/development-image.svg'
import mobile_application from '../assets/mobile-application.svg'
import ios_apple_image from '../assets/ios-apple-image.svg'
import android_logo from '../assets/android-logo.svg'
import cross_platform_img from '../assets/cross-platform-img.svg' 

function Services() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };
  return (
    <main>
      <section className="hero pt-26 lg:pt-[15rem] h-screen">
        <div className="top-[24rem] sm:top-[20rem] lg:top-[30rem] xl:top-[35rem] absolute">
          <img src={leftTriangles} alt="" />
        </div>
        <div className="container p-4 lg:pl-[5rem] lg:pt-36 mx-auto flex">
          <div className="relative lg:w-2/4  lg:m-0 ">
            <div>
              <div>
                <div>
                  <h1 className="text-[40px] lg:text-[40px]   xl:text-[40px] 2xl:text-[48px] 
                                  xl:leading-[3.5rem]  mb-3 text-[#525167]">
                    Our <span className="text-blue-500"> Services</span></h1>
                  <p className="text-2xl xl:text-lg 2xl:text-2xl text-[#525167] mr-16">RootPointers delivers
                    comprehensive IT
                    solutions,<br />
                    providing a hassle-free experience from start to
                    deployment and beyond. </p>
                </div>
              </div>
            </div>
            <a href="#web-application-development">
              <button onClick={()=>scrollToSection('section-2')} className="px-6 rounded-3xl hover:bg-blue-700 hover:cursor-pointer bg-[#4A83E7] text-white mt-7 text-sm leading-10">
                Learn More
              </button>
            </a>
          </div>
          {/* part2 */}
          <div className=" flex flex-col justify-end lg:mb-20 xl:mb-36">
            <div className=" hidden lg:block absolute right-0 top-[50%] mt-10 -translate-y-2/4    max-w-[550px] lg:max-w-[560px] 
                    2xl:max-w-[700px] 3xl:max-w-[100%]">
              <img src={hero_svg} width="694" height="777" />
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section id='section-2' className=" pt-28 h-full py-[4rem] lg:py-24  relative">
            <span className="absolute hidden -translate-y-3/4 left-0 top-2/4 z-[-1] mt-5 ">
            <img src={circle_left} alt=""/>
            </span>
            <div className="container mt-18 sm:p-4 lg:pl-40 sm:flex sm:flex-col  sm:justify-center">
                <div className="max-w-[650px] 2xl:max-w-[650px] mx-auto mb-8 3xl:mb-14 lg:ml-0 
                     text-center lg:text-left realtive ">{/*pl-10*/}

                    <h2 className="text-blue-500 font-extrabold text-[34px] interFont">Web Application Development</h2>

                    <div className="relative">
                        <p className="text-2xl text-[#525167]">
                          Experience the difference with RootPointers
                           <br/>
                            your trusted partner for web application development.
                            </p>
                       
                    </div>
                </div>
                <div className="">
                    <div className="portion-1 relative lg:w-[60%] flex flex-col sm:flex-row sm:justify-between z-[2] lg:p-16  flex-wrap "> {/*pl-10*/}
                        <div className="sm:w-[47%]  sm:flex-[0_0_auto] shadow-[1px_2px_12px_#ccccccbd] bg-white  p-3 rounded-[10px]
                    lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] mb-4 lg:mb-8 xl:mb-10">
                            <div className="h-full">
                                <div className="h-[70px] w-[70px]  flex items-center justify-center bg-[#d7e7ff] rounded-full mb-3">
                                    <img src={frontend_application} className="h-[30px] w-[30px]" height="32" width="32" alt="leadership"/>
                                </div>
                                <h3 className=" heading-3 text-[#525167] text-xl font-bold">Frontend</h3>
                                <ul className="text-sm 2xl:text-md ul-after">
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167] ">HTML5, CSS </li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">React.js, Vue.js</li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Angular.js</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:w-[47%] sm:flex-[0_0_auto] shadow-[1px_2px_12px_#ccccccbd]  bg-white 
                    p-3 rounded-[10px]
                    lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] mb-4 lg:mb-8 xl:mb-10">
                            <div className="h-full">
                                <div className="h-[70px] w-[70px]  flex items-center justify-center bg-[#d7e7ff] rounded-full mb-3">
                                    <img src={backend_application} className="h-[30px] w-[30px]" height="32" width="32" alt="leadership"/>
                                </div>
                                <h3 className=" heading-3 text-[#525167] text-xl font-bold">Backend</h3>
                                <ul className="text-sm 2xl:text-md ul-after">
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">java: Spring Boot</li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Python: Django, Flask </li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">.NET: Core, MVC</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:w-[47%]  sm:flex-[0_0_auto]  bg-white shadow-[1px_2px_12px_#ccccccbd] p-3 rounded-[10px]
                    lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] mb-4 lg:mb-8 xl:mb-10">
                            <div className="h-full">
                                <div className="h-[70px] w-[70px]  flex items-center justify-center bg-[#d7e7ff] rounded-full mb-3">
                                    <img src={cms_application} className="h-[30px] w-[30px]" height="32" width="32" alt="leadership"/>
                                </div>
                                <h3 className=" heading-3 text-[#525167] text-xl font-bold">CMS</h3>
                                <ul className="text-sm 2xl:text-md ul-after">
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">WordPress </li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Drupal</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:w-[47%]  sm:flex-[0_0_auto]  bg-white shadow-[1px_2px_12px_#ccccccbd] p-3 rounded-[10px]
                    lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] mb-4 lg:mb-8 xl:mb-10">
                            <div className="h-full">
                                <div className="h-[70px] w-[70px]  flex items-center justify-center bg-[#d7e7ff] rounded-full mb-3">
                                    <img src={e_commerce} className="h-[30px] w-[30px]" height="32" width="32" alt="leadership"/>
                                </div>
                                <h3 className=" heading-3  text-[#525167] text-xl font-bold">E-commerce</h3>
                                <ul className="text-sm 2xl:text-md ul-after">
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Magento </li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">WooCommerce</li>
                                    <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Shopify</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hidden lg:block absolute bottom-0 right-0  max-w-[550px] pb-20 lg:max-w-[550px] 
            
             2xl:max-w-[550px] 3xl:max-w-[100%] 2xl:bottom-[3rem]">
              
                <img src={web_dev} width="572" height="674"/>
            </div>

        </section>
        {/* section3 */}
        <section className=" bg-service-bg py-[2rem] ">
            <div className="container mt-6">
                <div className="flex justify-center lg:justify-between items-center flex-wrap ">

                    <div className=" lg:w-[25%]  p-3 rounded-[10px]
                    lg:p-0 lg:rounded-[0] mb-4 lg:mb-0">
                        <div className="flex flex-col items-center h-full text-sm text-center ">
                            <img src={discovery_and_analysis} className="h-[90px] w-[90px] mb-3" height="90" width="90" alt="leadership"/>
                            <h3 className="text-xl text-[#555555] pb-3">Discovery and Analysis
                            </h3>
                            <p>Discover insights and analyze data
                                to drive informed decisions.</p>
                        </div>
                    </div>
                    <div className=" lg:w-[25%]  p-3 rounded-[10px]
                    lg:p-0 lg:rounded-[0] mb-4 lg:mb-0">
                        <div className="flex flex-col items-center h-full text-sm text-center ">
                            <img src={planning_and_design} className="h-[90px] w-[90px] mb-3" height="90" width="90" alt="leadership"/>
                            <h3 className="text-xl text-[#555555] pb-3">Planning and Design
                            </h3>
                            <p>Strategic Planning and Creative
                                Design Where Ideas Take Shape</p>
                        </div>
                    </div>
                    <div className=" lg:w-[25%]  p-3 rounded-[10px]
                    lg:p-0 lg:rounded-[0] mb-4 lg:mb-0">
                        <div className="flex flex-col items-center h-full text-sm text-center ">
                            <img src={development_image} className="h-[90px] w-[90px] mb-3" height="90" width="90" alt="leadership"/>
                            <h3 className="text-xl text-[#555555] pb-3">Development </h3>
                            <p>Transforming Concepts
                                into Digital Reality</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* section 4 */}
        <section className="bg-white py-[4rem] 2xl:p-[6rem_0_10rem_0] relative">
            <div className="container z-[2]">
                <div className="mb-8 lg:mb-[4rem] 3xl:mb-[5.5rem] 4xl:mb-[7rem] md:max-w-[85%] lg:max-w-[90%]">
                    <h2 className="text-blue-500 font-extrabold text-[34px] interFont">Mobile Application Development</h2>
                    <p className="text-2xl text-[#525167]">RootPointers specializes in delivering high-quality,
                        user-friendly mobile
                        applications
                        that drive success for businesses across industries.</p>
                    <p className="text-base 2xl:!text-[18px] text-[#525167] pt-4">Our app development services are tailored
                        to transform your ideas
                        into functional and visually
                        appealing mobile and web applications.
                        Our experienced team specializes in iOS, Android, and web-based app development, catering to a
                        wide range of needs, from
                        customer-facing apps to internal business tools.</p>
                </div>
                <div className="lg:flex lg:px-16">
                    <div className="relative flex flex-col sm:flex-row sm:justify-between lg:flex-col z-[2] 
                         flex-wrap mx-auto lg:m-0 lg:w-[45%] flex-[0_0_auto]">
                        <div className="sm:w-[47%] lg:w-full sm:flex-[0_0_auto]  bg-white shadow-[1px_2px_12px_#ccccccbd] p-3 rounded-[10px]
                     lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] m-4 mb-4 lg:mb-8">
                            <div className="h-full md:flex md:gap-4 items-center">
                                <div className="h-[90px] w-[90px]  flex items-center justify-center bg-service2-bg rounded-full mb-3 imagee">
                                    <img src={ios_apple_image} className="h-[45px] w-[45px]" height="40" width="40" alt="leadership"/>
                                </div>
                                <div>
                                    <h3 className=" heading- text-xl  text-[#525167] font-bold !mb-4">iOS</h3>
                                    <ul className="text-sm 2xl:text-md ul-after">
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Swift</li>
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Objective-C</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="sm:w-[47%] lg:w-full m-4 sm:flex-[0_0_auto]  bg-white shadow-[1px_2px_12px_#ccccccbd]   p-3 rounded-[10px]
                          lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] mb-4 lg:mb-8">
                            <div className="h-full md:flex md:gap-4 items-center">
                                <div className="h-[90px] w-[90px]  flex items-center justify-center bg-service2-bg rounded-full mb-3 imagee">
                                    <img src={android_logo} className="h-[45px] w-[45px]" height="40" width="40" alt="leadership"/>
                                </div>
                                <div>
                                    <h3 className=" heading-3  text-[#525167] font-bold !mb-4">Android</h3>
                                    <ul className="text-sm 2xl:text-md ul-after">
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Java</li>
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Kotlin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-[47%] m-4 lg:w-full sm:flex-[0_0_auto]  bg-white shadow-[1px_2px_12px_#ccccccbd] p-3 rounded-[10px]
                          lg:bg-[transparent] lg:shadow-[none] lg:p-0 lg:rounded-[0] mb-4 lg:mb-8">
                            <div className="h-full md:flex md:gap-4 items-center">
                                <div className="h-[90px] w-[90px]  flex items-center justify-center bg-service2-bg rounded-full mb-10 imagee">
                                    <img src={cross_platform_img} className="h-[45px] w-[45px]" height="40" width="40" alt="leadership"/>
                                </div>
                                <div>
                                    <h3 className=" heading-3  text-[#525167] font-bold !mb-4 mt-3">Cross-Platform</h3>
                                    <ul className="text-sm 2xl:text-md ul-after">
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">React Native</li>
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">React.js, Vue.js</li>
                                        <li className="pl-6 mb-2 list-icon-services text-base text-[#525167]">Angular.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden lg:block w-[50%] ">
                        <img src={mobile_application} className="w-full" height="480" width="480" alt="mobile-application"/>
                    </div>
                </div>
            </div>
            {/* <div className="">
                <span className="traingles absolute left-0 -mt-26 "><svg xmlns="http://www.w3.org/2000/svg" width="150" height="230" viewBox="0 0 155 290" fill="none">
                        <path d="M142.33 115.011C147.663 118.09 147.663 125.788 142.33 128.867L-15.7746 220.149C-21.1079 223.228 -27.7746 219.379 -27.7746 213.221L-27.7746 30.657C-27.7746 24.4986 -21.1079 20.6496 -15.7746 23.7288L142.33 115.011Z" fill="url(#paint0_linear_2625_1024)" fill-opacity="0.33"></path>
                        <path d="M123.994 160.741C129.327 163.82 129.327 171.518 123.994 174.597L-34.1105 265.879C-39.4439 268.958 -46.1105 265.109 -46.1105 258.951L-46.1105 76.3874C-46.1105 70.229 -39.4438 66.38 -34.1105 69.4592L123.994 160.741Z" fill="url(#paint1_linear_2625_1024)" fill-opacity="0.22"></path>
                        <defs>
                            <linearGradient id="paint0_linear_2625_1024" x1="171.105" y1="111.037" x2="-23.0975" y2="103.715" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8C83C0"></stop>
                                <stop offset="1" stop-color="#4A83E7"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_2625_1024" x1="250.733" y1="139.991" x2="-41.4335" y2="149.446" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BA27BD"></stop>
                                <stop offset="1" stop-color="#4A83E7"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>

            <span className="circle-right absolute bottom-[30%] right-0 "><img src="Static/Images/circlr-right-design.svg" alt="double triangle"/>
            </span> */}
        </section>
    </main>
  )
}

export default Services
