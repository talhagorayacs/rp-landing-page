import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portflio'
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import OurTeam from './components/OurTem';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // whether animation should happen only once
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "our-team",
          element: <OurTeam />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
