import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DHCPv6Filter.module.css';
import { Line3Icon } from './Line3Icon.js';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 620:2056 */
export const DHCPv6Filter: FC<Props> = memo(function DHCPv6Filter(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon} />
      </div>
      <div className={classes.frame16}>
        <div className={classes.dHCPv6Filter}>DHCPv6 Filter:</div>
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
          <div className={classes.port}>Port</div>
          <div className={classes.status}>Status</div>
          <div className={classes.mACVerify}>MAC Verify</div>
          <div className={classes.rateLimit}>Rate Limit</div>
          <div className={classes.declineProtect}>Decline Protect</div>
          <div className={classes.lAG}>LAG</div>
        </div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.portConfig}>Port Config</div>
        <div className={classes.add}>Add</div>
      </div>
    </div>
  );
});
