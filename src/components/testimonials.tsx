import Card from "../assets/cardComponent";
import qestionMark3d from "../images/qestionMark3d.svg";
import book from "../images/book.svg";
import IssacNewton from "../images/IsaacNetwon.png";
import SteveJobs from "../images/SteveJobs.png";
import last from "../images/last.png";
import whiteYellowQuestionMark from "../images/whiteYellowQuestionMark.png";
import circle from "../images/circle.svg";
import radial_gradient from "../images/radial_gradient.png";

const Testimonials = () => {
  return (
    <div className="bg-orange-100">
      <div className="mb:pt-[120px] sm:pt-[170px] mdToLarge:pt-[150px] text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[75px] text-center text-black font-bold w-full">
        <img
          src={circle}
          alt="halfCircleAtNavbar"
          className="h-[170px] w-[170px] absolute ml-[80px] mb:-ml-[90px] mb:-mt-[60px] sm:-ml-[70px] sm:-mt-[60px]"
        />
        What do we do?
      </div>

      <div className="flex mb:flex-col sm:flex-col mdToLarge:flex-row justify-center items-center pb-[250px]">
        <div className="pt-[60px] mb:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] md:pt-[13vh] lg:pt-[13vh] xl:pt-[11vh] 2xl:pt-[16vh] font-black text-center mdToLarge:text-start mdToLarge:ml-[60px] mdToLarge:leading-normal lg:leading-tight 2xl:leading-normal text-yellow-500 px-[4px]">
          <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
            START TO TAKE CHANGE
          </div>
          <div className="mb:hidden sm:hidden">
            START <br /> TO <br /> TAKE <br /> CHANGE
          </div>
        </div>

        <div className="flex flex-col mb:space-y-[40px] space-y-[30px] mb:pt-[50px] sm:pt-[50px] mdToLarge:pt-[100px] items-center">
          <div className="scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100 h-fit z-10">
            <img
              src={whiteYellowQuestionMark}
              alt="whiteYellowQuestionMark"
              className="h-[100px] w-[100px] absolute -ml-[50px] -mt-[50px] mb:scale-75 sm:scale-75 z-10"
            />

            <Card
              text1={"We give you a WHY question to think everyday."}
              className={
                "h-fit min-h-[100px] mb:w-[400px] sm:w-[500px] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#f2f491]"
              }
            />

            <img
              src={qestionMark3d}
              alt="qestionMark3d"
              className="h-[180px] w-[150px] absolute mb:scale-75 sm:scale-75 mdToLarge:left-[52vw] mb:left-[360px] sm:left-[460px] -mt-[150px]
              mb:-mt-[140px] sm:-mt-[140px]"
            />
          </div>

          <div className="flex justify-center items-center mb:hidden sm:hidden">
            <img
              src={radial_gradient}
              alt="radial_gradient"
              className="h-[1060px] w-[740px] absolute z-0 flex justify-end -mr-[320px]"
            />
          </div>

          <div className="flex items-center justify-center scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100 h-fit">
            <Card
              text1={"Journalaize your thinking journey and get rewarded."}
              className={
                "h-fit min-h-[100px] mb:w-[400px] sm:w-[500px] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#A1D3D0]"
              }
            />

            <img
              src={book}
              alt="book"
              className="h-[180px] w-[150px] absolute mb:scale-75 sm:scale-75 mdToLarge:left-[52vw] mb:left-[350px] sm:left-[460px]"
            />
          </div>

          <div className="scale-75 hover:scale-[0.82] mb:scale-[0.70] mb:hover:scale-[0.79] sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-75 md:hover:scale-[0.82] lg:scale-[0.8] lg:hover:scale-[0.85] xl:scale-[0.85] xl:hover:scale-[0.90] 2xl:scale-[0.95] 2xl:hover:scale-100 h-fit flex items-center justify-center mdToLarge:pt-[30px]">
            <Card
              text1={"Earn and get a chance to get questions by the GREATS"}
              className={
                "h-fit min-h-[100px] mb:w-[400px] sm:w-[500px] mdToLarge:w-[55vw] text-lg text-center px-2 py-6 lg:py-8 xlToLarge:py-12 bg-[#D3DAFF]"
              }
            />
            <img
              src={IssacNewton}
              alt="IssacNewton"
              className="h-[180px] w-[150px] absolute mb:scale-75 sm:scale-75 mdToLarge:left-[45vw] mdToLarge:top-[60px] mb:top-[20px] sm:top-[20px] mb:left-[260px] sm:left-[360px]"
            />
            <img
              src={SteveJobs}
              alt="SteveJobs"
              className="h-[220px] w-[210px] absolute mb:scale-75 sm:scale-75 mb:left-[300px] sm:left-[410px] mdToLarge:left-[48vw]"
            />
            <img
              src={last}
              alt="last"
              className="h-[170px] w-[160px] absolute mb:scale-75 sm:scale-75 mdToLarge:left-[54vw] mdToLarge:top-[60px] mb:top-[20px] sm:top-[20px] mb:left-[380px] sm:left-[460px] mb:overflow-hidden sm:overflow-hidden md:overflow-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
