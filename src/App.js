import React from 'react'
import './App.css'
import Header from './Component/header/Header'
import Home from './Component/Pages/Home';
// import Footer from './Component/footer/Footer';
import { Route, Routes } from "react-router-dom";
import FeatchData from './Component/Pages/FeatchData';
import Footer from './Component/footer/Footer';
import Error from './Component/ErrorPage/Error';
function App() {
  return (
    <>
    <Header/>
  
  
    <Routes>
       <Route exact path='/'  element={<Home/>}/>
       <Route path='/general'  element={<FeatchData cat="General"/>}/>
       <Route path='/business'  element={<FeatchData cat="Business"/>}/>
       <Route path='/entertainment'  element={<FeatchData cat="Entertainment"/>}/>
       <Route path='/health'  element={<FeatchData cat="Health"/>}/>
       <Route path='/Sports'  element={<FeatchData cat="Sports"/>}/>
       <Route path='/technology'  element={<FeatchData cat="Technology"/>}/>
       <Route path='/*' element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App