import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = (props) => {
  const { isChecked = false, onchange = () => {} } = props
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" onChange={onchange} checked={isChecked} className="checkbox" />
          <span className="slider" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 50px;
    height: 10px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: var(--dark);
    border-radius: 25px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
    box-shadow: inset 12px -4px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(50px);
    -ms-transform: translateX(50px);
    transform: translateX(20px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }`;

export default ToggleSwitch;
