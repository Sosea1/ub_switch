import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GratuitousARP.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 577:1034 */
export const GratuitousARP: FC<Props> = memo(function GratuitousARP(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.gratuitousARPGlobalSettings}>Gratuitous ARP Global Settings</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.sendOnIPInterfaceStatusUp}>Send on IP Interface Status Up:</div>
        <div className={classes.gratuitousARPLearning}>Gratuitous ARP Learning: </div>
        <div className={classes.sendOnDuplicateIPDetected}>Send on Duplicate IP Detected:</div>
        <div className={classes.frame17}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.total4}>Total: 4</div>
        <div className={classes.delete}>Delete</div>
        <div className={classes.frame21}>
          <div className={classes.interfaceName}>Interface Name</div>
          <div className={classes.gratuitousARPPeriodicalSendInt}>Gratuitous ARP Periodical Send Interval</div>
        </div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.enable2}>Enable</div>
        <div className={classes.enable3}>Enable</div>
        <div className={classes.gratuitousARPConfig}>Gratuitous ARP Config</div>
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
