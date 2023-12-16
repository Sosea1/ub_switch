import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './IPv6IMPB_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 241:881 */
export const IPv6IMPB_Property1Default: FC<Props> = memo(function IPv6IMPB_Property1Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <>1</>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <div>2</div>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <>3</>;
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
      for (let i = 1; i < 4; i++)
      {
        let key_ = "v6IMPB-"+i
        if(key_ != key)
        {
         (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
        }
       
      }
      
      }
      
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('security_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "v6IMPB" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("v6IMPB") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('v6IMPB')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "v6IMPB" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >IPv6 IMPB
        {value != "v6IMPB" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "v6IMPB" && (
        <div className={classes.div_bar}>
          <button id='v6IMPB-1' style={{background:'#5AC3F8'}} onClick={() => click1("v6IMPB-1", ComponentOne)} className={classes.inner_sidebar_button}>•  IPv6-MAC Binding</button>
          <button id='v6IMPB-2' onClick={() => click1("v6IMPB-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  ND Detection</button>
          <button id='v6IMPB-3' onClick={() => click1("v6IMPB-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  IPv6 Source Guard</button>
        </div>)}
        
     </> 
  );
});
