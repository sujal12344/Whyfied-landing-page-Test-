import React from "react";
import NeoButton from "./ui/neo-brutalist/button";

const MenuButton = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => (
  <button
    type="button"
    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 cursor-pointer"
  >
    <a href={link}>{children}</a>
  </button>
);

const Navbar = () => {
  const menuItems = ["Pricing", "Samples", "FAQ"];
  const menuItemsLink = [
    "https://www.google.co.in/", //pricing link
    "https://www.amazon.in/",    //Samples link
    "https://www.facebook.com/", //FAQ link
  ];

  return (
    <header className="flex justify-between items-center py-[12px] w-full text-lg mb:text-[16px] font-semibold mb:font-bold text-black whitespace-nowrap bg-orange-200 mb:px-[10px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] px-[32px]">
      <div className="flex items-center">LOGO</div>
      <nav className="flex space-x-[30px] mb:space-x-[10px] grow-0 mb:shrink-0 justify-between">
        <div className="flex space-x-[16px] mb:space-x-[14px]">
          {menuItems.map((item, index) => (
            <MenuButton key={item} link={menuItemsLink[index]}>
              {item}
            </MenuButton>
          ))}
        </div>
        <NeoButton
          buttonText="Download"
          color="yellow"
          rounded="none"
          size="mb"
          className="font-bold smToLarge:hidden"
          link="https://www.whyfied.me/landing-slider"
        />
        <NeoButton
          buttonText="Download"
          color="yellow"
          rounded="none"
          size="md"
          className="font-bold mb:hidden"
          link="https://www.whyfied.me/landing-slider"
        />
      </nav>
    </header>
  );
};

export default Navbar;
