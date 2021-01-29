import React from 'react';
import './App.css';
import Filter from './Filter/Filter.js';
import WorkOrderGrid from './WorkOrderGrid/WorkOrderGrid.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrders: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://api.hatchways.io/assessment/work_orders');
    const orders = await response.json();
    this.setState({
      workOrders: orders.orders
    })
  }
  
  render() {
    const { workOrders } = this.state;
    console.log(workOrders)

    if (workOrders && workOrders.length) {
      return (
        <div className="App">
          <Filter />
          <WorkOrderGrid orders={workOrders} />
        </div>
      )
    } else {
      return (
        <div>yo</div>
      )
    }
  }
}

export default App;
