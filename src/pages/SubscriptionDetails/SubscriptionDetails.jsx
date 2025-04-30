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

  const { title, price, frequency, status, customers, teas } = subscription.attributes;

  return (
    <div className="details-container">
      <h1>{title}</h1>
      <p>Price: ${price}</p>
      <p>Frequency: {frequency}</p>
      <p>Status: {status}</p>


      <h3>Customers</h3>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.firstname} {customer.lastname} ({customer.email})</li>
        ))}
      </ul>

      <h3>Teas</h3>
      <ul>
        {teas.map(tea => (
          <li key={tea.id}>{tea.name} - {tea.description}</li>
        ))}
      </ul>

      <Link to="/">Back to list</Link>
    </div>
  );
}

export default SubscriptionDetails;
