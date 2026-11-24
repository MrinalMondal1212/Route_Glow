import React from 'react'

const BusResult = () => {
  const [price, setPrice] = useState(2000);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <h1 className="text-[var(--color-yellow)] text-3xl font-extrabold">
          Explore Buses
        </h1>

        <p className="text-gray-400 mt-3">
          Find your perfect bus and discover your next destination.
        </p>
      </div>
      <div className="max-w-[1200px] flex justify-between mx-auto px-3 py-5">
        <div>
          <div className="h-[480px] w-[250px] p-4 bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="flex text-gray-400 justify-between font-bold border-b border-gray-700 pb-3">
              <p>FILTERS</p>
              <button
                className="text-sm text-blue-400 hover:text-blue-300"
                onClick={() => setPrice(2000)}
              >
                Reset All
              </button>
            </div>

            <div className="text-gray-400 font-semibold">
              <p className="text-gray-500 font-bold mb-3 mt-4">Bus Type</p>

              {["All", "Non AC", "AC", "Luxury", "Sleeper", "Executive"].map(
                (type) => (
                  <p
                    key={type}
                    className="flex gap-2 items-center mb-3 hover:text-[var(--color-yellow)] cursor-pointer"
                  >
                    <CircleDot size={17} />
                    {type}
                  </p>
                ),
              )}

              <div className="border-t border-gray-700 mt-5 pt-4">
                <p className="text-gray-500 font-bold mb-4">Price Range</p>

                <div className="flex justify-between text-sm mb-3">
                  <span>₹200</span>
                  <span className="text-blue-400 font-bold">₹{price}</span>
                </div>

                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹200</span>
                  <span>₹5000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bus cards are showing herer !! */}
        <div className=" flex flex-col gap-3">
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">INR 1200</p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">Select Seats</NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">INR 1200</p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">Select Seats</NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">INR 1200</p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">Select Seats</NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">INR 1200</p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">Select Seats</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusResult
