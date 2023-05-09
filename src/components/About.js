import React from 'react';
import ojas from "../assets/ojas.png";
import shubham from "../assets/shubham.png";
import shivam from "../assets/shivam.png";
import mrunali from "../assets/mrunali.png";
import nikhil from "../assets/nikhil.png";
import group from "../assets/group.jpg";
import shrutimaam from "../assets/shrutimaam.png";
import nitishsir from "../assets/nitishsir.png";
import priyankamaam from "../assets/priyankamaam.png";

const About = () => {
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <img className="w-full h-full" src={group} alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-col flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-full flex flex-col justify-center text-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800">Project Guide & Experts</h1>
                    </div>
                    <div className="w-full lg:w-full aboutImg">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={shrutimaam} alt=" Img" />
                                <img className="md:hidden block" src={shrutimaam} alt=" Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Prof. Shruti Tiwari (Project Guide)</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={nitishsir} alt="Img" />
                                <img className="md:hidden block" src={nitishsir} alt="Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Prof. N. A. Ghodichor (Expert)</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={priyankamaam} alt="Img" />
                                <img className="md:hidden block" src={priyankamaam} alt="Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Prof. Priyanka Padmane (Expert)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-col flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-full flex flex-col justify-center text-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800">Project Members</h1>
                    </div>
                    <div className="w-full lg:w-full  aboutImg">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md text-center">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={ojas} alt=" Img" />
                                <img className="md:hidden block" src={ojas} alt=" Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Ojas Dongarwar (Group Leader)</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={shubham} alt="Img" />
                                <img className="md:hidden block" src={shubham} alt="Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Shubham Kumar</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={shivam} alt="Img" />
                                <img className="md:hidden block" src={shivam} alt="Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Shivam Vikhar</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={mrunali} alt="img" />
                                <img className="md:hidden block" src={mrunali} alt="img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mrunali Bokade</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src={nikhil} alt="img" />
                                <img className="md:hidden block" src={nikhil} alt="img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Nikhil Shivankar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About