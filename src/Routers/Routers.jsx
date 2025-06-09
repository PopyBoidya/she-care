import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Loign from "../Log/loging/Login";
import Register from "../Log/Register/Register";
import Forget from "../Log/Forget/Forget";
import RequestPads from "../Page/RequestPads/RequestPads";
import Admin from "../Admin";
import Learn from "../Page/Learn/Learn";
import Volunteer from "../Page/Volunteer/Volunteer";

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
        path: "/volunteer",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Volunteer />
          </Suspense>
        ),
      },
      
      
    ],
  },

  {
    path: "/admin",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Admin />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Loign />
          </Suspense>
        ),
      },
      {
        path: "/admin/register",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/admin/forgot-password",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Forget />
          </Suspense>
        ),
      },
    ]
  }

]);

export default Routers;
