import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import Tours from "../Pages/Tours";
import TourDetails from "../Pages/TourDetails";
import Login from "../Pages/Login";
import SearchResultsList from "../Pages/SearchResultsList";
import Register from "../Pages/Register";
import ThankYou from '../Pages/ThankYou';
import ProtectedRoute from './ProtectedRoute';
import About from '../Pages/About';



const Router = () => {
  return (
    <Routes>
        <Route path = "/login" element = {<Login />} /> 
        <Route path = "/register" element = {<Register />} />
        <Route element = {<ProtectedRoute />}>
          <Route path = "/" element = {<Navigate to ="/home"/>} />
          <Route path = "/home" element = {< Home/>}/>
          <Route path = "/about" element = {<About />} />
          <Route path = "/tours" element = {<Tours />} />
          <Route path = "/tour/:id" element = {<TourDetails />} />
          <Route path = "/thank-you" element = {<ThankYou />} />
          <Route path = "/tours/search" element = {<SearchResultsList />} />
        </Route>
    </Routes>
  )
}

export default Router