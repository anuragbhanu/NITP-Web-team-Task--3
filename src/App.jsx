import React from "react"
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import InstaGallary from "./Components/InstaGallary/InstaGallary";
import YoutubeGallary from "./Components/YoutubeGallary/YoutubeGallary";
import Layout from "./layout";
import "./index.css";

// Creating a Brower Router to Navigate using Header
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path='' element={<InstaGallary />} />
      <Route path="instagram" element={<InstaGallary />} />
      <Route path="youtube" element={<YoutubeGallary />} />
    </Route>
  )
);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
