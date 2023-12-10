import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Basic_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowRight } from 'react-icons/sl';

interface Props {
  className?: string;
}
/* @figmaId 173:989 */
export const Basic_Property1Default: FC<Props> = memo(function Basic_Property1Default(props = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenn, settingIsOpen] = useState(false)
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
          <button key={1} onClick={() => settingIsOpen((prev)=>!prev)} style={!isOpenn ? {} : {background: '#5AC3F8', color: 'white'} } className={classes.inner_sidebar_button}>•  Port</button>
          <button key={2} onClick={() => settingIsOpen((prev)=>!prev)} style={!isOpenn ? {} : {background: '#5AC3F8', color: 'white'} } className={classes.inner_sidebar_button}>•  DDM</button>
          <button key={3} onClick={() => settingIsOpen((prev)=>!prev)} style={!isOpenn ? {} : {background: '#5AC3F8', color: 'white'} } className={classes.inner_sidebar_button}>•  LAG</button>
          <button key={4} onClick={() => settingIsOpen((prev)=>!prev)} style={!isOpenn ? {} : {background: '#5AC3F8', color: 'white'} } className={classes.inner_sidebar_button}>•  MAC Address</button>
          
        </div>)}
     </>  
  );
});
