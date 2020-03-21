import React, {Component} from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";

class  App extends Component {
  render() {
    return (
      <div>
        <h1>Re-vents</h1>
        <EventDashboard />
      </div>
    );
  }
}

export default App;