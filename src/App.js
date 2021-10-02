import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import TopContent from './Components/TopContent/TopContent';
import History from './Components/History/History';
import Geography from './Components/Geography/Geography';
import Sponsorships from './Components/Sponsorships/Sponsorships';
import Ambassadors from './Components/Ambassadors/Ambassadors';
import Promo from './Components/Promo/Promo';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/">
            <Navbar />
            <TopContent />
            <History />
            <Geography />
            <Sponsorships />
            <Ambassadors />
            <Promo />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
