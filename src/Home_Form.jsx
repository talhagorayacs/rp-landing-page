import React from 'react'
import bubble from '../src/assets/big-bubble.png'
function Home_Form() {
  return (
    <>
    <div className="container mx-auto p-4 pt-16 pb-24">
          <div data-aos="fade-up" data-aos-duration="1200" className="heading max-w-[544px] lg:max-w-[1000px] 2xl:mt-12 2xl:pb-4 mx-auto text-center mb-20 aos-init aos-animate">
            <h2 className="text-2xl lg:text-[40px] text-primary lg:leading-10 font-bold mb-2 lg:mb-5">
              Get In<span className="text-[#4A83E7]"> Touch With US</span>
            </h2>
            <p className="text-[#746B6B] font-semibold lg:text-xl">
              We are here to find the best solution for your IT Problems
            </p>
          </div>
          <div className="contact-card rounded-3xl bg-[linear-gradient(256deg,_#9BB5F7_-66.11%,_#CEE8FF_53.27%,_#CEE8FF_53.27%);] lg:flex py-8 relative overflow-hidden">
            <div className="bubble absolute top-0">
              <img src={bubble} className="w-[400px]"/>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" className="content lg:w-2/4 aos-init aos-animate">
              <div className="max-w-[500px] lg:max-w-[550px] mx-auto p-6 mt-5">
                <h2 className="text-2xl lg:text-[40px] text-white leading-10 lg:leading-[4rem] font-bold lg:font-extrabold mb-10 lg:mb-20 relative z-[1] interFont">
                  <span className="lg:block interFont">Let’s discuss </span> on
                  something
                  <span className="text-[#24126A] interFont">Cool</span> together
                  
                </h2>
                <ul className="text-[#4A83E7] [&amp;>li]:py-3 [&amp;>li]:text-sm lg:[&amp;>li]:text-md">
                  <li>
                    <a href="mailto:hr@rootpointers.com" className="flex">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <g clip-path="url(#clip0_1474_2313)">
                            <path d="M0.732227 5.62547C0.883454 4.96283 1.25521 4.37119 1.78661 3.94743C2.31801 3.52367 2.97755 3.29292 3.65723 3.29297H21.6572C22.3369 3.29292 22.9964 3.52367 23.5278 3.94743C24.0592 4.37119 24.431 4.96283 24.5822 5.62547L12.6572 12.914L0.732227 5.62547ZM0.657227 7.33847V17.9945L9.36173 12.6575L0.657227 7.33847ZM10.7987 13.538L0.943727 19.5785C1.18722 20.0919 1.57152 20.5256 2.0519 20.8291C2.53228 21.1327 3.08899 21.2935 3.65723 21.293H21.6572C22.2254 21.2931 22.7819 21.1319 23.262 20.8281C23.7421 20.5243 24.1261 20.0904 24.3692 19.577L14.5142 13.5365L12.6572 14.672L10.7987 13.5365V13.538ZM15.9527 12.659L24.6572 17.9945V7.33847L15.9527 12.6575V12.659Z" fill="#4A83E7"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1474_2313">
                              <rect width="24" height="24" fill="white" transform="translate(0.657227 0.292969)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="ml-4">hr@rootpointers.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+92 3001055546" className="flex">
                      <span className='pt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <g clip-path="url(#clip0_1474_2316)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.48446 1.34167C3.74692 1.0796 4.06208 0.876309 4.40905 0.745256C4.75602 0.614204 5.12689 0.558388 5.49707 0.581506C5.86724 0.604624 6.22828 0.706149 6.55625 0.879354C6.88422 1.05256 7.17164 1.29349 7.39946 1.58617L10.092 5.04517C10.5855 5.67967 10.7595 6.50617 10.5645 7.28617L9.74396 10.5712C9.70154 10.7413 9.70383 10.9195 9.75061 11.0885C9.79739 11.2575 9.88708 11.4116 10.011 11.5357L13.6965 15.2212C13.8207 15.3453 13.975 15.4351 14.1443 15.4819C14.3136 15.5287 14.4921 15.5309 14.6625 15.4882L17.946 14.6677C18.3309 14.5714 18.7326 14.564 19.1209 14.6458C19.5091 14.7277 19.8737 14.8967 20.187 15.1402L23.646 17.8312C24.8895 18.7987 25.0035 20.6362 23.8905 21.7477L22.3395 23.2987C21.2295 24.4087 19.5705 24.8962 18.024 24.3517C14.0657 22.959 10.4719 20.6929 7.50896 17.7217C4.53789 14.7592 2.27187 11.1659 0.878956 7.20817C0.335956 5.66317 0.823456 4.00267 1.93346 2.89267L3.48446 1.34167Z" fill="#4A83E7"></path>
                          </g>
                          {/* <defs>
                            <clipPath id="clip0_1474_2316">
                              <rect width="24" height="24" fill="white" transform="translate(0.657227 0.575195)"></rect>
                            </clipPath>
                          </defs> */}
                        </svg>
                      </span>
                      
                      <span className=" pt-2 ml-4">+92 (0300) 1055546</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/RootPointers,+14+-+A+Commercial+Market,+13d+Canal+View+Main+Blvd,+Canal+View,+Lahore,+Punjab+53700,+Pakistan/@31.478811,74.25509,16z/data=!4m6!3m5!1s0x3919038e57da984d:0x4c6d952b6e6ab0b5!8m2!3d31.4788105!4d74.25509!16s%2Fg%2F11fqyj9hv8?hl=en&amp;gl=US" target="_blank" className="flex">
                      <span className='pt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none">
                          <path d="M12.4124 14.0752C13.2338 14.0752 13.9372 13.8008 14.5226 13.252C15.1071 12.7041 15.3993 12.0452 15.3993 11.2752C15.3993 10.5052 15.1071 9.84579 14.5226 9.297C13.9372 8.74913 13.2338 8.47519 12.4124 8.47519C11.591 8.47519 10.8881 8.74913 10.3037 9.297C9.71822 9.84579 9.42551 10.5052 9.42551 11.2752C9.42551 12.0452 9.71822 12.7041 10.3037 13.252C10.8881 13.8008 11.591 14.0752 12.4124 14.0752ZM12.4124 28.0752C8.40499 24.8785 5.41213 21.9091 3.43381 19.167C1.4545 16.4258 0.464844 13.8885 0.464844 11.5552C0.464844 8.05519 1.66607 5.26686 4.06852 3.1902C6.46998 1.11353 9.25127 0.0751953 12.4124 0.0751953C15.5735 0.0751953 18.3548 1.11353 20.7563 3.1902C23.1587 5.26686 24.3599 8.05519 24.3599 11.5552C24.3599 13.8885 23.3708 16.4258 21.3925 19.167C19.4132 21.9091 16.4198 24.8785 12.4124 28.0752Z" fill="#4A83E7"></path>
                        </svg>
                      </span>
                      <span className="ml-4 pt-2">Rootpointers</span>
                    </a>
                  </li>
                </ul>
                {/* <div className=" flex items-center mt-10 lg:mt-20 ">
                  
                <div className="socilmedia-links-first flex items-center gap-[1rem]">
                  <a href="https://www.facebook.com/rootpointers/" target="_blank" className="flex items-center justify-center h-[60px] w-[60px] rounded-full">
                    <svg className=" h-6 fill-lightblue">
                      <use xlink:href="#facebook"></use>
                    </svg>
                  </a>
                  <a href="https://pk.linkedin.com/company/rootpointers" target="_blank" className="flex items-center justify-center h-[60px] w-[60px] rounded-full">
                    <svg className="h-6 fill-lightblue">
                      <use xlink:href="#linkdin"></use>
                    </svg>
                  </a>
                
                
                  <a href="https://twitter.com/l_rootpointers" target="_blank" className="flex items-center justify-center h-[60px] w-[60px] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="h-[20px] w-[20px] fill-lightblue">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                  </a>
               
                  </div>
                </div>
                <ul className="flex items-center justify-between mt-10 lg:mt-20 max-w-[202px]">
                  <div className="">
                    <a href="https://www.facebook.com" className="text-[#4A83E7] hover:text-white ">
                      <i
                        className="fa-brands fa-facebook-f text-2xl hover:bg-[#4A83E7] rounded-full px-6 p-5 transition duration-300 ease-in-out"></i>
                    </a>
                  </div>
                  <div className="">
                    <a href="https://linkedin.com/" className="text-[#4A83E7] hover:text-white ">
                      <i
                        className="fa-brands fa-linkedin-in text-2xl  hover:bg-[#4A83E7] rounded-full px-5 p-5 transition duration-300 ease-in-out"></i>
                    </a>
                  </div>
                
                  <a href="#" className="flex items-center justify-center h-[44px] w-[44px] hover:bg-[#4A83E7] rounded-full transition duration-300 ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"  className="h-[20px] w-[20px] fill-lightblue" >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    </a>
       

                </ul>  */}
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1200" className="request-call m-6 lg:ml-0 lg:w-2/4 aos-init aos-animate">
              <div className="bg-white rounded-3xl p-6 max-w-[496px] mx-auto">
                <h2 className="text-[#2E0249] font-semibold text-lg m-2">
                  I'm interested in...
                </h2>
                <div className="flex flex-wrap">
                  <span className="hover:text-[white] transition-all border-2 m-1 rounded-md p-2 duration-500 ease-in-out hover:bg-[#4A83E7] text-[rgba(46,_2,_73,_0.30)]">UI/UX design</span>
                  <span className="hover:text-[white] transition-all border-2 m-1 rounded-md p-2 duration-500 ease-in-out hover:bg-[#4A83E7] text-[rgba(46,_2,_73,_0.30)]">Web design</span>
                  <span className="hover:text-[white] transition-all border-2 m-1 rounded-md p-2 duration-500 ease-in-out hover:bg-[#4A83E7] text-[rgba(46,_2,_73,_0.30)]">Web Develop</span>
                  <span className="hover:text-[white] transition-all border-2 m-1 rounded-md p-2 duration-500 ease-in-out hover:bg-[#4A83E7] text-[rgba(46,_2,_73,_0.30)]">Other</span>
                  <span className="hover:text-[white] transition-all border-2 m-1 rounded-md p-2 duration-500 ease-in-out hover:bg-[#4A83E7] text-[rgba(46,_2,_73,_0.30)]">Service</span>
                </div>
              
                <div className="info-inputs [&amp;>input]:w-full [&amp;>input]:my-3  lg:mt-4 [&amp;>input]:mx-2 [&amp;>input]:py-3">
                  <input className="p-4 pl-0 mt-5 w-full border-b-2" type="text" id="senderName" name="senderName" placeholder="Your name"/>
                
                  <input className=" mt-5 p-4 pl-0 w-full border-b-2" type="email" id="recipientEmail" name="recipientEmail" placeholder="Your email"/>
                
                  <input className=" mt-5 p-4 pl-0 w-full border-b-2" id="message" name="message" required="" type="text" placeholder="Your message"/>
                </div>
                <button id="yourButtonmessage" type="submit" className="send-button  lg:h-[60px] max-w-[200px] bg-[#4A83E7] text-white flex justify-center rounded-2xl items-center px-4 lg:px-5 py-1 lg:mt-16 mt-10 mx-auto lg:mx-0 hover:bg-blue-400">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" className="lg:h-[24px] lg:w-[25px]">
                      <path d="M24.4471 1.02847C24.5017 0.892169 24.515 0.742859 24.4855 0.599044C24.456 0.45523 24.385 0.323236 24.2812 0.219426C24.1774 0.115616 24.0454 0.0445561 23.9015 0.0150549C23.7577 -0.0144463 23.6084 -0.00109103 23.4721 0.053465L1.65162 8.78197H1.65012L0.972125 9.05196C0.84371 9.10319 0.731953 9.18891 0.649198 9.29966C0.566443 9.41041 0.515912 9.54188 0.503185 9.67955C0.490458 9.81721 0.516031 9.95572 0.57708 10.0798C0.638129 10.2038 0.732277 10.3086 0.849125 10.3825L1.46412 10.7725L1.46562 10.7755L8.95812 15.5425L13.7251 23.035L13.7281 23.038L14.1181 23.653C14.1923 23.7694 14.2971 23.863 14.421 23.9237C14.545 23.9844 14.6833 24.0097 14.8207 23.9968C14.9581 23.9839 15.0892 23.9334 15.1998 23.8508C15.3103 23.7681 15.3959 23.6566 15.4471 23.5285L24.4471 1.02847ZM21.6976 3.86347L10.4566 15.1045L10.1341 14.5975C10.075 14.5044 9.99616 14.4256 9.90312 14.3665L9.39612 14.044L20.6371 2.80296L22.4041 2.09646L21.6991 3.86347H21.6976Z" fill="#EEEEEE"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm lg:text-base">Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home_Form
