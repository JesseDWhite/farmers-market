import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MarketCalendar from "./Calendar";
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketCalendar />
      <Footer />
    </React.Fragment>
  );
}

export default App;