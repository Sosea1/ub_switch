import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './SflowAgent.module.css';

interface Props {
  className?: string;
}
/* @figmaId 421:1725 */
export const SflowAgent: FC<Props> = memo(function SflowAgent(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.sFlowAgentConfig}>sFlow Agent Config</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelSFlowAgent}>sFlow Agent:</div>
                </div>
                <div className={classes.divWidgetWrap}>
                  <div className={classes.label}>
                    <div className={classes.enable}>Enable</div>
                  </div>
                </div>
              </div>
              <div className={classes.divSflowAgentAddr}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelAgentAddress}>Agent Address:</div>
                </div>
                <div className={classes.divWidgetTips}>
                  <div className={classes.divContent}>
                    <div className={classes.Format1921681}>(Format: 192.168.0.1)</div>
                  </div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}>
                    <div className={classes.unnamed}>0.0.0.0</div>
                  </div>
                </div>
              </div>
              <div className={classes.divSFlowVersion}>
                <div className={classes.divWidgetFieldlabelWrap3}>
                  <div className={classes.labelSFlowVersion}>sFlow Version:</div>
                </div>
                <div className={classes.divWidgetWrapOuter}>
                  <div className={classes._5}>5</div>
                </div>
              </div>
              <div className={classes.divSflowGlobalSubmit}>
                <PingButton_Property1Default
                  className={classes.pingButton}
                  text={{
                    ping: <div className={classes.ping}>Apply</div>,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={classes.divSflowGlobalNotes}>
            <div className={classes.divNotesTitle}>
              <div className={classes.notes}>Notes:</div>
            </div>
            <div className={classes.list}>
              <div className={classes.item}>
                <div className={classes.aValidAgentAddressShouldBeAssi}>
                  A valid Agent Address should be assigned before you enable the sFlow function.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
