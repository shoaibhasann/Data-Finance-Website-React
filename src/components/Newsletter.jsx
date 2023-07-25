import React from "react";


const Newsletter = () => {
    return (
      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="py-4">
            <div className="flex flex-col items-center sm:flex-row justify-between w-full sm:gap-2">
              <input class="p-3 flex w-full rounded text-black" type="email" placeholder="Enter Email" />
              <button className="bg-[#00df9a] text-black w-[200px] mx-auto rounded my-6 py-3 font-medium hover:bg-black hover:text-[#00df9a] hover:border-2 hover:border-customColor">Notify Me</button>
            </div>
            <p>We care about the protection of your data, Read our <span className="text-[#00df9a] cursor-pointer"> Privacy Policy.</span></p>
          </div>
        </div>
      </div>
    );
}

export default Newsletter