
import React from  'react';

interface Props {
    children: any;
}

export default (props: Props): JSX.Element => {
    return <div className='h-line'><span className='arrow'>></span>{props.children}</div>
};