import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AutoVoIPGlobalConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 495:13926 */
export const AutoVoIPGlobalConfig: FC<Props> = memo(function AutoVoIPGlobalConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.globalConfig}>Global Config</div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Apply</div>,
            }}
          />
          <div className={classes.divNotes}></div>
          <div className={classes.divNotesTitle}>
            <div className={classes.notes}>Notes:</div>
          </div>
          <div className={classes.list}>
            <div className={classes.item}>
              <div className={classes.ifThePortIsAMemberPortOfAnLAGI}>
                If the port is a member port of an LAG, it will follow the L2PT configuration of the LAG and not its
                own.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>Auto VoIP:</div>
          </div>
          <div className={classes.divWidgetTips}></div>
          <div className={classes.divWidgetTips2}>
            <div className={classes.divContent}>
              <div className={classes.enable}>Enable</div>
              <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}>
              <div className={classes.portConfig}>Port Config</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer}>
            <div className={classes.divLinkGrid}>
              <div className={classes.divLinkGridPanel}>
                <div className={classes.divGridPanelContent}>
                  <div className={classes.divGridPanelContentContainer}>
                    <div className={classes.divContainer}>
                      <div className={classes.divScrollXContainer}>
                        <div className={classes.divContainer2}>
                          <div className={classes.table}>
                            <div className={classes.bodyRow}>
                              <div className={classes.frame32}>
                                <div className={classes.cell}>
                                  <div className={classes.port}>Port</div>
                                </div>
                                <div className={classes.cell2}>
                                  <div className={classes.interfaceMode}>Interface Mode</div>
                                </div>
                                <div className={classes.cell3}>
                                  <div className={classes.value}>Value</div>
                                </div>
                                <div className={classes.cell4}>
                                  <div className={classes.coSOverrideMode}>CoS Override Mode</div>
                                </div>
                                <div className={classes.cell5}>
                                  <div className={classes.operationalStatus}>Operational Status</div>
                                </div>
                                <div className={classes.cell6}>
                                  <div className={classes.dSCPValue}>DSCP Value</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.bodyRow2}>
                          <div className={classes.frame322}>
                            <div className={classes.cell7}>
                              <div className={classes._11}>1/0/1</div>
                            </div>
                            <div className={classes.cell8}>
                              <div className={classes.disable}>Disable</div>
                            </div>
                            <div className={classes.cell9}>
                              <div className={classes.unnamed}>0</div>
                            </div>
                            <div className={classes.cell10}>
                              <div className={classes.disabled}>Disabled</div>
                            </div>
                            <div className={classes.cell11}>
                              <div className={classes.disabled2}>Disabled</div>
                            </div>
                            <div className={classes.cell12}>
                              <div className={classes.unnamed2}>0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divTab}></div>
            <div className={classes.divWidgetWrapOuter}></div>
            <div className={classes.divWidgetWrap}></div>
            <div className={classes.divWidgetWrap2}>
              <div className={classes.divTab2}>
                <div className={classes.divWidgetWrapOuter2}>
                  <div className={classes.divWidgetWrap3}>
                    <div className={classes.list2}>
                      <div className={classes.itemLink}>
                        <div className={classes.spanSubNavigatorText}>
                          <div className={classes.uNIT1}>UNIT1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divLinkGrid_statusBar}>
            <div className={classes.table2}>
              <div className={classes.bodyRowData}>
                <div className={classes.spanStatusTotal}>
                  <div className={classes.total1}>Total: 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
