import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DoSDefend.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 617:1716 */
export const DoSDefend: FC<Props> = memo(function DoSDefend(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.doSDefend}>DoS Defend</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.doSProtection}>DoS Protection:</div>
        <div className={classes.landAttack}>Land Attack:</div>
        <div className={classes.pingFlooding}>Ping Flooding:</div>
        <div className={classes.sYNSYNACKFlooding}>SYN/SYN-ACK Flooding:</div>
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
        <div className={classes.enable}>Enable</div>
        <div className={classes.doSDefendConfig}>DoS Defend Config</div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.enable3}>Enable</div>
        <div className={classes.enable4}>Enable</div>
        <div className={classes.enable5}>Enable</div>
        <div className={classes.scanSYNFIN}>Scan SYNFIN:</div>
        <div className={classes.xmascan}>Xmascan:</div>
        <div className={classes.nULLScan}>
          <div className={classes.textBlock}>NULL Scan:</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.sYNSPortLess1024}>SYN sPort less 1024:</div>
        <div className={classes.blatAttack}>Blat Attack:</div>
        <div className={classes.enable6}>Enable</div>
        <div className={classes.enable7}>Enable</div>
        <div className={classes.enable8}>Enable</div>
        <div className={classes.enable9}>Enable</div>
        <div className={classes.enable10}>Enable</div>
        <div className={classes.enable11}>Enable</div>
        <div className={classes.enable12}>Enable</div>
        <div className={classes.winNukeAttack}>WinNuke Attack:</div>
        <div className={classes.pingOfDeath}>Ping Of Death:</div>
        <div className={classes.smurfAttack}>Smurf Attack:</div>
      </div>
    </div>
  );
});
