import React from 'react';
import './App.css';
import Filter from './Filter/Filter.js';
import WorkOrderGrid from './WorkOrderGrid/WorkOrderGrid.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrders: [],
      nameFilter: "",
      sortEarliestFirst: true
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://api.hatchways.io/assessment/work_orders');
    const data = await response.json();
    this.setState({
      workOrders: data.orders
    })
  }

  handleInput(event) {
    this.setState({
      nameFilter: event.target.value
    })
  }

  handleToggle() {
    this.sortOrders();
  }

  sortOrders() {
    const { sortEarliestFirst, workOrders } = this.state;
    const prevOrders = [...workOrders];
    const sortedOrders = prevOrders.sort((a, b) => {
      const date1 = a.deadline;
      const date2 = b.deadline;
      return sortEarliestFirst ? date2 - date1 : date1 - date2;
    })
    this.setState({
      sortEarliestFirst: !this.state.sortEarliestFirst,
      workOrders: sortedOrders
    })
  }

  
  render() {
    const { workOrders, nameFilter, sortEarliestFirst } = this.state;

    if (workOrders && workOrders.length) {
      return (
        <div className="App">
          <Filter handleInput={this.handleInput}
            handleToggle={this.handleToggle}
            sortEarliestFirst={sortEarliestFirst}
          />
          <WorkOrderGrid orders={workOrders}
            nameFilter={nameFilter}
            sortEarliestFirst={sortEarliestFirst}
          />
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default App;
