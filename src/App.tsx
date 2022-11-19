import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
const SingleEntity = React.lazy(() => import("./components/SingleEntity"));
const Notfound = React.lazy(() => import("./components/Notfound"));

function App() {
  return (
    <React.Suspense fallback={<h1>Loading ...</h1>}>
      <div className="App">
        <p className="right-0 left-0 bg-white z-10 p-4 font-bold text-3xl fixed top-0 h-16 ">E Commerce App</p>
          <div className="mt-16">
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single/:entityId" element={<SingleEntity />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>
          </div>
      </div>
    </React.Suspense>
  );
}

export default App;
