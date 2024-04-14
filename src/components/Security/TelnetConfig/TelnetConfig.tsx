import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './TelnetConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:5551 */
export const TelnetConfig: FC<Props> = memo(function TelnetConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divH2d70d0aec7}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.telnetConfig}>Telnet Config</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer}>
              <div className={classes.divSflowStatusSwitch}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelSFlowAgent}>Telnet:</div>
                </div>
                <div className={classes.divWidgetWrap}>
                  <div className={classes.label}></div>
                  <div className={classes.enable}>Enable<input id='main_check' style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '-30px',
                    top: '3px'
                  }}
                                                               type="checkbox"/></div>
                </div>
              </div>
              <div className={classes.divSflowAgentAddr}>
                <div className={classes.divWidgetFieldlabelWrap2}></div>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.input}></div>
                </div>
              </div>
              <div className={classes.labelAgentAddress}>
                <div className={classes.textBlock}>Port:</div>
                <div className={classes.textBlock}>
                  {/*<input type="text" className={classes.textBlock3}/> <br/>*/}
                  <p></p>
                </div>
              </div>
              <PingButton_Property1Default
                className={classes.pingButton}
                text={{
                  ping: <div className={classes.ping}>Apply</div>,
                }}
              />
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
