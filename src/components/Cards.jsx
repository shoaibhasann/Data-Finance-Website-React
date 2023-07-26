import React from "react";
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
    return (
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
          <div className="w-full shadow-xl flex flex-col p-4 m-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mt-[-3rem] mx-auto" src={Single} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>
            </div>
            <button className="bg-[#00df9a] text-black w-[200px] mx-auto rounded my-6 py-3 font-medium hover:bg-black hover:text-[#00df9a] hover:border-2 hover:border-customColor">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mt-[-3rem] mx-auto bg-transparent" src={Double} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
            <p className="text-center text-4xl font-bold">$199</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8">3 Users Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 10 GB</p>
            </div>
            <button className="text-[#00df9a] bg-black w-[200px] mx-auto rounded my-6 py-3 font-medium hover:text-black hover:bg-[#00df9a] hover:border-2 hover:border-black">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 m-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mt-[-3rem] mx-auto" src={Triple} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
            <p className="text-center text-4xl font-bold">$299</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
              <p className="py-2 border-b mx-8">10 Users Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 20 GB</p>
            </div>
            <button className="bg-[#00df9a] text-black w-[200px] mx-auto rounded my-6 py-3 font-medium hover:bg-black hover:text-[#00df9a] hover:border-2 hover:border-customColor">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    );
}

export default Cards