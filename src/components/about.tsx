// import { Lexend_Mega } from "next/font/google";
// const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });
import Card from "../assets/cardComponent";

function About() {
  return (
    <>
      <div className="h-full bg-orange-100">
        <div className="flex flex-col text-center w-full justify-center">
          <div className="self-center text-3xl sm:text-4xl md:text-5xl lgToLarge:text-[52px] xl:text-[56px] 2xl:[60px] font-bold text-black pt-[5vh] lgToLarge:leading-tight">
            <span className="text-yellow-500">WHY CHOOSE THINKING</span> <br />
            IN TODAY&apos;S WORLD?
          </div>

          <div className="p-[5vh] md:px-[10vh] 2xl:px-[20vh] text-center text-3xl md:text-4xl xl:text-[40px] 2xl:text-5xl font-semibold text-neutral-700 z-30">
            Don&apos;t just accept things as they are, ask why and gain a deeper
            understanding of yourself and the world around you.
          </div>
        </div>

        <div className="flex flex-col mdToLarge:flex-row mdToLarge:justify-evenly items-center">
          <Card
            text1={"Social media is overwhelming?"}
            text2={"Rediscover"}
            text3={"your own unique voice."}
            className="z-40 bg-[#f0d5f4]"
          />

          <Card
            text1={"Emotionally disconnected? "}
            text2={"Find"}
            text3={"meaning in your complexity."}
            className="z-50 bg-[#f2f491]"
          />

          <div className="h-[(x+50)px] w-[(y+50)px] bg-[radial-gradient(ellipse_at_center,_#F4d254_45%,#ffedd5_85%)] absolute z-20"></div>

          <Card
            text1={"Feeling a virtual void? "}
            text2={"Anchor "}
            text3={" your purpose within."}
            className="z-40 bg-[#d2ede8]"
          />
        </div>
        <div className="text-2xl font-bold text-center text-black w-full px-[1px] py-8 z-20">
          SPOILER : IT ALL STARTS BY ASKING WHYs’
        </div>
      </div>
    </>
  );
}

export default About;
