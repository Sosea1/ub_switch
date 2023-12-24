import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './PortConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:6260 */
export const PortConfig: FC<Props> = memo(function PortConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.portConfig}>Port Config</div>
              </div>
            </div>
            <div className={classes.spanSubNavigatorText}>
              <div className={classes.uNIT1}>UNIT1</div>
            </div>
          </div>
        </div>
        <div className={classes.frame22}>
          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame17}></div>
          <div className={classes.frame21}>
            <div className={classes.port}>Port</div>
            <div className={classes.status}>Status</div>
            <div className={classes.mAB}>MAB</div>
            <div className={classes.guestVLAN4094}>Guest VLAN(0-4094)</div>
            <div className={classes.portControl}>Port Control</div>
            <div className={classes.portMethod}>Port Method</div>
            <div className={classes.maximumRequest19}>Maximum Request(1-9)</div>
            <div className={classes.quietPeriod999}>Quiet Period(0-999)</div>
            <div className={classes.operation}>Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
});
