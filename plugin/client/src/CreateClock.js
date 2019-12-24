import React from 'react';
import axios from 'axios';

class ClockCreate extends React.Component {
  state = { clockName: 'kuku'}
  constructor (props) {super(props);}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className="formtext">Form</span>
        <input
          type="text"
          value={this.state.clockName}
          onChange={event => this.setState({ clockName: event.target.value })}
          placeholder="Enter Clock name"
          required
        />
        <button>Create</button>
      </form>
    )
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post('/api/clocks', {name: this.state.clockName});
    this.setState({ clockName: '' });
  };
}

export default ClockCreate