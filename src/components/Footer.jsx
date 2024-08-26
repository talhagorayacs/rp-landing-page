import React from 'react'
import logo from '../assets/site-logo.svg'
function Footer() {
  return (
    <footer className="bg-custom-gradient3 py-[4rem] footer-section relative z-[2]">
      <div className="container mt-10 pl-20">
        <div className="flex flex-wrap justify-center mb-[2rem] lg:mb-[6rem]">
          <div className="w-full md:w-[50%] lg:w-[18%]">
            <h3 className="text-lg font-semibold mb-3 lg:mb-5">Product</h3>
            <ul className="mb-4 lg:mb-0">
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Employee database</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Payroll</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Absences</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Time tracking</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Shift planner</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Recruiting</a></li>
            </ul>
          </div>

          <div className="w-full md:w-[50%] lg:w-[18%]">
            <h3 className="text-lg font-semibold mb-3 lg:mb-5">Information</h3>
            <ul className="mb-4 lg:mb-0">
              <li className="pb-2 lg:pb-3"><a href="#FAQ" className="text-[#7d878e]">FAQ</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Blog</a></li>
              <li className="pb-2 lg:pb-3"><a href="/contact-us.html" className="text-[#7d878e]">Support</a></li>
            </ul>
          </div>

          <div className="w-full md:w-[50%] lg:w-[18%]">
            <h3 className="text-lg font-semibold mb-3 lg:mb-5">Company</h3>
            <ul className="mb-4 lg:mb-0">
              <li className="pb-2 lg:pb-3"><a href="/contact-us.html" className="text-[#7d878e]">About us</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Careers</a></li>
              <li className="pb-2 lg:pb-3"><a href="/contact-us.html" className="text-[#7d878e]">Contact us</a></li>
              <li className="pb-2 lg:pb-3"><a className="cursor-pointer text-[#7d878e]">Media</a></li>
            </ul>
          </div>

          <div className="w-full md:w-[50%] lg:w-[34%] bg-white py-[2rem] px-[1rem] lg:px-[3rem] lg:py-[3rem] rounded-[24px] lg:mt-[-40px]">
            <h3 className="text-lg font-semibold mb-3 lg:mb-5">Subscribe</h3>
            <div className="relative max-w-[300px] w-full mb-5 lg:mb-7">
              <input
                type="email"
                placeholder="Email Address"
                id="recipientEmail"
                required
                name="recipientEmail"
                className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:border-blue-500 outline-none hover:border-blue-500"
              />
              <span className="absolute inset-y-0 right-0 px-4 pt-2 bg-[#4A83E7] text-white rounded-r-lg cursor-pointer">
                <div className="text-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.23347 13.8232L14.8898 8.2517C15.4106 7.73843 15.4106 6.90648 14.8898 6.39478L9.23347 0.823242L7.34788 2.68134L10.7279 6.00993H0L0 8.63616H10.7279L7.34788 11.9659L9.23347 13.8232Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </span>
            </div>
            <p className="text-[#7d878e]">Hello, we are RootPointers. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
          </div>
        </div>

        <div className="border-t-[#00000055] border-t-[1px] border-solid pt-4 lg:pt-8 flex flex-col gap-5 md:flex-row justify-between items-center">
          <a href="./index.html">
            <img src={logo} height="59" width="66" alt="site logo" />
          </a>
          <div className="flex items-center gap-[1rem]">
            <a className="text-[#000] font-semibold cursor-pointer hover:text-lightblue">Terms</a>
            <a className="text-[#000] font-semibold cursor-pointer hover:text-lightblue">Privacy</a>
            <a className="text-[#000] font-semibold cursor-pointer hover:text-lightblue">Cookies</a>
          </div>
          
        </div>
      </div>

    </footer>
  )
}

export default Footer
