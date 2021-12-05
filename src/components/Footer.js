import React from 'react';
import {FaGithub, FaEnvelope,FaTwitter,FaInstagram} from 'react-icons/fa';



function Footer()
{
    return(
        <div className = 'py -5 border-t-3/2'>
            <div className = 'flex justify-center mt-4'>
              <a className = 'text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 href="https://github.com/Warish79"'>
                        <FaGithub/>
                        <span class = 'sr-only'>Github</span>


                    </a>
                    
                    <a className = 'text-xl m-1 p-1 sm:p-2 text-green-800 hover:bg-green-800 rounded-full hover:text-white transition-colors duration-300' href="khanwarish79@gmail.com">
                        <FaEnvelope/>
                        <span class = 'sr-only'>Mail</span>


                    </a>
                    
                    <a className = 'text-xl m-1 p-1 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href="https://twitter.com/Warishkhan79">
                        <FaTwitter/>
                        <span class = 'sr-only'>Twitter</span>


                    </a>
                    
                    <a className = 'text-xl m-1 p-1 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300' href="https://instagram.com/khanwarish_">
                        <FaInstagram/>
                        <span class = 'sr-only'>Instagram</span>


                    </a>

            </div> 
            <div className = 'flex justify-center  mt-4'>
                <p className = 'text-black mb-4'>
                    Made with <span className = 'mr-2'role= "link" aria-label='heart'>💙</span> by <a className = "text-blue-500 hover:underline" href="mailto:khanwarish79@gmail.com">Warish Khan</a>

                </p>

            </div>

        </div>
    )
}
export default Footer;