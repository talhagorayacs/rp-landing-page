import React from "react";
import triangles from "../assets/left-triangles.png";
import arrows from "../assets/big=rotate-arrow.png";
import bg from "../assets/hero-background.svg";
import hero from "../assets/hero-footer.svg";
import c_logo from '../assets/companieslogos.svg'
import h_c from '../assets/half-circle.png'
import c_a from '../assets/curly-arrow.png'
import usps from '../assets/usps.png'
import right_short_triangles from '../assets/right-short-triangles.png'
import left_short_triangles from '../assets/left-short-triangles.png'
import Slider from './SliderComp'
import Home_QnAs from "./Home_QnAs";
import Home_Form from '../Home_Form'
function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <main className="overflow-hidden" >
      {/* section 1 */}
      <section
  data-aos="fade-right"
  className="pt-32 sm:pt-36 md:pt-40 lg:pt-28 m-0 relative flex flex-col justify-center lg:justify-start"
>
  {/* Decorative Triangles */}
  <div className="absolute top-24 sm:top-48 md:top-72 lg:top-80 xl:top-[30rem]">
    <img src={triangles} alt="Decorative triangles" className="w-12 sm:w-16 md:w-20 lg:w-24" />
  </div>

  {/* Main Content */}
  <div className="container lg:pt-28 mx-auto px-4 lg:flex lg:items-center">
    <div className="lg:w-2/4 text-left lg:ml-36">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#4A83E7]">
        Unlock the Power of <br />
        Innovation with Our Expertise
      </h1>
      <div className="mt-4">
        <div className="text-base sm:text-lg md:text-xl text-[#555555] lg:text-[20px] xl:text-xxl py-1 lg:mb-3">
          ONE-STOP IT SOLUTION
        </div>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-[#555555] lg:text-xl pt-1">
        We take pride in creating bespoke projects and thriving as a versatile hybrid model company
      </p>
      <div>
        <button
          onClick={() => handleMenuItemClick('learn-more')}
          className="rounded-3xl bg-blue-500 text-white px-6 mt-7 py-3 text-sm sm:text-base md:text-lg"
        >
          Learn More
        </button>
        <div className="mt-[15rem] lg:mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#4A83E7] font-semibold mb-5">
            <span className="text-[#555555]">Models</span> <span className="text-[#4A83E7]"> We Offer </span>
          </h2>
          <p id="modeloffer" className="text-lg text-[#555555] lg:text-lg font-medium xl:text-lg leading-[2.6]">
            By taking full responsibility for the project from start to finish, we <br />
            ensure timely delivery and adherence to the highest quality standards.
          </p>
        </div>
        <img src={arrows} alt="Curly arrows" className="mt-4 pl-32 left-3 top-7 w-16 sm:w-20 md:w-24 lg:w-28" />
      </div>
    </div>

    {/* Background Image */}
    <div className="hidden lg:block absolute right-0 top-[25%]">
      <img src={bg} alt="Background Decoration" className="w-full h-auto max-w-xs xl:max-w-md" />
    </div>
  </div>
</section>


      {/* section 2 */}
      <section id="learn-more" className="relative h-full w-screen">
  <div className="pb-16">
    <div className="w-full h-auto lg:h-screen flex flex-col lg:flex-row px-4 pt-8 mx-auto">
      {/* Project-Based Outsourcing */}
      <div data-aos="fade-up" className="lg:max-w-[350px] xl:max-w-[470px] lg:mx-auto relative mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-[30px] lg:text-3xl 2xl:text-[40px] text-[#4A83E7] pb-4 pt-2">
          Projects based Out-Sourcing
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg text-[#555555]">
          At Rootpointers, we help you to optimize your business operations, and focus
          on your core competencies through our project-based outsourcing model.
        </p>
        <a href="#" className="mt-5 text-white text-sm sm:text-base md:text-lg bg-[#4A83E7] inline-block rounded-3xl px-4 py-2 lg:px-6 lg:py-[6px] hover:bg-blue-700 hover:cursor-pointer">
          View More
        </a>
      </div>

      {/* Dedicated Team Out-Staffing */}
      <div data-aos="fade-up" className="lg:max-w-[350px] xl:max-w-[470px] lg:mx-auto relative mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-[30px] lg:text-3xl 2xl:text-[40px] text-[#4A83E7]">
          Dedicated Team Out-Staffing
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg text-[#555555] mt-4 pb-4 pt-2">
          Dedicated team out-staffing: Your extended, dedicated remote
          team for scalable, long-term project support.
        </p>
        <a href="#" className="mt-5 text-white text-sm sm:text-base md:text-lg bg-[#4A83E7] inline-block rounded-3xl px-4 py-2 lg:px-6 lg:py-[6px] hover:bg-blue-700 hover:cursor-pointer">
          View More
        </a>
      </div>
    </div>
  </div>
  
  {/* section 2 Background Image */}
  <div className=" sm:mt-5 bottom-0 left-0 w-full">
    <img className="w-full h-auto" src={hero} alt="Background Image" />
  </div>
</section>

          {/* section 3 */}
      <section className="">
        <div className="container flex lg:flex-row flex-col p-5 pb-8 lg:mx-auto">
          <div class="lg:w-[50%]">
            <div data-aos="fade-up" className="my-7 lg:my-16 max-w-[550px] lg:max-w-[550px] mx-auto lg:ml-0 aos-init aos-animate">
              <h2 class="   text-4xl lg:text-4xl lg:leading-[1.4] font-semibold mb-8">
                <span class="text-[#252525]"> Services That Lead The Way To Better </span>
                <span class="text-[#4A83E7]">Business</span>
              </h2>
              <p class="text-[#555555] text-sm lg:text-lg leading-[1.6]">
                Rootpointers delivers comprehensive IT solutions, providing a hassle-free experience from start
                to deployment and beyond. As a one-stop provider, we offer mobile, web, and game services,
                with our experienced team creating tailored, cutting-edge solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="md:max-w-[550px] md:mx-auto lg:w-[60%] lg:flex flex-wrap lg:py-16 xl:gap-8">
            {/* svg1 */}
            <div className="user-experience flex items-center lg:justify-center lg:w-2/4 xl:max-w-[250px]">
              <div class="logo mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="79" viewBox="0 0 80 79" fill="none">
                  <path d="M79.6836 39.6715L61.6965 70.826L25.7223 70.826L7.73517 39.6715L25.7223 8.51689L61.6965 8.51689L79.6836 39.6715Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.8701 36.7291L54.883 67.8837L18.9088 67.8837L0.921698 36.7291L18.9088 5.57451L54.883 5.57451L72.8701 36.7291Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.8701 42.7691L54.883 73.9237L18.9088 73.9237L0.921698 42.7691L18.9088 11.6145L54.883 11.6146L72.8701 42.7691Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M75.0771 39.6715L57.09 70.826L21.1158 70.826L3.12873 39.6715L21.1158 8.51689L57.09 8.51689L75.0771 39.6715Z" fill="url(#paint0_linear_1474_2498)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5135 52.9009H45.1672C45.4715 52.9009 45.7184 53.1478 45.7184 53.4521C45.7184 53.7564 45.4715 54.0033 45.1672 54.0033H33.0399C32.7356 54.0033 32.4887 53.7564 32.4887 53.4521C32.4887 53.1478 32.7356 52.9009 33.0399 52.9009H34.6936V50.6959H43.5135V52.9009ZM56.7432 46.286V28.6463C56.7432 26.8195 55.2626 25.3389 53.4358 25.3389H24.7713C22.9445 25.3389 21.4639 26.8195 21.4639 28.6463V46.286C21.4639 48.1128 22.9445 49.5934 24.7713 49.5934H53.4358C55.2626 49.5934 56.7432 48.1128 56.7432 46.286ZM32.3871 32.1426C32.2778 32.3927 32.0282 32.5675 31.7378 32.5675C31.3467 32.5675 31.0296 32.2504 31.0296 31.8593C31.0296 31.4681 31.3467 31.1511 31.7378 31.1511C32.0282 31.1511 32.2778 31.3259 32.3871 31.576H38.3952V31.4344C38.3952 31.2779 38.5221 31.1511 38.6785 31.1511H39.5284C39.6849 31.1511 39.8117 31.2779 39.8117 31.4344V31.576H45.8198C45.9291 31.3259 46.1787 31.1511 46.4691 31.1511C46.8602 31.1511 47.1773 31.4681 47.1773 31.8593C47.1773 32.2504 46.8602 32.5675 46.4691 32.5675C46.1787 32.5675 45.9291 32.3927 45.8198 32.1426H41.9921C44.5725 33.1995 46.4508 35.6282 46.7174 38.5167H46.894C47.0505 38.5167 47.1773 38.6436 47.1773 38.8V39.6499C47.1773 39.8063 47.0505 39.9331 46.894 39.9331H46.0441C45.8877 39.9331 45.7609 39.8063 45.7609 39.6499V38.8C45.7609 38.6436 45.8877 38.5167 46.0441 38.5167H46.1484C45.8875 35.9027 44.2004 33.7024 41.8785 32.7092H41.8736C41.2292 32.434 40.5366 32.2508 39.8117 32.178V32.2842C39.8117 32.4407 39.6848 32.5675 39.5284 32.5675H38.6785C38.5221 32.5675 38.3952 32.4407 38.3952 32.2842V32.178C37.6703 32.2508 36.9777 32.434 36.3333 32.7092H36.3285C34.0065 33.7024 32.3194 35.9027 32.0585 38.5168H32.1628C32.3193 38.5168 32.446 38.6436 32.446 38.8V39.6499C32.446 39.8063 32.3193 39.9332 32.1628 39.9332H31.3128C31.1563 39.9332 31.0296 39.8063 31.0296 39.6499V38.8C31.0296 38.6436 31.1563 38.5168 31.3128 38.5168H31.4895C31.7561 35.6283 33.6344 33.1995 36.2148 32.1426H32.3871ZM31.8794 39.0833V39.3666H31.5962V39.0833H31.8794ZM46.6107 39.0833V39.3666H46.3274V39.0833H46.6107ZM39.67 33.2758H39.7384C39.8655 33.2758 39.977 33.3603 40.0113 33.4827L41.8719 40.1277C41.9127 40.2735 41.8944 40.4283 41.8192 40.5597C41.5907 40.9597 41.0576 41.9255 40.486 43.1911L40.4529 43.2648C40.3811 43.4246 40.3089 43.5891 40.2367 43.7577H38.8201H38.8201L38.8156 43.7577H40.5199C40.6764 43.7577 40.8032 43.8845 40.8032 44.041V44.8908C40.8032 45.0473 40.6764 45.1741 40.5199 45.1741H37.687C37.5305 45.1741 37.4037 45.0473 37.4037 44.8908V44.041C37.4037 43.8845 37.5305 43.7577 37.687 43.7577L37.9703 43.7577C37.3098 42.2165 36.6493 41.0176 36.3877 40.5597C36.3126 40.4282 36.2942 40.2735 36.335 40.1277L38.1957 33.4827C38.2299 33.3603 38.3414 33.2758 38.4685 33.2758H38.5369C38.6933 33.2758 38.8202 33.4026 38.8202 33.5591V39.2229C38.8202 39.3284 38.7619 39.4262 38.6671 39.4726C38.3389 39.6335 38.1119 39.9678 38.1119 40.3581C38.1119 40.9828 38.6896 41.4725 39.3399 41.3223C39.71 41.2368 40.0044 40.9273 40.0761 40.5544C40.0995 40.4323 40.1006 40.3136 40.0826 40.2014L40.0829 40.2069C40.0382 39.9178 39.8679 39.6714 39.6295 39.5224C39.6014 39.5048 39.5723 39.4886 39.5424 39.4739C39.4468 39.4267 39.3868 39.3295 39.3868 39.2229V33.5591C39.3868 33.4026 39.5136 33.2758 39.67 33.2758Z" fill="white"></path>
                  <defs>
                    <linearGradient id="paint0_linear_1474_2498" x1="75.0771" y1="39.6715" x2="3.12873" y2="39.6715" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4D9AE1"></stop>
                      <stop offset="1" stop-color="#A2C3FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="text">
                <h2 class=" text-base uppercase mb-2 text-[#609FFF] font-extrabold">
                  User Experience
                </h2>
                <p class="text-[12px] text-[#414141]">
                  Rootpointers  prioritizes seamless navigation, intuitive design for an exceptional user experience.
                </p>
              </div>
            </div>

            {/* svg2 */}

            <div className="web-development flex items-center lg:justify-center lg:w-2/4 xl:max-w-[250px]">
              <div className="logo mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="78" viewBox="0 0 80 78" fill="none">
                  <path d="M79.2314 38.9166L61.2443 70.0712L25.2701 70.0712L7.28303 38.9166L25.2701 7.76201L61.2443 7.76201L79.2314 38.9166Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.417 35.9742L54.4299 67.1288L18.4557 67.1288L0.468573 35.9742L18.4557 4.81963L54.4299 4.81963L72.417 35.9742Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.417 42.0142L54.4299 73.1688L18.4557 73.1688L0.468573 42.0142L18.4557 10.8597L54.4299 10.8597L72.417 42.0142Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M74.624 38.9166L56.6369 70.0712L20.6627 70.0712L2.6756 38.9166L20.6627 7.76201L56.6369 7.76201L74.624 38.9166Z" fill="url(#paint0_linear_1474_2512)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M44.2596 51.146H45.9133C46.2176 51.146 46.4645 51.3929 46.4645 51.6972C46.4645 52.0015 46.2176 52.2485 45.9133 52.2485H33.786C33.4817 52.2485 33.2348 52.0015 33.2348 51.6972C33.2348 51.3929 33.4817 51.146 33.786 51.146H35.4397V48.941H44.2596V51.146ZM57.4893 44.5311V26.8914C57.4893 25.0646 56.0087 23.584 54.1819 23.584H25.5174C23.6906 23.584 22.21 25.0646 22.21 26.8914V44.5311C22.21 46.3579 23.6906 47.8385 25.5174 47.8385H54.1819C56.0087 47.8385 57.4893 46.3579 57.4893 44.5311ZM36.8765 32.643L30.4926 35.607V36.7507L36.8778 39.7177V38.3082L32.0488 36.1934V36.1669L36.8765 34.0525V32.643ZM37.8618 40.2484L40.7079 30.6056H42.0509L39.2048 40.2484H37.8618ZM42.8236 39.7164L49.2075 36.7903V35.5691L42.8236 32.643V34.0508L47.7579 36.1669V36.1921L42.8236 38.3069V39.7164Z" fill="white"></path>
                  <defs>
                    <linearGradient id="paint0_linear_1474_2512" x1="74.624" y1="38.9166" x2="2.6756" y2="38.9166" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4D9AE1"></stop>
                      <stop offset="1" stop-color="#A2C3FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text">
                <h2 className="uppercase mb-2 text-[#609FFF] font-extrabold">
                  Web Development
                </h2>
                <p className="text-[12px] text-[#414141]">
                  At Rootpointers, we craft exceptional web applications that elevate your business and engage
                  your target audience.
                </p>
              </div>
            </div>
            {/* svg3 */}
            <div className="app-developmente flex items-center lg:justify-center lg:w-2/4 xl:max-w-[250px]">
              <div className="logo mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="79" viewBox="0 0 80 79" fill="none">
                  <path d="M79.6846 39.8736L61.6975 71.0282L25.7233 71.0282L7.73615 39.8736L25.7233 8.71904L61.6975 8.71904L79.6846 39.8736Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.8701 36.9312L54.883 68.0858L18.9088 68.0858L0.921698 36.9312L18.9088 5.77666L54.883 5.77666L72.8701 36.9312Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.8701 42.9713L54.883 74.1259L18.9088 74.1259L0.921698 42.9713L18.9088 11.8167L54.883 11.8167L72.8701 42.9713Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M75.0771 39.8736L57.09 71.0282L21.1158 71.0282L3.12873 39.8736L21.1158 8.71904L57.09 8.71904L75.0771 39.8736Z" fill="url(#paint0_linear_1474_2524)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5225 25.4541C26.5225 23.7972 27.8656 22.4541 29.5225 22.4541H44.2687C45.9255 22.4541 47.2687 23.7972 47.2687 25.4541V54.2928C47.2687 55.9496 45.9255 57.2928 44.2687 57.2928H29.5225C27.8656 57.2928 26.5225 55.9496 26.5225 54.2928V25.4541ZM31.1604 55.8808C31.1604 55.694 31.3118 55.5425 31.4986 55.5425H42.2918C42.4786 55.5425 42.63 55.694 42.63 55.8808C42.63 56.0676 42.4786 56.219 42.2918 56.219H31.4986C31.3118 56.219 31.1604 56.0676 31.1604 55.8808ZM34.8716 37.9788L30.5277 39.9957V40.7739L34.8725 42.7929V41.8337L31.5866 40.3947V40.3767L34.8716 38.938V37.9788ZM35.5428 43.1541L37.4794 36.5926H38.3932L36.4566 43.1541H35.5428ZM38.9181 42.792L43.2621 40.8009V39.9699L38.9181 37.9788V38.9368L42.2757 40.3767V40.3938L38.9181 41.8328V42.792ZM32.719 24.5236C32.719 24.1013 33.0614 23.7589 33.4837 23.7589H33.5157C33.9381 23.7589 34.2805 24.1013 34.2805 24.5236C34.2805 24.946 33.9381 25.2884 33.5157 25.2884H33.4837C33.0614 25.2884 32.719 24.946 32.719 24.5236ZM35.4381 23.7589C35.0158 23.7589 34.6734 24.1013 34.6734 24.5236C34.6734 24.946 35.0158 25.2884 35.4381 25.2884H40.2068C40.6292 25.2884 40.9716 24.946 40.9716 24.5236C40.9716 24.1013 40.6292 23.7589 40.2068 23.7589H35.4381Z" fill="white"></path>
                  <defs>
                    <linearGradient id="paint0_linear_1474_2524" x1="75.0771" y1="39.8736" x2="3.12873" y2="39.8736" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4D9AE1"></stop>
                      <stop offset="1" stop-color="#A2C3FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text">
                <h2 className="uppercase mb-2 text-[#609FFF] font-extrabold">
                  App<br /> Development
                </h2>
                <p className="text-[12px] text-[#414141]">
                  Transform your ideas into powerful and innovative mobile experiences with Rootpointers, crafting digital excellence.
                </p>
              </div>
            </div>

            {/* sccg4 */}

            <div className="game-development flex items-center lg:justify-center lg:w-2/4  xl:max-w-[250px]">
              <div className="logo mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="79" viewBox="0 0 80 79" fill="none">
                  <path d="M79.2305 39.8736L61.2434 71.0282L25.2692 71.0282L7.28205 39.8736L25.2692 8.71904L61.2434 8.71904L79.2305 39.8736Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.417 36.9312L54.4299 68.0858L18.4557 68.0858L0.468573 36.9312L18.4557 5.77666L54.4299 5.77666L72.417 36.9312Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M72.417 42.9713L54.4299 74.1259L18.4557 74.1259L0.468573 42.9713L18.4557 11.8167L54.4299 11.8167L72.417 42.9713Z" fill="#4A83E7" fill-opacity="0.25"></path>
                  <path d="M74.624 39.8736L56.6369 71.0282L20.6627 71.0282L2.6756 39.8736L20.6627 8.71904L56.6369 8.71904L74.624 39.8736Z" fill="url(#paint0_linear_1474_2540)"></path>
                  <path d="M58.5232 46.2438L56.1987 36.3587C55.0214 31.965 51.04 28.9102 46.4911 28.9102H30.808C26.2591 28.9102 22.2778 31.9649 21.1005 36.3587L18.776 46.2438C18.181 49.0794 19.818 51.9085 22.5741 52.8049L22.71 52.8485C25.2608 53.6789 28.0437 52.6087 29.3826 50.2842L31.4051 47.2935C31.9129 46.4119 32.853 45.8681 33.8693 45.8681H43.4301C44.4464 45.8681 45.3865 46.4119 45.8943 47.2935L47.9167 50.2842C49.2557 52.6087 52.0391 53.6789 54.59 52.8485L54.7253 52.8049C57.4812 51.9085 59.1183 49.0794 58.5232 46.2438ZM33.5763 39.6194H30.3201V42.8761H27.4852V39.6194H24.229V36.7857H27.4852V33.5302H30.3201V36.7857H33.5763V39.6194Z" fill="white"></path>
                  <path d="M39.3135 37.934L44.07 35.7256V36.7758L40.4729 38.3511V38.3709L44.0709 39.9466V40.9968L39.3135 38.7861V37.934Z" fill="#5AA1E6"></path>
                  <path d="M44.8047 41.3917L46.9252 34.207H47.9259L45.8053 41.3917H44.8047Z" fill="#5AA1E6"></path>
                  <path d="M53.2575 38.8156L48.501 40.9958V39.9456L52.1774 38.3699V38.3511L48.501 36.7745V35.7256L53.2575 37.9058V38.8156Z" fill="#5AA1E6"></path>
                  <defs>
                    <linearGradient id="paint0_linear_1474_2540" x1="74.624" y1="39.8736" x2="2.6756" y2="39.8736" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4D9AE1"></stop>
                      <stop offset="1" stop-color="#A2C3FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text ">
                <div className="   uppercase mb-2 text-[#609FFF] font-semibold">
                  Game Development
                </div>
                <p className="text-[12px] text-[#414141]">
                  Bring your game ideas to life with Rootpointers, your partner for captivating and immersive game
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="bg-partner bg-no-repeat bg-cover bg-top relative">
          <div className="container p-4 py-12 2xl:py-16 mx-auto">
            <div data-aos="fade-right" className="text max-w-[544px] lg:max-w-[800px] 2xl:mt-2 2xl:pb-4">
              <h2 className="text-2xl lg:text-[40px] text-[#4A83E7] font-semibold mb-2 lg:mb-5">
                Companies <span>We Work With</span>
              </h2>
              <p className="text-[#555555] text-sm lg:text-lg font-medium ">
                Rootpointers collaborative efforts with a wide spectrum of companies elevate the user experience on our website. Our dynamic and innovative features are tailored to meet your unique needs, showcasing the collective expertise and capabilities of our partnerships.
              </p>
            </div>
          </div>
          <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mx-auto 2xl:mr-96 mt-8 md:mt-24 lg:mt-36">
            <img src={c_logo} width="100%" />
          </div>
          <div className="absolute hidden xl:block xl:top-32 xl:right-48 2xl:top-40 2xl:right-96">
            <img src={c_a} />
          </div>
          <div className="circle-logo absolute bottom-0 hidden lg:block lg:right-0 xl:right-20 2xl:right-40">
            <img src={h_c} />
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="lg:flex ">
        <div className="poster hidden lg:block w-2/4 lg:pt-36 xl:pt-28">
          <img src={usps} />
        </div>
        <div className="container p-4 py-16 lg:py-30 mx-auto lg:w-2/4 lg:pr-6 xl:pr-20">
          <div data-aos="fade-up" className="content aos-init aos-animate">
            <h2 className="text-2xl lg:text-[40px] lg:leading-[3rem] font-semibold mb-2 max-w-[400px]">
              Unique <span className="text-[#4A83E7]"> Selling </span> Propositions
              (USPs)
            </h2>
            <ul className="pl-6 text-[#555555] lg:text-lg">
              <li className="list-icon pt-1">
                <span>
                  Flexibility to engage developers or teams from our roster or
                  via custom recruitment through our HR department, tailored to
                  your requirements.
                </span>
              </li >
              <li className="list-icon pt-1">
                <span>
                  Option for project-based or hourly work within dedicated
                  teams without long-term hiring commitments.
                </span>
              </li >
              <li className="list-icon pt-1">
                <span>
                  Comprehensive after-sales support for every project we
                  develop, offering various levels of assistance, from a few
                  hours to round-the-clock support.
                </span>
              </li>
              <li className="list-icon pt-1">
                <span>
                  A 45-day complimentary guarantee period for all project-based
                  work we undertake.
                </span>
              </li>
              <li className="list-icon pt-1">
                <span>
                  A comprehensive IT solution encompassing web, mobile,
                  desktop, and customer representative services.
                </span>
              </li>
              <li className="list-icon pt-1">
                <span>
                  Streamlined development process featuring a dedicated team
                  under the supervision of a single project manager.
                </span>
              </li>
            </ul>
            <a href="#">
              <button className="px-6 lg:py-1 lg:px-8 rounded-3xl hover:bg-blue-700 hover:cursor-pointer bg-[#4A83E7] text-white mt-10 text-sm lg:text-md lg:font-semibold">
                Contact us
              </button>
            </a>
          </div>
        </div>
      </section>

      {/*section 5 */}
      <section className="years-of-experience mt-10">
        <div className="section-footer lg:flex relative">
          <div className="left-arrow absolute -top-8 left-0t-0 hidden xl:block">
            <img src={left_short_triangles} />
          </div>

          <div className="lg:w-2/4 max-h-[256px] bg-custom-gradient2">
            <div data-aos="fade-right" data-aos-duration="1000" className="text text-[#4A83E7] flex items-center py-20 justify-center">
              <h2 className="text-6xl sm:text-8xl font-bold">75+</h2>
              <p className="text-xl sm:text-2xl font-semibold pt-3 ml-2">
                RESOURCE COUNT <span className="block font-normal">Employees</span>
              </p>
            </div>
          </div>
           {/* problematic div*/}
          <div className="lg:w-2/4 bg-custom-gradient1 max-h-[256px] my-4  lg:my-0">
            <div data-aos="fade-left" data-aos-duration="1000" className="text text-[#4A83E7] flex items-center justify-center flg:justify-normal py-20 pl-1">
              <h2 className="text-6xl sm:text-8xl font-bold">8+</h2>
              <p className="text-xl sm:text-2xl font-semibold pt-3 ml-2">
                YEARS OF EXPERIENCE<span className="block font-normal">In Digital World</span>
              </p>
            </div>
          </div>
          <div className="right-arrow absolute bottom-[8.5rem] right-0 hidden lg:block">
            <img src={right_short_triangles} />
          </div>
        </div>
      </section>
      <Slider />
      <Home_QnAs />
      <Home_Form/>  
        </main>
  );
}
export default Hero