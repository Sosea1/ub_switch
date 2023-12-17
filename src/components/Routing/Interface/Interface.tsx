import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Interface.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 577:1096 */
export const Interface: FC<Props> = memo(function Interface(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.routingConfig}>Routing Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.iPv4Routing}>IPv4 Routing:</div>
        <div className={classes.iPv6Routing}>IPv6 Routing:</div>
        <div className={classes.frame17}>
          <div className={classes.divContainer}>
            <div className={classes.cell}></div>
            <div className={classes.cell2}>
              <div className={classes.interfaceID}>Interface ID</div>
            </div>
            <div className={classes.cell3}>
              <div className={classes.iPAddressMode}>IP Address Mode</div>
            </div>
            <div className={classes.cell4}>
              <div className={classes.iPAddress}>IP Address</div>
            </div>
            <div className={classes.cell5}>
              <div className={classes.subnetMask}>Subnet Mask</div>
            </div>
            <div className={classes.cell6}>
              <div className={classes.interfaceName}>Interface Name</div>
            </div>
            <div className={classes.cell7}>
              <div className={classes.status}>Status</div>
            </div>
            <div className={classes.cell8}>
              <div className={classes.operation}>Operation</div>
            </div>
          </div>
        </div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.delete}>Delete</div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.interfaceConfig}>Interface Config</div>
        <div className={classes.add}>Add</div>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
      </div>
    </div>
  );
});
