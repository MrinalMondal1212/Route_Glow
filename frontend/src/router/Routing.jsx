import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import ExploreBuses from "../pages/ExploreBuses";
import SelectSeats from "../components/SelectSeats";
import PassengerDetails from "../components/PassengerDetails";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "buses",
        element : <ExploreBuses/>
      },
      {
        path: "select-seats",
        element : <SelectSeats/>
      },
      {
        path: "passenger-details",
        element : <PassengerDetails/>
      }
    ],
  },
]);

export default Routing;
