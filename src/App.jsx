import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Header />} />
      <Route
        path="/RegisterC8Conference"
        element={
          <>
            <div className="home__link">
              <span>
                <Link to="/">HOMEPAGE</Link>
              </span>
            </div>
            <div className="embedded-form">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScgrDQu3jSJvc-LX058qWWXj_j6WErkJstbzhB_ejjzsDLrAQ/viewform?embedded=true"
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
