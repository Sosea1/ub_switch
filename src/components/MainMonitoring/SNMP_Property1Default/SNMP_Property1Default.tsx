import { memo, useEffect, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';


import classes from './SNMP_Property1Default.module.css';

import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'
import { createRoot } from 'react-dom/client';

interface Props {
  className?: string;
}




export const SNMP_Property1Default: FC<Props> = memo(function SNMP_Property1Default(props = {}) {
  
  
const ComponentOne =(): React.ReactNode  => {

  return <div>Component One</div>;
  
 };
 
 
 const ComponentTwo = (): React.ReactNode =>  {
 
  return <div >Component Two</div>;
 
 };
 

  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);


  const [isOpen, setIsOpen] = useState(false)
  const [isOpenn, settingIsOpen] = useState(false)

var c:any;

  function click1(key:string, newComponent:any):void {
    let test = (document.getElementById(key) as HTMLElement);
    
    let a = window.getComputedStyle(test);
    console.log(a.backgroundColor);
    console.log(test);
    if (a.backgroundColor != 'rgb(226, 245, 255)')
    {
      test.style.backgroundColor = '#E2F5FF';
    }
    else
    {
      test.style.backgroundColor = '#5AC3F8';
    }
    for (let i = 1; i < 6; i++)
    {
      if(i != +key)
      {
       (document.getElementById(i.toString()) as HTMLElement).style.backgroundColor = '#E2F5FF';
      }
     
    }
    c = newComponent
    setCurrentComponent(newComponent);
    // useEffect(() => {setCurrentComponent(newComponent)}, [])
    
    var x = document.getElementById('monitoring_frame') as HTMLElement;
    
    x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    

// const container:any = document.getElementById('monitoring_frame');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(currentComponent as ReactElement);
    }
    console.log(c);
    useEffect(() => {
      setCurrentComponent(c)
    }, [])


  return (
    <>
    <button className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >SNMP
        {!isOpen ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
        {isOpen && (
        <div className={classes.div_bar}>
          <button id='1' onClick={() => click1("1", ComponentOne)} className={classes.inner_sidebar_button}>•  Global Config</button>
          <button id='2' onClick={() => click1("2", ComponentOne)}  className={classes.inner_sidebar_button}>•  SNMP v1/v2c</button>
          <button id='3' onClick={() => click1("3", ComponentTwo)}  className={classes.inner_sidebar_button}>•  SNMP v3</button>
          <button id='4' onClick={() => click1("4", ComponentOne)}  className={classes.inner_sidebar_button}>•  Notification</button>
          <button id='5' onClick={() => click1("5", ComponentOne)}  className={classes.inner_sidebar_button}>•  RMON</button>
          
        </div>)}
        
     </>  
  );
});


