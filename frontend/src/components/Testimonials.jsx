
import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mrinal",
    rating: 5,
    description:
      "Amazing travel experience! The booking process was smooth and the bus was very comfortable. Highly recommended.",
  },
  {
    name: "Rahul Sharma",
    rating: 5,
    description:
      "Very professional service. The bus was clean, staff were helpful, and the journey was completely hassle-free.",
  },
  {
    name: "Priya Das",
    rating: 4,
    description:
      "Had a wonderful experience travelling with RouteGlow. Easy booking and excellent customer support.",
  },
  {
    name: "Arjun Roy",
    rating: 5,
    description:
      "One of the best bus booking experiences. Everything was well managed and the journey was comfortable.",
  },
  {
    name: "Sneha Gupta",
    rating: 5,
    description:
      "Loved the service! The seats were comfortable and the bus arrived on time. Will definitely book again.",
  },
];

const Testimonials = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-[#1e40af] overflow-hidden">

      <div className="text-center mb-16 px-4">
        <p className="text-blue-400 font-semibold tracking-[3px] text-sm">
          CUSTOMER EXPERIENCES
        </p>

        <h2 className="text-white text-4xl md:text-5xl font-extrabold mt-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Real experiences from travellers who choose RouteGlow
          for comfortable and memorable journeys.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">

        {/* Side fade effect */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-36 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />

        <div className="absolute right-0 top-0 h-full w-20 md:w-36 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        {/* Infinite carousel */}
        <div className="flex w-max animate-review-scroll hover:[animation-play-state:paused]">

          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[380px] min-h-[250px]
              mx-3 p-6 rounded-2xl
              bg-[#0f172a] border border-blue-500/20
              hover:border-blue-400/60
              hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]
              transition-all duration-300 flex flex-col justify-between"
            >

              <div>
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    {/* Profile initial */}
                    <div className="w-12 h-12 rounded-full
                    bg-gradient-to-br from-blue-500 to-indigo-700
                    flex items-center justify-center
                    text-white text-xl font-bold
                    shadow-lg shadow-blue-500/20">
                      {review.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="text-white font-bold">
                        {review.name}
                      </h3>

                      <p className="text-gray-500 text-xs mt-1">
                        Verified Traveller
                      </p>
                    </div>

                  </div>

                  <Quote
                    size={28}
                    className="text-blue-400/40"
                  />

                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className={
                        i < review.rating
                          ? "fill-[#f59e0b] text-[#f59e0b]"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-7 mt-4">
                  "{review.description}"
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Testimonials;
