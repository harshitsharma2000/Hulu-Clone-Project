import React from "react";

function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-200">
        <div
          className="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a
              className="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-white
              md:justify-start
            "
            >
              <div className="hover:animate-bounce cursor-pointer">HULU</div>
            </a>

            <p className="mt-6 text-sm text-gray-500">
              Hulu is the leading premium streaming service offering live and
              on-demand TV and movies, with and without commercials, both in and
              outside the home.
            </p>
          </div>
          <div className="justify-between w-full mt-4 text-center lg:flex">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-4 font-bold tracking-widest text-white cursor-pointer">
                Explore
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none cursor-pointer">
                <li>
                  <a className="text-white hover:text-gray-600">Home</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">Trending</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">Verified</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">Collection</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">Search</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-4 font-bold tracking-widest text-white cursor-pointer">
                Visit Social
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none cursor-pointer">
                <li>
                  <a className="text-white hover:text-gray-600">Facebook</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">Twitter</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">Instagram</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-white cursor-pointer">
                Account
                <div className="p-6 space-x-0.3">
                  <input
                    className="p-2 text-black"
                    type="text"
                    placeholder="Enter account..."
                  ></input>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mb-5 text-base text-gray-400">
            © Copyright 2021 Harshit Sharma
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
