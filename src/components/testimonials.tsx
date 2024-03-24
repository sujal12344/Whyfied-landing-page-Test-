import Card from "../assets/cardComponent";

const Testimonials = () => {
  return (
    <div className="h-full bg-orange-100">
      <div className="pt-[5vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] mdToLarge:pt-[8vh] text-center text-black font-bold w-full">
        What do we do?
      </div>

      <div className="flex flex-col mdToLarge:grid mdToLarge:grid-cols-12">
        <div
          className="pt-[5vh] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-8xl w-full mdToLarge:col-span-4  
        
        
       md:pt-[13vh] lg:pt-[13vh] xl:pt-[11vh] 2xl:pt-[15vh] font-black text-center mdToLarge:text-start mdToLarge:ml-[8vw] mdToLarge:leading-normal lg:leading-tight 2xl:leading-tight text-yellow-500 px-1 h-fit"
        >
          <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
            START TO TAKE CHANGE
          </div>
          <div className="mb:hidden sm:hidden">
            START <br /> TO <br /> TAKE <br /> CHANGE
          </div>
        </div>

        <div className="flex flex-col space-y-[4vh] sm:space-y-[6vh] pt-[5vh] sm:pt-[6vh] mdToLarge:pt-[14vh] 2xl:pt-[15vh] items-center mdToLarge:col-span-8 pb-20">
          <Card
            text1={"We give you a WHY question to think everyday."}
            className={
              "h-fit min-h-[100px] mb:w-[80vw] sm:w-[85vw] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#f2f491] z-20"
            }
          />

          {/* For Circular gradient --> 
          
          <div className="h-[800px] w-[725px] bg-[radial-gradient(ellipse_at_center,_#F4d254_40%,#ffedd5_70%)] absolute z-10 right-0 bottom-[1vh]"></div> */}
          <Card
            text1={"Journalaize your thinking journey and get rewarded."}
            className={
              "h-fit min-h-[100px] mb:w-[80vw] sm:w-[85vw] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#A1D3D0] z-20"
            }
          />

          <Card
            text1={"Earn and get a chance to get questions by the GREATS"}
            className={
              "h-fit min-h-[100px] mb:w-[80vw] sm:w-[85vw] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#D3DAFF] z-20"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
