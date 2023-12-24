import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ARPDetection.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 620:1833 */
export const ARPDetection: FC<Props> = memo(function ARPDetection(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.aRPDetect}>ARP Detect:</div>
        <div className={classes.validateSourceMAC}>Validate Source MAC:</div>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <div className={classes.frame17}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.delete}>Delete</div>
        <div className={classes.frame21}>
          <div className={classes.vLANID}>VLAN ID</div>
          <div className={classes.status}>Status</div>
          <div className={classes.logStatus}>Log Status</div>
        </div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.vLANConfig}>VLAN Config</div>
        <div className={classes.add}>Add</div>
        <div className={classes.validateDestinationMAC}>Validate Destination MAC:</div>
        <div className={classes.validateIP}>Validate IP:</div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.enable3}>Enable</div>
        <div className={classes.enable4}>Enable</div>
      </div>
    </div>
  );
});
