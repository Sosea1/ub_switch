import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DSCPPriority.module.css';

interface Props {
  className?: string;
}
/* @figmaId 492:13483 */
export const DSCPPriority: FC<Props> = memo(function DSCPPriority(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <div className={classes.frame22}>
          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame17}></div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.dSCPPriority}>DSCP Priority</div>
          <div className={classes._8021pPriority}>802.1p Priority</div>
          <div className={classes.dSCPRemap}>DSCP Remap</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.dSCPPriorityConfig}>DSCP Priority Config</div>
      </div>
    </div>
  );
});
