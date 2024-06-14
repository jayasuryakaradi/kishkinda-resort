import React from "react";
import Navbar from "./Components/Navabr/Navbar";
import OurRooms from "./Components/OurRooms/OurRooms";
import Attractions from "./Components/Attractions/Attractions";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
