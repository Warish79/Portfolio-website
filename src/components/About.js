import React from "react";
import ScrollIntoView from 'react-scroll-into-view';
import{FaChevronDown} from 'react-icons/fa';


function About()
{

    return(
        <div className = 'max-w-4xl mt-20 mx-auto'>
            <p className = 'text-2xl text-black md:text-4xl font-bold text-center'>
                Hey! 
            </p>
            <p className = 'text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4'>
                I'm a passionate web And React developer. I love to create an amazing Website, also i have an eager to learn about the newest teachnology and working with them.
            </p>

            <ScrollIntoView selector = "#tech">
                <div className ='mx-auto p-20'>
                    <FaChevronDown className = 'animate-bounce mx-auto text-3xl text-blue-500'/>
                </div>
            </ScrollIntoView>
        </div>
    )
}
export default About; 
