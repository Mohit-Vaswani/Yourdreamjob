import CompanyCard from "./Components/CompanyCard";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-215720867-1', [options]);

ReactGA.pageview(window.location.pathname);

function App() {
  return (
    <div className="App">
      <CompanyCard/>
    </div>
  );
}

export default App;