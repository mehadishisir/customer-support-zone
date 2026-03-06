import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TicketList from "./components/TicketList";

function App() {
  return (
    <>
      {/* navbar   */}
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* ticket list */}
      <TicketList></TicketList>
    </>
  );
}

export default App;
