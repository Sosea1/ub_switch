import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './GlobalConfig8021x.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
  };
}
/* @figmaId 615:1543 */
export const GlobalConfig8021x: FC<Props> = memo(function GlobalConfig8021x(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.frame16}>
        <div className={classes._8021x}>802.1x:</div>
        <div className={classes.accounting}>Accounting:</div>
        <div className={classes.authenticationProtocol}>Authentication Protocol:</div>
        <_Property1Variant4
          className={classes.unnamed}
          hide={{
            frame15: true,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <div className={classes.enable}>Enable</div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.handshake}>Handshake:</div>
        <div className={classes.vLANAssignment}>
          <div className={classes.textBlock}>VLAN Assignment:</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.enable3}>Enable</div>
        <div className={classes.enable4}>Enable</div>
      </div>
    </div>
  );
});
