import Card from "../assets/cardComponent";
import qestionMark from "../images/qestionMark3d.svg";
import book from "../images/book.svg";
import IssacNewton from "../images/IsaacNetwon.png";
import SteveJobs from "../images/SteveJobs.png";
import last from "../images/last.png";

const Testimonials = () => {
  return (
    <div className="h-full bg-orange-100 2xl:pt-[200px]">
      <div className="mb:pt-[120px] sm:pt-[170px]  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[75px] mdToLarge:pt-[16vh] text-center text-black font-bold w-full relative z-10">
        What do we do?
      </div>

      <div className="flex flex-col mdToLarge:grid mdToLarge:grid-cols-12">
        <div className="pt-[60px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] w-full mdToLarge:col-span-4 md:pt-[13vh] lg:pt-[13vh] xl:pt-[11vh] 2xl:pt-[24vh] font-black text-center mdToLarge:text-start mdToLarge:ml-[8vw] mdToLarge:leading-normal lg:leading-tight 2xl:leading-relaxed text-yellow-500 px-1 h-fit">
          <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
            START TO TAKE CHANGE
          </div>
          <div className="mb:hidden sm:hidden">
            START <br /> TO <br /> TAKE <br /> CHANGE
          </div>
        </div>

        <div className="flex flex-col space-y-[4vh] sm:space-y-[6vh] pt-[5vh] sm:pt-[6vh] mdToLarge:pt-[14vh] 2xl:pt-[15vh] items-center mdToLarge:col-span-8 pb-20">
          <div className="scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100 z-20">
            <Card
              text1={"We give you a WHY question to think everyday."}
              className={
                "h-fit min-h-[100px] mb:w-[85vw] sm:w-[85vw] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#f2f491]"
              }
            />
            <img
              src={qestionMark}
              alt="image"
              className="h-[180px] w-[180px] relative bottom-[140px] left-[770px]"
            />
          </div>

          {/* <div className="h-[800px] w-[725px] bg-[radial-gradient(ellipse_at_center,_#F4d254_40%,#ffedd5_70%)] absolute z-10 right-0 bottom-[1vh]"></div> */}
          <div className="flex items-center justify-center scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <div className="mdToLarge:h-[550px] mdToLarge:w-[450px] lg:scale-y-[1.15] lg:scale-x-[1.2] xl:scale-y-[1.3] xl:scale-x-[1.35] 2xl:scale-y-[1.4] 2xl:scale-x-[1.8] bg-[radial-gradient(ellipse_at_center,_#ffdd5fc9_48%,#ffedd5_68%)] absolute md:right-[-70px] lg:right-[-30px] xl:right-0 2xl:right-[10px] -z-50"></div>
            {/* <img
              src={ellipse}
              alt="image"
              className="h-[1060px] w-[740px] relative bottom-[685px] left-[310px] -z-50"
            /> */}

            <Card
              text1={"Journalaize your thinking journey and get rewarded."}
              className={
                "h-fit min-h-[100px] mb:w-[85vw] sm:w-[85vw] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#A1D3D0] relative top-[-90px] left-[80px] z-20"
              }
            />
            <img
              src={book}
              alt="image"
              className="h-[170px] w-[170px] relative bottom-[100px] left-[0px] z-30"
            />
          </div>

          <div className="scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <Card
              text1={"Earn and get a chance to get questions by the GREATS"}
              className={
                "h-fit min-h-[100px] mb:w-[85vw] sm:w-[85vw] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#D3DAFF] z-20"
              }
            />
            <img
              src={IssacNewton}
              alt="image"
              className="h-[130px] w-[120px] relative bottom-[80px] left-[690px] z-30"
            />
            <img
              src={SteveJobs}
              alt="image"
              className="h-[170px] w-[170px] relative bottom-[280px] left-[735px] z-30"
            />
            <img
              src={last}
              alt="image"
              className="h-[115px] w-[115px] relative bottom-[365px] left-[815px] z-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
