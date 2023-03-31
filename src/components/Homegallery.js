import React from 'react'

const Homegallery = () => {
    return (
        <>
            <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
                <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
                            <p className="text-base lg:text-xl text-gray-800 mt-2">
                                Save upto <span className="font-bold">50%</span>
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
                        </div>
                    </div>
                    <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Game Console</h1>
                            <p className="text-base lg:text-xl text-gray-800">
                                Save Upto <span className="font-bold">30%</span>
                            </p>
                        </div>
                        <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                            <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
                <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
                            <p className="text-base lg:text-xl text-gray-800 mt-2">
                                Save upto <span className="font-bold">70%</span>
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src="https://wallpapershome.com/images/pages/pic_h/9250.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="overflow-hidden text-neutral-700">
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://hollywoodlife.com/wp-content/uploads/2020/11/women-wearing-sunglasses-vertical.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://img.freepik.com/premium-psd/realistic-smart-watch-mockup_165789-534.jpg" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://wallpapershome.com/images/pages/pic_h/9250.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://wallpapershome.com/images/pages/pic_h/8743.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.pinimg.com/236x/06/7b/d3/067bd3efc143c23f81c1ad22d889ab22.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Homegallery;