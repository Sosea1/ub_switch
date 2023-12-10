import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TraficMonitor_Default.module.css';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';

interface Props {
  className?: string;
}
/* @figmaId 187:853 */
export const TraficMonitor_Default: FC<Props> = memo(function TraficMonitor_Default(props = {}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >Traffic Monitor
        </button>
  );
});
