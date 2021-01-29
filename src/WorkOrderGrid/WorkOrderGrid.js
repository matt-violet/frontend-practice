import React from 'react';
import WorkOrder from '../WorkOrder/WorkOrder.js';
import './WorkOrderGrid.css';

function WorkOrderGrid({ orders }) {

  return (
    <div className="work-order-grid">
      {orders.map((order) => {
        return (
          <WorkOrder order={order} key={order.id} />
        )
      })}
    </div>
  )
}


export default WorkOrderGrid;
