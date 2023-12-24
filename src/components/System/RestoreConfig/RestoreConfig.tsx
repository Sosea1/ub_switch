import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './RestoreConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 526:1144 */
export const RestoreConfig: FC<Props> = memo(function RestoreConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.restoreConfig}>Restore Config</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelSFlowAgent}>
                    Restore the configurations using a saved configuration file.
                  </div>
                </div>
                <div className={classes.divWidgetWrap}></div>
              </div>
              <div className={classes.divSflowAgentAddr}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelAgentAddress}>Target Unit:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}></div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes.allUnit}>All Unit</div>
                  </div>
                </div>
              </div>
              <div className={classes.divSFlowVersion}>
                <div className={classes.divWidgetFieldlabelWrap3}>
                  <div className={classes.labelSFlowVersion}>Configuration File:</div>
                </div>
                <div className={classes.divWidgetWrapOuter}></div>
                <div className={classes.divWidgetWrap3}>
                  <div className={classes.input2}></div>
                </div>
                <PingButton_Property1Default
                  className={classes.pingButton}
                  text={{
                    ping: <div className={classes.ping}>Browse</div>,
                  }}
                />
              </div>
              <div className={classes.divSflowGlobalSubmit}></div>
            </div>
          </div>
          <div className={classes.divSflowGlobalNotes}>
            <div className={classes.divNotesTitle}>
              <div className={classes.rebootTheSwitchToValidateTheCo}>
                Reboot the switch to validate the configuration after the restore is complete.
              </div>
            </div>
          </div>
        </div>
      </div>
      <PingButton_Property1Default
        className={classes.pingButton2}
        text={{
          ping: <div className={classes.ping2}>Import</div>,
        }}
      />
    </div>
  );
});
