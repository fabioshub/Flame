import React from 'react';
import lineHolder from '../../storage';
import Line from './Line';
import shelljs from 'shelljs';
import sExec from 'shelljs.exec';
import { animateScroll } from "react-scroll";

const Basic = (): JSX.Element => {
    const [lines, setLines] = React.useState<Array<string>>([]);
    const [shouldTick, setShouldTick] = React.useState<boolean>(false);
    const inputRef = React.useRef<any>(null);
    const historyRef = React.useRef<any>(null);

    const enter = async (event: React.KeyboardEvent<HTMLInputElement>):Promise<void> => {
        if (event.key === 'Enter') {
            const neAr: Array<string> = [...lines];
            const val: string = (event.target as HTMLInputElement).value;
            const commands: Array<string> = val.split(' ');
            const command: string = commands[0];
            commands.shift();
            neAr.push(val)
            setLines(neAr);
            const shellCopy = shelljs as any;
            let response: string = '';
            console.log(sExec(val))
            try {
                response = sExec(val).stdout.replace(/\n/ig, ' ').filter(i => i.length);
            } catch(e) {};
            let keys = response.split(' ')
            console.log(keys)
            keys.forEach((k: any) => {
                neAr.push(k)
            })
            setLines(neAr);
            inputRef.current.value = '';
            await setTimeout(() => {}, 1000);
            animateScroll.scrollToBottom({
                containerId: "history-lines"
              });
        }
    };

    const blink = (): void => {
        setShouldTick(true);
    };

    const stopBlink = (): void => {
        setShouldTick(false);
    };

    return <>
        <div className='display-holder'>
        <div className='history-lines' ref={historyRef} id='history-lines'>
        {lines.map((s: string, i: number)=> <Line key={i}>{s}</Line>)}
        </div>
        <div className='inputLineHolder'><span className={`ticker ${shouldTick ? 'active' :  'passive'}`}>$</span><input className={`inputLine ${shouldTick ? 'active' :  'passive'}`} ref={inputRef} onFocus={blink} onBlur={stopBlink} onKeyPress={enter}/></div> 
        </div>
        <span className='pwd-line'>{shelljs.pwd()}</span>
        </>;
}

export default Basic;