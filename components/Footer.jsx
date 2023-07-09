import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-transparent container mx-auto rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Filamu
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center ">
        © {year}{" "}
        <a href="#" className="hover:underline">
          Filamu™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
