import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MarketCalendar from "./Calendar";
import MarketSchedule from "./MarketSchedule";
import AvailableProduce from "./AvailableProduce";
import './../App.css';
import './../Header.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketCalendar />
      <MarketSchedule />
      <AvailableProduce />
      <Footer />
    </React.Fragment>
  );
}

export default App;