import Card from "../assets/cardComponent";

const Testimonials = () => {
  return (
    <div className="h-full min-h-screen bg-orange-900">
      <div className="pt-[5vh] text-3xl md:text-5xl lg:text-[52px] xl:text-[56px] 2xl:text-[60px] text-center text-black font-bold w-full">
        What do we do?
      </div>

      <div className="flex flex-col mdToLarge:grid mdToLarge:grid-cols-12 lg:grid-cols-12">
        <div className="pt-[5vh] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl w-full md:col-span-4 md:w-[20vw] xl:w-[15vw] text-yellow-500 md:mt-[19vh] xl:mt-[14vh] font-[900] text-center md:text-start md:ml-[8vw] md:leading-normal lg:leading-tight px-1">
          START TO TAKE CHANGE
        </div>

        <div className="flex flex-col space-y-[4vh] sm:space-y-[6vh] mt-[5vh] sm:mt-[6vh] md:mt-[20vh] xl:mt-[12vh] 2xl:mt-[14vh] items-center md:col-span-8">
          <Card
            text1={"We give you a WHY question to think everyday."}
            className={
              "h-fit min-w-[300px] min-h-[100px] w-[70vw] md:w-[55vw] text-base sm:text-lg text-center px-2 py-6 lg:py-8 xl:py-12 bg-[#f2f491] z-20"
            }
          />

          {/* For Circular gradient --> 
          
          <div className="h-[800px] w-[725px] bg-[radial-gradient(ellipse_at_center,_#F4d254_40%,#ffedd5_70%)] absolute z-10 right-0 bottom-[1vh]"></div> */}
          <Card
            text1={"Journalaize your thinking journey and get rewarded."}
            className={
              "h-fit min-w-[300px] min-h-[100px] w-[70vw] md:w-[55vw] text-base sm:text-lg text-center px-2 py-6 lg:py-8 xl:py-12 bg-[#A1D3D0] z-20"
            }
          />

          <Card
            text1={"Earn and get a chance to get questions by the GREATS"}
            className={
              "h-fit min-w-[300px] min-h-[100px] w-[70vw] md:w-[55vw] text-base sm:text-lg text-center px-2 py-6 lg:py-8 xl:py-12 #D3DAFF z-20"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
