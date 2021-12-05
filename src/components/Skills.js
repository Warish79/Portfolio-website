import React from "react";
import {FaJava, FaReact} from 'react-icons/fa';
import {SiJavascript, SiTailwindcss} from 'react-icons/si';


function Skills()
{
    return(
        <div className = 'max-w-4xl mx-auto justify-center py-12' id="tech">
            <p className ='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
                Tech I Use

            </p>
            <div className ="flex flex-wrap justify-center pt-2">
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                     <FaReact color = "#2196f3" className="mx-auto text-4xl"/>
                 <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">
                    React
                 </p>
                </div>
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                 <SiTailwindcss color = "#00C0A3" className="mx-auto text-4xl"/>
                 <p className = "mt-6 text-base sm:text-xl font-semibold text-center">TailwindCSS
                 </p>
                </div>
                <div className = 'flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                 <SiJavascript color = "#ffdf00" className='mx-auto text-4xl'/>
                 <p className = 'mt-6 text-xl sm:text-2xl font-semibold text-center'>
                    JavaScript
                 </p>
                </div>
                <div className = 'flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                 <FaJava color = "#D0A384" className='mx-auto text-4xl'/>
                 <p className = 'mt-6 text-xl sm:text-2xl font-semibold text-center'>
                    Java
                 </p>
                </div>


            </div>

        </div>

    )
}
export default Skills;