import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AAAGlobalConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 614:1247 */
export const AAAGlobalConfig: FC<Props> = memo(function AAAGlobalConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.enableAdmin}>Enable Admin</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.enableAdmin2}>Enable Admin:</div>
        <div className={classes.frame17}></div>
        <div className={classes.divContainer}>
          <div className={classes.cell}></div>
          <div className={classes.cell2}>
            <div className={classes.index}>Index</div>
          </div>
          <div className={classes.cell3}>
            <div className={classes.module}>Module</div>
          </div>
          <div className={classes.cell4}>
            <div className={classes.loginMethod}>Login Method</div>
          </div>
          <div className={classes.cell5}>
            <div className={classes.enableMethod}>Enable Method</div>
          </div>
        </div>
        <div className={classes.rectangle5}></div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.aAAApplicationConfig}>AAA Application Config</div>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <div className={classes.failed}>Failed</div>
      </div>
    </div>
  );
});
