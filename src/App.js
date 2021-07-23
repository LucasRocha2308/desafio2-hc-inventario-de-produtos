import "./App.css";
import Header from "./components/Header";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div>
          <Routes />
          <GlobalStyle />
        </div>
      </header>
    </div>
  );
}

export default App;
