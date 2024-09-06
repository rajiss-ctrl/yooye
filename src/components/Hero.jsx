
import Image from "next/image";
const Hero = () => {
  return (
    <div className='bg-[#120800] lg:h-[calc(100vh-90px)] flex flex-col lg:flex-row justify-center lg:justify-between items-center px-3 lg:px-10 xl:px-32 pt-12 md:pt-0 bg-img'>
      <div className="text-[#FEFEFE] lg:w-1/2">
      <p className="leading-[1.3rem] text-[#CBE3D2]">I, <span className="text-[#018C50] font-bold">Opayooye Abiodun.</span> am seeking your invaluable support in the upcoming local government election as a councillor candidate for Ira Ward, to work together towards a brighter, more prosperous future 
      for our community.
      </p>
        <h1 className="leading-[2rem] text-1xl  xl:text-3xl font-bold">TOGETHER, WE CAN ELEVATE OUR DEAR  CHERISHED, ANCIENT HOME OF OYA, IRA, TO ITS RIGHT PLACE OF HOURNOR. <span className="underline">IRA MAJA!</span> .
        </h1>
        <p className="mt-4 text-sm text-[#CBE3D2]">No one will build it for us, and no one can—unless we stand up and show the world our strength. Yes, we can, and together, we will
        </p>
      </div>
      <Image 
      className="rounded-[50%]  xl:hidden my-10 lg:mt-0 shadow-2xl"
      src="/yooye2.png" 
      width={300}
      height={300}
      alt="..."
      />
      <Image 
      className="rounded-[50%] hidden xl:block my-10 lg:mt-0 shadow-2xl"
      src="/yooye2.png" 
      width={400}
      height={400}
      alt="..."
      />
    </div>
  )
}

export default Hero
