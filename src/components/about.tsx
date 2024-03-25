// import { Lexend_Mega } from "next/font/google";
// const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });
import Card from "../assets/cardComponent";
import image1 from "../images/image 1.svg";
import image2 from "../images/Group 3.svg";
import mobile_image from "../images/mobile_image.svg";
import man_image from "../images/man_image.png";
import thirdImage from "../images/3rd_image.svg";

function About() {
  return (
    <>
      <div className="h-full bg-orange-100">
        <img
          src={image1}
          alt="image"
          className="h-[140px] w-[110px] relative top-[180px]"
        />

        <div className="flex flex-col text-center w-full justify-center">
          <div className="self-center text-3xl sm:text-4xl md:text-5xl lgToLarge:text-[52px] xl:text-[56px] 2xl:[60px] font-bold text-black pt-[5vh] lgToLarge:leading-tight">
            <span className="text-yellow-500">WHY CHOOSE THINKING</span> <br />
            IN TODAY&apos;S WORLD?
          </div>

          <img
            src={image2}
            alt="image"
            className="h-[140px] w-[110px] relative top-[180px]"
          />

          <div className="p-[5vh] md:px-[10vh] 2xl:px-[20vh] text-center text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl font-semibold text-neutral-700 z-30">
            Don&apos;t just accept things as they are, ask why and gain a deeper
            understanding of yourself and the world around you.
          </div>
        </div>

        <div className="flex flex-col mdToLarge:flex-row mdToLarge:justify-evenly items-center smToLarge:pt-5">
          <div className="flex gap-0">
            {/* <img
              src={mobile_image}
              alt="image"
              className="h-[175px] w-[200px] relative top-[188px] left-[89px] z-50"
            /> */}

            <Card
              text1={"Social media is overwhelming?"}
              text2={"Rediscover"}
              text3={"your own unique voice."}
              className="z-40 bg-[#f0d5f4]"
            />
          </div>

          <div className="flex flex-col gap-0">
            {/* <img
              src={man_image}
              alt="image"
              className="h-[126px] w-[165px] relative top-[-30px] right-[-68px] z-50"
            /> */}

            <div className="flex items-center justify-center ">
              <div className="h-[370px] w-[370px] sm:scale-[1.07] md:scale-[1.1] lg:scale-[1.15] xl:scale-[1.3] 2xl:h-[500px] 2xl:w-[500px] bg-[radial-gradient(ellipse_at_center,_#ffdd5fc9_48%,#ffedd5_68%)] absolute z-20"></div>
              <Card
                text1={"Emotionally disconnected? "}
                text2={"Find"}
                text3={"meaning in your complexity."}
                className="z-50 bg-[#f2f491]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-0">
            <Card
              text1={"Feeling a virtual void? "}
              text2={"Anchor "}
              text3={" your purpose within."}
              className="z-40 bg-[#d2ede8] relative top-[133px]"
            />

            <img
              src={thirdImage}
              alt="image"
              className="h-[264px] w-[242px] relative top-[-32px] right-[-102px] z-50"
            />
          </div>
        </div>
        <div className="text-2xl font-bold text-center text-black w-full px-[1px] smToLarge:py-8  absolute z-20">
          SPOILER : IT ALL STARTS BY ASKING WHYs’
        </div>
      </div>
    </>
  );
}

export default About;
