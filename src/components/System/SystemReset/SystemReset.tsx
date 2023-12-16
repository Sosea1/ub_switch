import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './SystemReset.module.css';

interface Props {
  className?: string;
}
/* @figmaId 537:1005 */
export const SystemReset: FC<Props> = memo(function SystemReset(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.systemReset}>System Reset</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetWrap}></div>
                <div className={classes.frame34}></div>
              </div>
              <div className={classes.divJumbo}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelJumbo}>Target Unit:</div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes.allUnit}>All Unit</div>
                  </div>
                </div>
              </div>
              <div className={classes.divJumbo2}>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes.maintainTheIPAddress}>Maintain the IP Address</div>
                  </div>
                </div>
              </div>
              <div className={classes.divNotesTitle}>
                <div className={classes.notes}>Notes:</div>
              </div>
              <div className={classes._1SystemResetWillRestoreTheSyst}>
                <div className={classes.textBlock}>
                  1. System Reset will restore the system to the factory defaults and your current settings will be
                  lost.
                </div>
                <div className={classes.textBlock2}>
                  2. To maintain the IP address of the selected unit when resetting, enable Maintain the IP Address.
                </div>
              </div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Reset</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.divSflowGlobalNotes}>
        <div className={classes.list}>
          <div className={classes.item}></div>
        </div>
      </div>
    </div>
  );
});
