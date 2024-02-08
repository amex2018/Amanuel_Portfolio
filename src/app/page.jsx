import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row p-5 sm:px-8 md:px-12 lg:px-20 xl:px-48">
     <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" all="" fill className="object-contain"/>
     </div>

     <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">Turing Complexity into Simplicity !</h1>

      <p className="md:text-xl text-white">
      I am a Software Developer, I have a love of Software Development and IT in general that I bring to all my work. I am meticulous and am always learning more about my field to both stay current and expand on my skills. I have about more than two years of experience working in this field plus a couple more years setting up websites and doing programming while I was learning, I have a real love of IT and System Development. I find the whole field endlessly fascinating. I have a problem-solving attitude so bring on your problems and I will get them fixed
      </p>

      <div className="w-full flex gap-4">
        <button className="p-4 rounded-md ring-1 ring-lightgreen text-white bg-[#05161A]">View My Works</button>
        <button className="p-4 rounded-md ring-1 ring-[#05161A] text-white ">Contact Me</button>
      </div>
     </div>
  </div>;
};

export default Homepage;
