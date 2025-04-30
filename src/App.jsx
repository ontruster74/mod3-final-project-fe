import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionsList from './pages/SubscriptionsList/SubscriptionsList';
import SubscriptionDetails from './pages/SubscriptionDetails/SubscriptionDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h2>Tea Subscription Dashboard</h2>
        </header>
        <Routes>
          <Route path="/" element={<SubscriptionsList />} />
          <Route path="/details/:id" element={<SubscriptionDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

