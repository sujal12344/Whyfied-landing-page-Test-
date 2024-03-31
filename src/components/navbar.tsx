import React from "react";
import NeoButton from "./ui/neo-brutalist/button";

const MenuButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
  >
    {children}
  </button>
);

const Navbar = () => {
  const menuItems = ["Pricing", "Samples", "FAQ"];

  return (
    <header className="flex  justify-between items-center px-20 mb:px-0 py-3 w-full text-lg font-semibold text-black whitespace-nowrap bg-orange-200 smToLarge:flex-wrap smToLarge:px-5 smToLarge:max-w-full z-10">
      <div className="self-start mt-4">LOGO</div>
      <nav className="flex space-x-6 grow-1 mb:shrink-0 justify-between smToLarge:flex-wrap smToLarge:max-w-full">
        <div className="flex space-x-4 text-md justify-between my-auto">
          {menuItems.map((item) => (
            <MenuButton key={item}>{item}</MenuButton>
          ))}
        </div>
        <NeoButton
          buttonText="Download"
          color="yellow"
          rounded="none"
          size="md"
          className="font-bold"
        />
      </nav>
    </header>
  );
};

export default Navbar;
