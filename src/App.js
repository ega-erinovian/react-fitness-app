import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import Material UI
import { Box } from "@mui/material";

// Import components & pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App