import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesSearchBooks from "../page/Search/Search";
import PageForm from "../page/Form/Formbooks";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesSearchBooks/>} />
        <Route path="/create" element={<PageForm/>} />
        <Route path="/edit/:id" element={<PageForm />} />
      </Routes>
    </Router>
  );
};

export default Root;