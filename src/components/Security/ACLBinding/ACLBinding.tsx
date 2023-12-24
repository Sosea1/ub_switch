import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ACLBinding.module.css';

interface Props {
  className?: string;
}
/* @figmaId 617:1692 */
export const ACLBinding: FC<Props> = memo(function ACLBinding(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.portBindingConfig}>Port Binding Config</div>
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
            <div className={classes.index}>Index</div>
            <div className={classes.aCLID}>ACL ID</div>
            <div className={classes.aCLName}>ACL Name</div>
            <div className={classes.aCLType}>ACL Type</div>
            <div className={classes.port}>Port</div>
            <div className={classes.direction}>Direction</div>
          </div>
        </div>
      </div>
    </div>
  );
});
