import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './L2PT_Default.module.css';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 173:1556 */
export const L2PT_Default: FC<Props> = memo(function L2PT_Default(props = {}) {
  const ComponentOne = (): React.ReactNode =>  {
 
    return <div>1</div>;
   
   };
  
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setCurrentComponent(currentComponent)
    var x = document.getElementById('switching_frame') as HTMLElement;
    x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
  },[currentComponent])

  return (
    <button id = 'L2PT' className={classes.sidebar_button} onClick={() => {
    setIsOpen((prev)=>!prev); 
    const el = document.getElementById('L2PT') as HTMLElement;
    let a = window.getComputedStyle(el);
    if (a.background == 'rgb(13, 89, 127)')
      setCurrentComponent(null);
    else
      setCurrentComponent(ComponentOne);
    
    }} 
    style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >L2PT</button>
  );
});
