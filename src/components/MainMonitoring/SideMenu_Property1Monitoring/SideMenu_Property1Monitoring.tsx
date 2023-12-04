import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EthernetOAM_Property1Default } from '../EthernetOAM_Property1Default/EthernetOAM_Property1Default';
import { SFlow_Property1Default } from '../SFlow_Property1Default/SFlow_Property1Default';
import { SNMP_Property1Default } from '../SNMP_Property1Default/SNMP_Property1Default';
import { SystemMonitor_Default } from '../SystemMonitor_Default/SystemMonitor_Default';
import { TraficMonitor_Default } from '../TraficMonitor_Default/TraficMonitor_Default';
import classes from './SideMenu_Property1Monitoring.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    sNMP?: ReactNode;
  };
}
/* @figmaId 16:170 */
export const SideMenu_Property1Monitoring: FC<Props> = memo(function SideMenu_Property1Monitoring(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        <SystemMonitor_Default />
        <TraficMonitor_Default />
        {props.swap?.sNMP || <SNMP_Property1Default />}
        <SFlow_Property1Default />
        <EthernetOAM_Property1Default />
      </div>
    </div>
  );
});
