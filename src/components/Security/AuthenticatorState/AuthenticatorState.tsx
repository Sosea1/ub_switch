import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AuthenticatorState.module.css';

interface Props {
  className?: string;
}
/* @figmaId 615:1622 */
export const AuthenticatorState: FC<Props> = memo(function AuthenticatorState(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2dE0a38746}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.authenticatorState}>Authenticator State</div>
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
            <div className={classes.mACAddress}>MAC Address</div>
            <div className={classes.pAEState}>PAE State</div>
            <div className={classes.backendState}>Backend State</div>
            <div className={classes.status}>Status</div>
            <div className={classes.vID}>VID</div>
          </div>
        </div>
      </div>
    </div>
  );
});
