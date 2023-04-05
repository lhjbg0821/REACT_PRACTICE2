import { Component } from "react";

class ClassComp extends Component {
  state = {
    count: 0,
  };

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default ClassComp;
