import React, { Component } from 'react';

class Text extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  handleChange(event) {
    if(event.target.value < 1) {
      alert('Forbidden action!');
      return;
    }
    this.setState({value: event.target.value}, function() {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input className="form-control" type="number" value={this.state.value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Text;

