import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './EthernetOAM_Property1Default.module.css';
import { Vector3Icon } from './Vector3Icon.js';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';

interface Props {
  className?: string;
}
/* @figmaId 187:819 */
export const EthernetOAM_Property1Default: FC<Props> = memo(function EthernetOAM_Property1Default(props = {}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >EathernetOAM
        {!isOpen ? (
          <SlArrowRight style = {{transition: 'transform 0.15s ease-in-out'}} stroke="#c3c3c3" strokeWidth={50} color='#c3c3c3' size={16}/>
        ) : (
          <SlArrowRight style = {{transform: 'rotate(90deg)', transition: 'transform 0.15s ease-in-out'}}  stroke="white" strokeWidth={50} color='white' size={16}/>
        )
        }
        </button>
  );
});
