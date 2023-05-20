import { useState } from 'react';

// DEFINED ALL LOGIC IN THIS FILE.
/**
 * ToggleSwitch: custom hook
 * Toggles boolean
 */
const ToggleSwitch = (start=false) => {
  const [ state, setState ] = useState(start);

  const toggleState = () => {
    setState(state => !state);
  }

  return [state, toggleState];
}

export default ToggleSwitch;
