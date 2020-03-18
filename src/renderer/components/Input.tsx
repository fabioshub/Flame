import React from 'react';
import lineHolder from '../../storage';

export default (): JSX.Element => {
    return <input onKeyPress={event => {
        if (event.key === 'Enter') {
          lineHolder.addLine((event.target as HTMLInputElement).value);
        }
      }}></input>
};