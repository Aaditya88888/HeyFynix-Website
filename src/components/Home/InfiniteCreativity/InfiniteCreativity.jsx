import React from "react";

const InfiniteCreativity = () => {
  return (
    <>
      <section className="px-16 py-10 bg-black text-white">
        <div className="heading-container mb-8">
          <h1 className="text-4xl md:text-5xl font-bold ml-50">
            Beyond Boundary
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold">
            Infinite Creativity
          </h1>
        </div>

        <div className="main-container flex flex-col md:flex-row gap-8">
          {/* Image Container - 45% width */}
          <div className="image-container md:w-[50%] flex flex-col">
            <img
              src="https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg"
              alt="Showreel"
              className="w-full h-auto object-cover rounded-lg z-50"
            />
            <p className="mt-4  text-lg font-medium">Check Out our Showreel</p>
          </div>

          {/* Text Container - 55% width */}
          <div className="text-container md:w-[60%] flex justify-center gap-20">
            <h4 className="text-2xl md:text-3xl font-semibold mb-4">
              Creativity is the Foundation of what we do
            </h4>
            <p className="text-lg leading-relaxed">
              Need your brand to Stand Out? We don’t just design — we ignite.
              Our Results speak. We let them roar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfiniteCreativity;
