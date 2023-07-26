import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGitSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from "react-icons/fa"


const Footer = () => {
    return (
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <p className="py-4">
            Thank you for visiting our data finance website! Explore financial
            insights and trends with our user-friendly platform powered by React
            and Tailwind CSS. Stay informed and empowered for a prosperous
            financial journey.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="text-sky-600" size={30} />
            <FaInstagramSquare className="text-red-300" size={30} />
            <FaTwitterSquare className="text-sky-400" size={30} />
            <FaGitSquare size={30} />
            <FaDribbbleSquare className="text-pink-500" size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between flex-wrap gap-8 mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="p-2 text-sm">Analytics</li>
              <li className="p-2 text-sm">Marketing</li>
              <li className="p-2 text-sm">Commerce</li>
              <li className="p-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="p-2 text-sm">Pricing</li>
              <li className="p-2 text-sm">Documentation</li>
              <li className="p-2 text-sm">Guides</li>
              <li className="p-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="p-2 text-sm">About</li>
              <li className="p-2 text-sm">Blogs</li>
              <li className="p-2 text-sm">Jobs</li>
              <li className="p-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="p-2 text-sm">Claim</li>
              <li className="p-2 text-sm">Policy</li>
              <li className="p-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer