import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 border-red-300">
      <Link
        to="/"
        className=" flex items-center text-sm sm:text-xl dark:text-white">
        <Link to="/" className="font-bold dark:text-white text-2xl">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Aditya
          </span>
          Blog
        </Link>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search...."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10  lg:hidden">
        <AiOutlineSearch />
      </Button>
      <div className="flex justify-center items-center gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline " color="gray">
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" color="gray">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          {/* //use to sperate to anchor tag */}
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
