import React, { Component } from 'react';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value}, function() {
      this.props.onChange(this.state.value);
    })
  }

  render() {
    return (
      <div>
        <select className="form-control" onChange={this.handleChange.bind(this)}>
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
      </div>
    );
  }
}

export default Select;


