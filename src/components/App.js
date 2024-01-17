import React from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import axios from 'axios';
import SelectBox from './SelectBox';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<SelectBox/>} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
