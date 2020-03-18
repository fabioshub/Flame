import React from  'react';
import Basic from './Basic';
import Input from './Input';
import shelljs from 'shelljs';

export default (): JSX.Element => {
    return <div className='lines-holder'>
        <Basic />
        {/* <Input /> */}
    </div>
};