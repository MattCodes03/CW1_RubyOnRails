import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Presentation from "./Presentation";
import Tutorial from "./Tutorial";
import NoMatch from "./NoMatch";
import Header from "./Header";

function Routes() : React.JSX.Element {

  const Routes =  createHashRouter([
    {
      path: "/",
      element: (<><Header/><Presentation /></>),
    },
    {
      path: "/tutorial",
      element: (<><Header/><Tutorial /></>),
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ], {
    basename: ''
});

  return <RouterProvider router={Routes} />;  
}
export default Routes;