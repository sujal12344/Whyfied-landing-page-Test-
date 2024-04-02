import orangeQuestionMark from "../images/orangeQuestionMark.png";
import halfCircleAtNavbar from "../images/halfCircleAtNavbar.png";
import Marcus from "../images/Marcus Aurelius.png";
import secondModal from "../images/secondModal.png";
import greenQuestionMark from "../images/green question mark.png";
import circle from "../images/circle.svg";

const Herobody = () => {
  return (
    <>
      {/*items-center justify-between pt-1*/}
      <div className="flex mb:flex-col sm:flex-col bg-orange-100">
        <div className="mb:w-full sm:w-full w-[60vw]">
          <img
            src={halfCircleAtNavbar}
            alt="halfCircleAtNavbar"
            className="h-[110px] w-[98px] mb:w-[92px]"
          />

          <h1 className="mb:text-[40px] sm:text-[42px] md:text-[44px] lg:text-[48px] xl:text-[52px] 2xl:text-[56px] font-bold leading-[1.5] md:leading-normal lgToLarge:leading-[1.6] mb:px-[20px] sm:px-[26px] md:px-[30px] lg:px-[34px] xl:px-[38px] 2xl:px-[42px] mb:w-[90vw] sm:w-[70vw] mb:pt-[60px] sm:pt-[60px]">
            ASK{" "}
            <span className="text-yellow-500">
              WHY&apos;s
              <span>
                <img
                  src={orangeQuestionMark}
                  alt="orangeQuestionMark"
                  className="w-[120px] h-[150px] mb:scale-[0.7] sm:scale-[0.75] md:scale-[0.8] lg:scale-[0.85] xl:scale-[0.9] inline mb:-ml-[30px] mb:-mt-[20px] sm:-ml-[20px] sm:-mt-[30px] mdToLarge:-mt-[30px] md:-ml-[20px] 2xl:-mt-[40px]"
                />
              </span>
            </span>{" "}
            <p className="mb:-mt-[40px] sm:-mt-[37px] md:-mt-[34px] lg:-mt-[28px] xl:-mt-[26px] 2xl:-mt-[20px]">
              <div className="relative z-10">
                AND LET THE ANSWERS GUIDE YOU TO YOUR JOURNEY OF CURIOUSITY
              </div>

              <img
                src={circle}
                alt="circle"
                className="w-[170px] h-[170px] mb:-mt-[80px] sm:-mt-[80px] md:-mt-[85px] lg:-mt-[90px] xl:-mt-[100px] 2xl:-mt-[105px]"
              />
            </p>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center mb:w-full sm:w-full w-[40vw] mb:pt-[50px] sm:pt-[80px] md:pt-[40px] lg:pt-[50px]">
          <div className="flex justify-center items-center px-[50px]">
            <img
              src={Marcus}
              alt="Marcus"
              className="w-[215px] h-[220px] mb:-mr-[60px] sm:-mr-[20px] md:-mr-[80px] lg:-mr-[70px] xl:-mr-[50px] 2xl:-mr-[30px] mt-[120px]"
            />
            <img
              src={secondModal}
              alt="secondModal"
              className="w-[220px] h-[200px] mb:-mr-[15px] sm:-ml-[40px]"
            />
          </div>
          <img
            src={greenQuestionMark}
            alt="greenQuestionMark"
            className="w-[170px] h-[150px] md:scale-[0.8] lg:scale-[0.85] xl:scale-[0.9] mb:mt-[20px] sm:mt-[30px] mdToLarge:mt-[0px] mb:ml-[60px] ml-[60px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[100px] mb-[120px]"
          />
        </div>
      </div>
    </>
  );
};

export default Herobody;
