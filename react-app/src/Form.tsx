import React, { useState } from 'react';
import './form.css';
// import styles from './form.module.css';

interface Props {
  setVisible: (value: React.SetStateAction<boolean>) => void;
}

// const StyledForm = styled.form`
//   border: ${(props) => `1px solid ${props.color}`};
// `;

const Form = ({ setVisible }: Props) => {
  // if (visible) return null;
  const inputs = ['name', 'email', 'age'];
  const obj = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 };

  return (
    <form className={'form'}>
      {/* <StyledForm color={'blue'} /> */}
      <input
      // value={state.name}
      // onChange={(event) =>
      //   setState((state) => ({
      //     ...state,
      //     name: event.target.value,
      //   }))
      // }
      ></input>
      <button onClick={() => setVisible((visible) => !visible)}>TOGGLE1</button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {inputs.map((element) => {
          return <input key={element} placeholder={element} />;
        })}
      </div>
      {/* {Object.keys(obj).map((element) => {
        return <input placeholder={element} />;
      })} */}
    </form>
  );
};

export default Form;
