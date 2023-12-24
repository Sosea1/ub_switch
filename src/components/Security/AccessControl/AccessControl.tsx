import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './AccessControl.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
  hide?: {
    frame15?: boolean;
  };
}
/* @figmaId 452:5332 */
export const AccessControl: FC<Props> = memo(function AccessControl(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.accessControl}>Access Control:</div>
        <div className={classes.controlMode}>Control Mode:</div>
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
        <div className={classes.frame17}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.delete}>Delete</div>
        <div className={classes.frame21}>
          <div className={classes.index}>Index</div>
          <div className={classes.portIPMAC}>Port/IP/MAC</div>
          <div className={classes.accessInterface}>Access Interface</div>
          <div className={classes.operation}>
            <div className={classes.textBlock}>Operation</div>
            <div className={classes.textBlock2}>
              <p></p>
            </div>
          </div>
        </div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.entryConfig}>Entry Config</div>
        <div className={classes.add}>Add</div>
      </div>
    </div>
  );
});
