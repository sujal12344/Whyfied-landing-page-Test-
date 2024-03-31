// import { Lexend_Mega } from "next/font/google";
// const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });
import { twMerge as tM } from "tailwind-merge";

export default function Card({
  text1,
  text2,
  text3,
  className,
}: {
  text1: string;
  text2?: string;
  text3?: string;
  className?: string;
}) {
  return (
    <>
      {/*Mega.className*/}
      <div
        className={tM(
          "w-[300px] h-[300px] font-medium hover:font-bold text-2xl border-4 border-black bg-[#5fc2bb]  grid place-content-center shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-shadow cursor-pointer ",
          className
        )}
      >
        <div className="flex space-x-2 mx-auto">
          <p>
            {text1} <br />
            <strong className="text-yellow-500 text-[24px] hover:text-[30px] hover:font-extrabold">
              {text2}
            </strong>{" "}
            {text3}
          </p>
        </div>
      </div>
    </>
  );
}
