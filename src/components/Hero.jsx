
import Image from "next/image";
const Hero = () => {
  return (
    <div className='bg-[#120800] h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-3 lg:px-32 py-14 bg-img'>
      <div className="text-[#FEFEFE] w-1/2">
      <p className="leading-[1.3rem] text-[#CBE3D2]">I am <span className="text-[#018C50] font-bold">Opayooye Abiodun</span> , I am seeking for your support
        in the upcoming local government election as councilor
        for Ira ward.
      </p>
        <h1 className="leading-[2rem] text-3xl font-bold">TOGETHER WE CAN ELEVATE OUR DEAR HABITABLE,
          ACIENT HOME OF OYA TO ITS RIGHFUL PLACE. <span className="underline">IRA MAJA</span> .
        </h1>
        <p className="mt-4 text-sm text-[#CBE3D2]">No one will and no one can build it for us except if we stand up 
          and show the world we can. yes we can together.
        </p>
      </div>
      <Image 
      className="rounded-[50%] shadow-2xl"
      src="/yooye2.png" 
      width={400}
      height={400}
      alt="..."
      />
    </div>
  )
}

export default Hero
