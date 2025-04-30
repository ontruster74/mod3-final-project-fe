import './SubscriptionDetails.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function SubscriptionDetails() {
  const { id } = useParams();
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/subscriptions/${id}`)
      .then(res => res.json())
      .then(data => setSubscription(data.data));
  }, [id]);

  if (!subscription) return <p>Loading...</p>;

  const { title, price, frequency, customers, teas } = subscription.attributes;

  return (
    <div className="details-container">
      <h1>{title}</h1>
      <p>Price: ${price}</p>
      <p>Frequency: {frequency}</p>

      <h3>Customers</h3>
      <ul>
        {customers.map(c => (
          <li key={c.id}>{c.name} ({c.email})</li>
        ))}
      </ul>

      <h3>Teas</h3>
      <ul>
        {teas.map(t => (
          <li key={t.id}>{t.name} - {t.description}</li>
        ))}
      </ul>

      <Link to="/">Back to list</Link>
    </div>
  );
}

export default SubscriptionDetails;
