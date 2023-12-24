import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './IPMACBinding.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
  };
}
/* @figmaId 620:1797 */
export const IPMACBinding: FC<Props> = memo(function IPMACBinding(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bindingTable}>Binding Table</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.frame16}>
        <div className={classes.source}>Source:</div>
        <div className={classes.iPAddress}>IP Address:</div>
        <_Property1Variant4
          className={classes.unnamed}
          hide={{
            frame15: true,
          }}
        />
        <div className={classes.all}>All</div>
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
          <div className={classes.hostName}>Host Name</div>
          <div className={classes.iPAddress2}>IP Address</div>
          <div className={classes.mACAddress}>MAC Address</div>
          <div className={classes.vLANID}>VLAN ID</div>
          <div className={classes.port}>Port</div>
          <div className={classes.protectType}>Protect Type</div>
          <div className={classes.source2}>Source</div>
        </div>
        <div className={classes.add}>Add</div>
      </div>
    </div>
  );
});
