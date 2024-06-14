import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Rooms from "../pages/Rooms/Rooms";
import Facilities from "../pages/Facilities/Facilities";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="rooms" element={<Rooms/>}/>
        <Route path="facilities" element={<Facilities/>}/>
        <Route path="contact-us" element={<ContactUs/>}/>
    </Route>
))