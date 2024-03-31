// import { Lexend_Mega } from "next/font/google";
// const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });
import Card from "../assets/cardComponent";
import questionMark3d from "../images/qestionMark3d.svg";
import cicle from "../images/aboutWalaCircle.svg";
import mobile_image from "../images/mobile_image.svg";
import man_image from "../images/man_image.png";
import fallMan from "../images/fallMan_image.svg";

function About() {
  return (
    <>
      <div className="h-full bg-orange-100">
        <img
          src={questionMark3d}
          alt="image"
          className="h-[140px] w-[110px] absolute 2xl:top-[730px] 2xl:left-[60px] 2xl:scale-150"
        />

        <div className="flex flex-col text-center w-full justify-center">
          <div className="self-center text-3xl sm:text-4xl md:text-5xl lgToLarge:text-[52px] xl:text-[56px] 2xl:[60px] font-bold text-black pt-[5vh] lgToLarge:leading-tight">
            <span className="text-yellow-500">WHY CHOOSE THINKING</span> <br />
            IN TODAY&apos;S WORLD?
          </div>

          <img
            src={cicle}
            alt="image"
            className="h-[140px] w-[110px] absolute 2xl:top-[730px] 2xl:right-[60px] 2xl:scale-125"
          />

          <div className="p-[5vh] md:px-[10vh] 2xl:px-[20vh] text-center text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl font-semibold text-neutral-700 z-30">
            Don&apos;t just accept things as they are, ask why and gain a deeper
            understanding of yourself and the world around you.
          </div>
        </div>

        <div className="flex flex-col mdToLarge:flex-row mdToLarge:justify-evenly items-center smToLarge:pt-5">
          <div className="flex scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <img
              src={mobile_image}
              alt="image"
              className="h-[240px] w-[245px] relative top-[170px] left-[120px] z-50"
            />

            <Card
              text1={"Social media is overwhelming?"}
              text2={"Rediscover"}
              text3={"your own unique voice."}
              className="z-40 bg-[#f0d5f4]"
            />
          </div>

          <div className="flex flex-col gap-0 scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <img
              src={man_image}
              alt="image"
              className="h-[180px] w-[230px] relative top-[-28px] right-[-30px] z-50"
            />

            <div className="flex items-center justify-center relative bottom-[90px]">
              <div className="h-[370px] w-[370px] sm:scale-[1.07] md:scale-[1.1] lg:scale-[1.15] xl:scale-[1.3] 2xl:h-[500px] 2xl:w-[500px] bg-[radial-gradient(ellipse_at_center,_#ffdd5fc9_48%,#ffedd5_68%)] absolute z-20"></div>
              <Card
                text1={"Emotionally disconnected? "}
                text2={"Find"}
                text3={"meaning in your complexity."}
                className="z-40 bg-[#f2f491]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-0 scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100">
            <Card
              text1={"Feeling a virtual void? "}
              text2={"Anchor "}
              text3={" your purpose within."}
              className="z-40 bg-[#d2ede8] relative top-[133px]"
            />

            <img
              src={fallMan}
              alt="image"
              className="h-[264px] w-[242px] relative top-[0] right-[-140px] z-50"
            />
          </div>
        </div>
        <div className="text-2xl font-bold text-center text-black w-full px-[1px] sm:py-8  lg:py-10 xl:py-12 2xl:my-14 absolute z-20">
          SPOILER : IT ALL STARTS BY ASKING WHYs’
        </div>
      </div>
    </>
  );
}

export default About;
