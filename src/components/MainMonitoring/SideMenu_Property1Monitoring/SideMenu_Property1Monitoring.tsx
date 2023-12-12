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

// function SideMenuMonitoringButtonClick (key: string){

//   let list_names = ["SystemMonitor", "TraficMonitor", "SNMP", "sFlow", "EthernetOAM"]
//   for (let index in list_names)
//   {
//     let name = list_names[index]
//     if(name != key)
//     {
//       let element = document.getElementById(name) as HTMLElement;
//       element.style.backgroundColor = '#f1f1f1';
//       element.style.color = '#000000b2'
//       element.style.fontWeight = '400'
//       let bar = document.getElementById(name+"-bar") as HTMLElement;
//       if(bar != null)
//       {
//         bar.remove();
//       }
//     }
    
//   }
  
// }

/* @figmaId 16:170 */
export const SideMenu_Property1Monitoring: FC<Props> = memo(function SideMenu_Property1Monitoring(props = {}) {
  return (
    <div id='sideMenu' className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        <SystemMonitor_Default />
        <TraficMonitor_Default />
        <SNMP_Property1Default />
        <SFlow_Property1Default />
        <EthernetOAM_Property1Default />
      </div>
    </div>
  );
});

