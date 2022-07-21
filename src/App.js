import "./App.css";
import SearchBar from "./components/Search";
import Weather from "./components/Weather";

import { WeatherContextProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <SearchBar />
        <Weather />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
