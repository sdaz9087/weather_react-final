import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column  justify-content-around vw-100 vh-100">
        <header>
          <h1 className="pt-4"> The Weather Forecast</h1>
        </header>
        <div className="weather-app">
          <Weather defaultCity="Tehran" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
