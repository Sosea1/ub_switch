import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './AccessSecurity_Property1Defaul.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 241:700 */
export const AccessSecurity_Property1Defaul: FC<Props> = memo(function AccessSecurity_Property1Defaul(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <>1</>
   };
   
   
   const ComponentTwo = (): React.ReactNode =>  {
   
    return <div>2</div>;
   
   };
  
   const ComponentThree = (): React.ReactNode =>  {
   
    return <>3</>;
   };

   const ComponentFour = (): React.ReactNode =>  {
   
    return <>4</>;
   };

   const ComponentFive = (): React.ReactNode =>  {
   
    return <>5</>;
   };

   const ComponentSix = (): React.ReactNode =>  {
   
    return <>6</>;
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
      for (let i = 1; i < 7; i++)
      {
        let key_ = "AccessSecurity-"+i
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
    <button id = "AccessSecurity" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("AccessSecurity") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('AccessSecurity')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "AccessSecurity" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Access Security
        {value != "AccessSecurity" ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {value == "AccessSecurity" && (
        <div className={classes.div_bar}>
          <button id='AccessSecurity-1' style={{background:'#5AC3F8'}} onClick={() => click1("AccessSecurity-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Access Control</button>
          <button id='AccessSecurity-2' onClick={() => click1("AccessSecurity-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  HTTP Config</button>
          <button id='AccessSecurity-3' onClick={() => click1("AccessSecurity-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  HTTPS Config</button>
          <button id='AccessSecurity-4' onClick={() => click1("AccessSecurity-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  SSH Config</button>
          <button id='AccessSecurity-5' onClick={() => click1("AccessSecurity-5", ComponentFive)}  className={classes.inner_sidebar_button}>•  Telnet Config</button>
          <button id='AccessSecurity-6' onClick={() => click1("AccessSecurity-6", ComponentSix)}  className={classes.inner_sidebar_button}>•  Serial Port Config</button>
        </div>)}
        
     </> 
  );
});
