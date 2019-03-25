// Building the toggle component

import React, { Component } from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import { Switch } from '../switch'

// Use a state updater function to avoid issues with batching
function updateToggleState(prevState) {
  return {
    on: !prevState.on,
  };
}

class Toggle extends Component {
  state = { on: false };

  onClickToggle = () => {
    const { onToggle } = this.props;
    const { on } = this.state;

    this.setState(
      updateToggleState,
      () => onToggle(!on),
    );
  }
  
  render() {
    const { on } = this.state;
    
    return (
      <Switch
        onClick={this.onClickToggle}
        on={on}
      />
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
