import React from "react";

const InfiniteCreativity = () => {
  return (
    <>
      <main className="text-white bg-black min-h-screen flex flex-col ">
        {/* Top Section */}
        <section className="top flex flex-col items-start justify-center py-16 text-left">
          <div className="heading-content space-y-2">
            <h1 className="text-5xl font-light">Beyond Boundary</h1>
            <h1 className="text-5xl font-light">Infinite Creativity</h1>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="bottom flex flex-wrap items-start justify-between py-16 gap-10">
          {/* Left */}
          <div className="left flex flex-col items-center w-full md:w-[40%] space-y-4">
            <div className="image-container w-full">
              <img
                src="https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg"
                alt=""
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="text-container text-center">
              <p className="text-lg">Check Out our Showreel</p>
            </div>
          </div>

          {/* Right */}
          <div className="right flex md:w-[55%] space-y-6 mt-10 md:mt-0 items-start">
            <div className="right flex md:w-[55%] mt-10 md:mt-0 items-start">
              <div className="left-text">
                <h2 className="text-3xl font-semibold">
                  Creativity is the Foundation of what we do
                </h2>
              </div>
              <div className="right-text">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Need your brand to Stand Out? We don’t just design — we
                  ignite. Our Results speak. We let them roar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InfiniteCreativity;
