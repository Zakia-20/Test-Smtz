import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./layout/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;
