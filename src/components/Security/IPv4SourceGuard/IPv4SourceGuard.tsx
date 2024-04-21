import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPv4SourceGuard.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 620:1863 */
export const IPv4SourceGuard: FC<Props> = memo(function IPv4SourceGuard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.iPv4SourceGuardLogging}>IPv4 Source Guard Logging:</div>
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
          <div className={classes.securityType}>Security Type</div>
          <div className={classes.lAG}>LAG</div>
        </div>
          <div className={classes.enable}>Enable <input id='main_check' style={{
              cursor: 'pointer',
              position: 'absolute',
              left: '-30px',
              top: '3px'
          }}
                                                        type="checkbox"/></div>
          <div className={classes.portConfig}>
              <div className={classes.textBlock}>Port Config</div>
              <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.add}>Add</div>
      </div>
    </div>
  );
});
