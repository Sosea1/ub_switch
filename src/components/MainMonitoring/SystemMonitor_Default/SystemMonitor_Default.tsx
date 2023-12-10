import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemMonitor_Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 187:863 */
export const SystemMonitor_Default: FC<Props> = memo(function SystemMonitor_Default(props = {}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button className={classes.sidebar_button} onClick={() => setIsOpen((prev)=>!prev)} style={!isOpen ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >System Monitor
        </button>
  );
});
