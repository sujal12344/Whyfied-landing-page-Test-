import orangeQuestionMark from "../images/orangeQuestionMark.png";
import halfCircleAtNavbar from "../images/halfCircleAtNavbar.png";
import Marcus from "../images/Marcus Aurelius.png";
import secondScientist from "../images/secondScienticist.png";
import greenQuestionMark from "../images/green question mark.png";
// import circle from "../images/circle.svg";

const Herobody = () => {
  return (
    <>
      {/*items-center justify-between pt-1*/}
      <div className="flex mb:flex-col sm:flex-col bg-orange-100">
        <div className="mb:w-full sm:w-full w-[60vw]">
          <img
            src={halfCircleAtNavbar}
            alt="halfCircleAtNavbar"
            className="h-[110px] w-[98px] mb:h-[100] mb:w-[92px]"
          />
          <h1 className="mb:text-[40px] sm:text-[42px] md:text-[44px] lg:text-[48px] xl:text-[52px] 2xl:text-[56px] font-bold leading-snug md:leading-normal lgToLarge:leading-[1.6] mb:px-[20px] sm:px-[26px] md:px-[30px] lg:px-[34px] xl:px-[38px] 2xl:px-[42px] mb:w-[90vw] sm:w-[65vw] mb:pt-[60px] sm:pt-[60px]">
            ASK{" "}
            <span className="text-yellow-300">
              WHY&apos;S
              <span>
                <img
                  src={orangeQuestionMark}
                  alt="orangeQuestionMark"
                  className="w-[125px] h-[158px] relative top-[-120px] left-[340px]"
                />
              </span>
            </span>{" "}
            <p className="relative top-[-150px] z-10">
              AND LET THE ANSWERS GUIDE YOU TO YOUR JOURNEY OF CURIOUSITY
              {/* <img
                src={circle}
                alt="circle"
                className="w-[170px] h-[170px] relative top-[-100px] left-[10px] -z-10"
              /> */}
            </p>
          </h1>
        </div>
        <div className="mb:w-full sm:w-full w-[40vw]">
          <img
            src={secondScientist}
            alt="scientist"
            className="w-[220px] h-[200px] relative top-[52px] left-[185px]"
          />
          <img
            src={Marcus}
            alt="scientist"
            className="w-[215px] h-[220px] relative top-[-75px] left-[40px]"
          />
          <img
            src={greenQuestionMark}
            alt="scientist"
            className="w-[240px] h-[165px] relative top-[-80px] left-[275px] rotate-12"
          />
        </div>
      </div>
    </>
  );
};

export default Herobody;
