import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './PortSecurity.module.css';

interface Props {
  className?: string;
}
/* @figmaId 617:1646 */
export const PortSecurity: FC<Props> = memo(function PortSecurity(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.portSecurityConfig}>Port Security Config</div>
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
            <div className={classes.maxLearnedNumberOfMAC}>Max Learned Number of MAC</div>
            <div className={classes.currentLearnedNumber}>Current Learned Number</div>
            <div className={classes.currentLearnedNumber2}>Current Learned Number</div>
            <div className={classes.learnAddressMode}>Learn Address Mode</div>
            <div className={classes.status}>Status</div>
          </div>
        </div>
      </div>
    </div>
  );
});
