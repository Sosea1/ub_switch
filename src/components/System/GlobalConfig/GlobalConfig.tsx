import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GlobalConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 543:1330 */
export const GlobalConfig: FC<Props> = memo(function GlobalConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
          <div className={classes.divH2d70d0aec7}>
            <div className={classes.divPanelWrap}>
              <div className={classes.divPanelHeader}>
                <div className={classes.heading3}>
                  <div className={classes.globalConfig}>Global Config</div>
                </div>
              </div>
              <div className={classes.divPanelContentContainer}>
                <div className={classes.divSflowAgentAddr}>
                  <div className={classes.divWidgetFieldlabelWrap}>
                    <div className={classes.labelAgentAddress}>PoE Auto Recovery:</div>
                  </div>
                  <div className={classes.divWidgetTips}>
                    <div className={classes.divContent}></div>
                  </div>
                  <div className={classes.divContent2}>
                    <div className={classes.enable}>Enable</div>
                    <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
                  </div>
                </div>
                <div className={classes.divSflowGlobalSubmit}></div>
              </div>
              <div className={classes.divSflowGlobalNotes}>
                <div className={classes.divNotesTitle}>
                  <div className={classes.notes}>Notes:</div>
                </div>
                <div className={classes.list}>
                  <div className={classes.item}>
                    <div className={classes.someProblemsMayOccurInCaseOfSp}>
                      Some problems may occur in case of specified usage sceneries or improper configurations.1.Before
                      upgrading the connected PoE powered device (PD), disable PoE Auto Recovery on the corresponding
                      port to avoid PD’s damage.2.Ping IP Address should be the same as the connected PD’s IP address.
                      Otherwise, the switch will continually reboot the PD.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divPanelWrap2}>
            <div className={classes.divPanelHeader2}>
              <div className={classes.heading32}>
                <div className={classes.portConfig}>Port Config</div>
              </div>
            </div>
            <div className={classes.divPanelContentContainer2}>
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
                                    <div className={classes.pingIPAddress}>Ping IP Address</div>
                                  </div>
                                  <div className={classes.cell3}>
                                    <div className={classes.startupDelaySeconds}>Startup Delay(Seconds)</div>
                                  </div>
                                  <div className={classes.cell4}>
                                    <div className={classes.intervalSeconds}>Interval(Seconds)</div>
                                  </div>
                                  <div className={classes.cell5}>
                                    <div className={classes.failureThreshold}>Failure Threshold</div>
                                  </div>
                                  <div className={classes.cell6}>
                                    <div className={classes.breakTimeSeconds}>Break Time(Seconds)</div>
                                  </div>
                                  <div className={classes.cell7}>
                                    <div className={classes.failures}>Failures</div>
                                  </div>
                                  <div className={classes.cell8}>
                                    <div className={classes.reboots}>Reboots</div>
                                  </div>
                                  <div className={classes.cell9}>
                                    <div className={classes.totalPings}>Total Pings</div>
                                  </div>
                                  <div className={classes.cell10}>
                                    <div className={classes.status}>Status</div>
                                  </div>
                                  <div className={classes.cell11}>
                                    <div className={classes.operation}>Operation</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.divTab}></div>
              <div className={classes.divWidgetWrapOuter}></div>
              <div className={classes.divWidgetWrap}></div>
            </div>
            <div className={classes.divLinkGrid_statusBar}>
              <div className={classes.table2}>
                <div className={classes.bodyRowData}>
                  <div className={classes.spanStatusTotal}>
                    <div className={classes.total}>Total: 0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.link}>
              <div className={classes.link2}>
                <div className={classes.add}>Add</div>
              </div>
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
    </div>
  );
});
