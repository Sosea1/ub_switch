import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DDM.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:1107 */
export const DDM: FC<Props> = memo(function DDM(props = {}) {
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
          <div className={classes.port}>Port</div>
          <div className={classes.dDMStatus}>DDM Status</div>
          <div className={classes.shutdown}>Shutdown</div>
          <div className={classes.lAG}>LAG</div>
        </div>
        <div className={classes.total}>Total: 0</div>
        <div className={classes.line3}></div>
        <div className={classes.portConfig}>Port Config</div>
      </div>
      <div className={classes.link}>
        <div className={classes.dDMConfig}>DDM Config</div>
      </div>
      <div className={classes.link2}>
        <div className={classes.treshholdConfig}>Treshhold Config</div>
      </div>
      <div className={classes.link3}>
        <div className={classes.dDMStatus2}>DDM Status</div>
      </div>
    </div>
  );
});
