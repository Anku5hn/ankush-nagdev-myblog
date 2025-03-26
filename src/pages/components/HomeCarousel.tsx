
const HomeCarousel: React.FC = () => {
    return (
        <>
            <div className="mt-[10vh] flex justify-center z-0 w-full font-serif">
                {/*Mobile*/}
                <div className="w-[100vw] h-[80vh]  bg-[#D1E8F7] flex flex-col justify-center items-center md:hidden">
                    <h2 className="text-3xl font-semibold">Find the best blogs here</h2>
                    <div className="background-image w-[100vw] h-[50vh]">
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="border-gray-400 broder-b-1 border w-full mx-5">
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Explore</p>
                        </div>
                        <div className="border-gray-400 broder-b-1 border w-full mx-5">
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                        <p className="text-blue-500 font-semibold">Intro</p>
                        <p className="text-blue-500 font-semibold">Timing</p>
                        <p className="text-blue-500 font-semibold">Pricing</p>
                        <p className="text-blue-500 font-semibold">Affordability</p>
                    </div>
                </div>
                <div className="w-[100vw] md:flex lg:flex justify-center items-center hidden bg-[#D1E8F7] mt-[1vh]">
                    <div className="w-[90vw] h-[50vh] flex justify-between">
                        <div className="flex h-full flex-col justify-around">
                            <div className="mt-10">
                            <h2 className="text-4xl font-semibold">Find the best blogs!</h2>
                            <p className="text-2xl font-semibold">Welcome to the best blogging website</p>
                            </div>
                            <div className="flex">
                            <p className="text-lg font-semibold">Explore </p>
                           <div className="border border-gray-400 mx-5"></div>
                           <p className="text-blue-500 font-semibold mr-2 cursor-pointer">Intro</p>
                        <p className="text-blue-500 font-semibold mr-2 cursor-pointer">Timing</p>
                        <p className="text-blue-500 font-semibold mr-2 cursor-pointer">Pricing</p>
                        <p className="text-blue-500 font-semibold mr-2 cursor-pointer">Affordability</p>
                            </div>
                        </div>
                        <div className="background-image w-[30vw] h-[50vh]">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCarousel;