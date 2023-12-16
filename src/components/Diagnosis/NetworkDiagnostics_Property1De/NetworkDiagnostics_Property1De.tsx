import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './NetworkDiagnostics_Property1De.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import ReactDomServer from 'react-dom/server'
import { SlArrowRight } from 'react-icons/sl';
import { Ping } from '../Ping/Ping';
import { Tracert } from '../Tracert/Tracert';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const NetworkDiagnostics_Property1De: FC<Props> = memo(function NetworkDiagnostics_Property1De(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <Ping/>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <Tracert/>;
   
   };
  
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  
  
    const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };
  
  
    function click1(key:string, newComponent:any):void {
      let test = (document.getElementById(key) as HTMLElement);
      
      let a = window.getComputedStyle(test);
      if (a.backgroundColor != 'rgb(226, 245, 255)')
      {

      }
      else
      {
        test.style.backgroundColor = '#5AC3F8';
        setCurrentComponent(newComponent);
      }
      for (let i = 1; i < 3; i++)
      {
        let key_ = "NetworkD-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('diagnosis_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "NetworkD" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("NetworkD") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('NetworkD')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "NetworkD" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Network Diagnostics
        {value != "NetworkD" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "NetworkD" && (
        <div className={classes.div_bar}>
          <button id='NetworkD-1' style={{background:'#5AC3F8'}} onClick={() => click1("NetworkD-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Ping</button>
          <button id='NetworkD-2' onClick={() => click1("NetworkD-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  Tracert</button>
        </div>)}
     </> 
  );
});
