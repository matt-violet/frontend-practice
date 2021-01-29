import React from 'react'

function WorkOrder({ order }) {
  return (
    <div className="work-order">
      <p>{order.id}</p>
    </div>
  )
}

export default WorkOrder
