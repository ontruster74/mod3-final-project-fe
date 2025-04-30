import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionsList from './pages/SubscriptionsList/SubscriptionsList';
import SubscriptionDetails from './pages/SubscriptionDetails/SubscriptionDetails';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Router>
        <header>
          <h2>Tea Subscription Admin Portal</h2>
        </header>
        <Routes>
          <Route path="/" element={<SubscriptionsList />} />
          <Route path="/details/:id" element={<SubscriptionDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

