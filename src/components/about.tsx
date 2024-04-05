// import { Lexend_Mega } from "next/font/google";
// const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });
import Card from "../assets/cardComponent";
import questionMark3d from "../images/qestionMark3d.svg";
import cicle from "../images/circle.svg";
import mobile_image from "../images/mobile2.svg";
import man_image from "../images/man_image.png";
import fallMan from "../images/fallMan_image.svg";

function About() {
  return (
    <>
      <div className="h-full bg-orange-100 space-y-[40px] mb:space-y-[10px]">
        <div className="flex flex-col text-center w-full justify-center space-y-[60px] mb:space-y-[40px] px-[10px]">
          <div className="flex items-center smToLarge:justify-around mb:mx-auto">
            <img
              src={questionMark3d}
              alt="questionMark3d"
              className="h-[180px] w-[150px] mb:scale-[0.75] mb:-ml-[20px] 2xl:scale-125"
            />

            <div className="self-center mb:text-[24px] sm:text-4xl md:text-5xl lgToLarge:text-[52px] xl:text-[56px] 2xl:[60px] font-bold text-black lgToLarge:leading-tight mb:-ml-[40px] mb:-mt-[20px] mb:leading-[2]">
              <span className="text-yellow-500">WHY CHOOSE THINKING</span>{" "}
              <br />
              IN TODAY&apos;S WORLD?
            </div>

            <img
              src={cicle}
              alt="cicle"
              className="w-[170px] h-[170px] mb:hidden 2xl:scale-125"
            />
          </div>

          <div className="self-center items-center text-center text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl font-semibold text-neutral-700 z-10">
            Don&apos;t just accept things as they are, ask why and gain a deeper
            understanding of yourself and the world around you.
          </div>
        </div>

        <div className="flex flex-col mdToLarge:flex-row mdToLarge:justify-evenly items-center mb:py-[70px] py-[100px] mb:space-y-[50px] sm:space-y-[80px]">
          <div className="flex scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <img
              src={mobile_image}
              alt="mobile image"
              className="h-[220px] w-[225px] absolute rotate-[-23.11deg] -ml-[110px] mt-[210px]"
            />
            <Card
              text1={"Social media is overwhelming?"}
              text2={"Rediscover"}
              text3={"your own unique voice."}
              className="bg-[#f0d5f4] pl-[20px]"
            />
          </div>

          <div className="flex flex-col scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100 items-center">
            <img
              src={man_image}
              alt="man image"
              className="h-[180px] w-[230px] absolute -mt-[110px]"
            />

            <div className="flex items-center justify-center">
              <div className="h-[370px] w-[370px] sm:scale-[1.07] md:scale-[1.1] lg:scale-[1.15] xl:scale-[1.3] 2xl:h-[500px] 2xl:w-[500px] bg-[radial-gradient(ellipse_at_center,_#ffdd5fc9_48%,#ffedd5_68%)] absolute -z-10"></div>
              <Card
                text1={"Emotionally disconnected? "}
                text2={"Find"}
                text3={"meaning in your complexity."}
                className="bg-[#f2f491] pl-[20px]"
              />
            </div>
          </div>

          <div className="flex flex-col scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <img
              src={fallMan}
              alt="fallMan"
              className="h-[300px] w-[300px] absolute ml-[110px] mt-[150px]"
            />
            <Card
              text1={"Feeling a virtual void? "}
              text2={"Anchor "}
              text3={" your purpose within."}
              className="bg-[#d2ede8] pl-[20px]"
            />
          </div>
        </div>

        <div className="mb:text-[18px] text-[26px] font-bold text-center text-black w-full px-[1px] mb:py-8 sm:py-8  lg:py-10 xl:py-12 2xl:my-14 z-10">
          SPOILER : IT ALL STARTS BY ASKING WHYs’
        </div>
      </div>
    </>
  );
}

export default About;
