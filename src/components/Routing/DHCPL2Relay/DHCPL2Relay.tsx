import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './DHCPL2Relay.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    _1921681?: boolean;
    _19216812?: boolean;
  };
}
/* @figmaId 577:1878 */
export const DHCPL2Relay: FC<Props> = memo(function DHCPL2Relay(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.dHCPL2Relay}>DHCP L2 Relay:</div>
        <div className={classes.frame17}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.total4}>Total: 4</div>
        <div className={classes.delete}>Delete</div>
        <div className={classes.frame21}>
          <div className={classes.vLAN}>VLAN</div>
          <div className={classes.status}>Status</div>
        </div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.vLANConfig}>VLAN Config</div>
        <div className={classes.add}>Add</div>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Apply</div>,
          }}
        />
        <div className={classes.filterByVLAN}>Filter by VLAN:</div>
        <div className={classes.from}>From</div>
        <div className={classes.to}>To</div>
        <_Property1Variant4
          className={classes.unnamed}
          hide={{
            _1921681: true,
          }}
        />
        <_Property1Variant4
          className={classes.unnamed2}
          hide={{
            _1921681: true,
          }}
        />
      </div>
    </div>
  );
});
