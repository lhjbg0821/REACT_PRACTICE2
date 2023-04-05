import { Component } from "react";

class ClassComp extends Component {
  state = {
    count: 0,
  };

  setCount(num) {
    this.setState({
      count: num,
    });
  }

  render() {
    // this는 자기 자신을 가리킴
    return (
      <div className="bg-blue-100 w-1/2 min-h-screen flex flex-col justify-center items-center">
        {this.state.count}
        <button
          className="bg-purple-300 px-4 py-2 rounded-md
        "
          onClick={() => this.setCount(this.state.count + 1)}
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComp;
