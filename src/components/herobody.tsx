import QuestionMark from "../images/Question MarkinSentence.png";
import navbar from "../images/navbarImage.png";
import Marcus from "../images/Marcus Aurelius.png";
import secondScientist from "../images/secondScienticist.png";
import greenQuestionMark from "../images/green question mark.png";
// import circle from "../images/circle.svg";

const Herobody = () => {
  return (
    <>
      <div className="flex items-center h-[90vh] justify-between  px-14 pt-1 bg-orange-100">
        <div className="w-[60vw]">
          <img
            src={navbar}
            alt="image"
            className="h-[95px] w-[80px] relative 2xl:top-[-10px] 2xl:left-[-58px] 2xl:scale-125 z-0"
          />
          <h1 className="mb:text-[48px] sm:text-[48px] text-6xl font-bold leading-snug mdToLarge:leading-normal">
            ASK{" "}
            <span className="text-yellow-300">
              WHY&apos;S
              <span>
                <img
                  src={QuestionMark}
                  alt="QuestionMark"
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
        <div className="w-[40vw]">
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
