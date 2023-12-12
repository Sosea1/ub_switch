import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classes from './Basic_Property1Default.module.css';
import { SlArrowRight } from 'react-icons/sl';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}

export const Basic_Property1Default: FC<Props> = memo(function Basic_Property1Default(props = {}) {
   
const ComponentOne =(): React.ReactNode  => {

  return <></>
 };
 
 
 const ComponentTwo = (): React.ReactNode =>  {
 
  return <></>;
 
 };

 const ComponentThree = (): React.ReactNode =>  {
 
  return <></>;
 };

 const ComponentFour = (): React.ReactNode =>  {
 
  return <></>;
 
 };

 const ComponentFive = (): React.ReactNode =>  {
 
  return <></>;
 
 };


  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);


  const [isOpen, setIsOpen] = useState(false)


  function click1(key:string, newComponent:any):void {
    let test = (document.getElementById(key) as HTMLElement);
    
    let a = window.getComputedStyle(test);
    console.log(a.backgroundColor)
    if (a.backgroundColor != 'rgb(90, 195, 248)')
    {
      test.style.backgroundColor = '#5AC3F8';
      setCurrentComponent(null);
    }
    else
    {
      test.style.backgroundColor = '#E2F5FF';
      setCurrentComponent(newComponent);
    }
    for (let i = 1; i < 5; i++)
    {
      let key_ = "Basic-"+i
      if(key_ != key)
      {
       (document.getElementById(key_) as HTMLElement).style.backgroundColor = '#E2F5FF';
      }
     
    }
    
    }
    
    useEffect(() => {
      setCurrentComponent(currentComponent)
      var x = document.getElementById('switching_frame') as HTMLElement;
      x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
    },[currentComponent])

  return (
      <>
      <button className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Basic
          {!isOpen ? (
            <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
          ) : (
            <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
          )
          }
          </button>
          {isOpen && (
          <div className={classes.div_bar}>
            <button id='Basic-1' onClick={() => click1("Basic-1", ComponentOne)} className={classes.inner_sidebar_button}>•  Port</button>
            <button id='Basic-2' onClick={() => click1("Basic-2", ComponentTwo)}  className={classes.inner_sidebar_button}>•  DDM</button>
            <button id='Basic-3' onClick={() => click1("Basic-3", ComponentThree)}  className={classes.inner_sidebar_button}>•  LAG</button>
            <button id='Basic-4' onClick={() => click1("Basic-4", ComponentFour)}  className={classes.inner_sidebar_button}>•  MAC Address</button>
            
            
          </div>)}
          
       </>  
  );
});
