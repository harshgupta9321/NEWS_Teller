
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pageSize=6

  const[progress,setProgress]=useState(0)
   return (  
      <div>
         <Router>
            <Navbar />
            <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
            <Routes>
              <Route exact strict path="/" element={<News setProgress={setProgress} key="home" pageSize={pageSize} category={"general"} country={"in"} />} ></Route>

              <Route exact strict path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} category={"business"} country={"in"} />} ></Route>

              <Route exact strict path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category={"entertainment"} country={"in"} />} ></Route>

              <Route exact strict path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} category={"general"} country={"in"} />} ></Route>

              <Route exact strict path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} category={"health"} country={"in"} />} ></Route>

              <Route exact strict path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} category={"science"} country={"in"} />} ></Route>

              <Route exact strict path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} category={"sports"} country={"in"} />} ></Route>

              <Route exact strict path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category={"technology"} country={"in"} />} ></Route>
            </Routes>
          </Router>
      </div>
  
    )
    }
  export default App
    