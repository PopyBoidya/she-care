import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Loign from "../Log/loging/Login";
import RequestPads from "../Page/RequestPads/RequestPads";
import Learn from "../Page/Learn/Learn";
import Volunteer from "../Page/Volunteer/Volunteer";
import VolunteerPortal from "../VolunteerPortal";

// Define the wait function
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Dynamically import the Root component
const Root = lazy(() => wait(3000).then(() => import("../Root")));

const Routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Root />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/request-pad",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RequestPads />
          </Suspense>
        ),
      },
      {
        path: "/learn",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Learn />
          </Suspense>
        ),
      },
      {
        path: "/apply-volunteer",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Volunteer />
          </Suspense>
        ),
      },
      
      
    ],
  },

  {
    path: "/volunteer/login",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <VolunteerPortal />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/volunteer/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Loign />
          </Suspense>
        ),
      },
    ]
  }

]);

export default Routers;
