import './SubscriptionsList.css'
import packageIcon from '../../assets/package.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SubscriptionsList() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = () => {
    fetch('http://localhost:3000/subscriptions')
      .then(res => res.json())
      .then(data => setSubscriptions(data.data));
  };

  const toggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "cancelled" : "active";

    fetch(`http://localhost:3000/subscriptions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription: { status: newStatus }
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update status");
        return res.json();
      })
      .then(() => fetchSubscriptions())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Subscriptions</h1>
      <ul className="subscription-list">
        {subscriptions.map((sub) => {
          const { id, attributes } = sub;
          const { title, status } = attributes;

          return (
            <li key={id} className="subscription-item">
              <Link to={`/details/${id}`}>
                <div>
                  <strong>{title}</strong>
                  <img src={packageIcon} alt="Subscription Icon" />
                </div>
              </Link>
              <button
                className={`subscription-button ${status}`}
                onClick={() => toggleStatus(id, status)}
              >
                {status === 'active' ? 'Active' : 'Cancelled'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubscriptionsList;
