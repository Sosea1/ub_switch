import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './SerialPortSettings.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:5551 */
export const SerialPortSettings: FC<Props> = memo(function SerialPortSettings(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.serialPortSettings}>Serial Port Settings</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelSFlowAgent}>Data Bits:</div>
                </div>
                <div className={classes.divWidgetWrap}>
                  <div className={classes.label}></div>
                  <div className={classes._8}>8</div>
                </div>
              </div>
              <div className={classes.divSflowAgentAddr}>
                <div className={classes.divWidgetFieldlabelWrap2}>
                  <div className={classes.labelAgentAddress}>Baud Rate:</div>
                </div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}></div>
                </div>
              </div>
              <div className={classes.divSFlowVersion}>
                <div className={classes.divWidgetFieldlabelWrap3}>
                  <div className={classes.labelSFlowVersion}>Parity Bits:</div>
                </div>
                <div className={classes.divWidgetWrapOuter}>
                  <div className={classes.none}>none</div>
                </div>
              </div>
              <div className={classes.divSflowGlobalSubmit}>
                <PingButton_Property1Default
                  className={classes.pingButton}
                  text={{
                    ping: <div className={classes.ping}>Apply</div>,
                  }}
                />
                <div className={classes.divWidgetFieldlabelWrap4}>
                  <div className={classes.labelSFlowVersion2}>Stop Bits:</div>
                </div>
                <div className={classes.divWidgetWrapOuter2}>
                  <div className={classes._1}>1</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divSflowGlobalNotes}>
            <div className={classes.divNotesTitle}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
