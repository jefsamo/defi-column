import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import Article from "./pages/Article/Article";
import BeginnerGuide from "./pages/BeginnerGuide/BeginnerGuide";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <div className="subscribe-overview">
          <Subscribe />
        </div>
        <ScrollToTop />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/beginner-guide",
          element: <BeginnerGuide />,
        },
        {
          path: "/post/:id",
          element: <Article />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
