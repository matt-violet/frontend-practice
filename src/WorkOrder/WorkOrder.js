import React, { useState, useEffect } from 'react';
import './WorkOrder.css';

function WorkOrder({ order }) {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const fetchWorker = async () => {
      const response = await fetch(`https://api.hatchways.io/assessment/workers/${order.workerId}`);
      const data = await response.json();
      setWorker(data.worker)
    }
    fetchWorker();
  })

  if (worker) {
    return (
      <div className="work-order">
        <div className="work-order__details">
          <p className="work-order__name">{order.name}</p>
          <p>{order.description}</p>
        </div>

        <div className="worker">
          <div className="worker__image">
            <img src={worker.image} alt="worker"/>
          </div>
          <div className="worker__details">
            <p>{worker.name}</p>
            <p>{worker.companyName}</p>
            <p>{worker.email}</p>
          </div>
        </div>
        <p className="work-order__deadline">{order.deadline}</p>


      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default WorkOrder;
