import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './OAMStatistics.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 424:1568 */
export const OAMStatistics: FC<Props> = memo(function OAMStatistics(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>OAMPDUs Statistics</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Event Logs Statistics</div>,
          }}
        />
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.oAMPDUsStatistics}>OAMPDUs Statistics</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer}>
            <div className={classes.divTab}>
              <div className={classes.divWidgetWrapOuter}>
                <div className={classes.divWidgetWrap}>
                  <div className={classes.list}>
                    <div className={classes.itemLink}>
                      <div className={classes.uNIT1}>UNIT1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divPorts}></div>
            <div className={classes.divDisplayTableCtn}>
              <div className={classes.divInfoTitle}>
                <div className={classes.divWidgetWrapOuter2}>
                  <div className={classes.divWidgetWrap2}>
                    <div className={classes.port11}>Port 1/0/1:</div>
                  </div>
                </div>
              </div>
              <div className={classes.divInfoGrid}>
                <div className={classes.divGridPanelContent}>
                  <div className={classes.divGridPanelTbarContainer}>
                    <div className={classes.divInfoGrid_bar}>
                      <div className={classes.link}>
                        <div className={classes.refresh}>Refresh</div>
                      </div>
                      <div className={classes.link2}>
                        <div className={classes.clear}>Clear</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divScrollXContainer}>
                    <div className={classes.divContainer}>
                      <div className={classes.table}>
                        <div className={classes.bodyRow}>
                          <div className={classes.cell}>
                            <div className={classes.tx}>Tx</div>
                          </div>
                          <div className={classes.cell2}>
                            <div className={classes.rx}>Rx</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.divGridContentContainerOuter}>
                      <div className={classes.table2}>
                        <div className={classes.body}>
                          <div className={classes.row}>
                            <div className={classes.data}>
                              <div className={classes.divContent}>
                                <div className={classes.informationOAMPDUs}>Information OAMPDUs</div>
                              </div>
                            </div>
                            <div className={classes.data2}>
                              <div className={classes.divContent2}>
                                <div className={classes.unnamed}>0</div>
                              </div>
                            </div>
                            <div className={classes.data3}>
                              <div className={classes.divContent3}>
                                <div className={classes.unnamed2}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row2}>
                            <div className={classes.data4}>
                              <div className={classes.divContent4}>
                                <div className={classes.uniqueEventNotificationOAMPDUs}>
                                  Unique Event Notification OAMPDUs
                                </div>
                              </div>
                            </div>
                            <div className={classes.data5}>
                              <div className={classes.divContent5}>
                                <div className={classes.unnamed3}>0</div>
                              </div>
                            </div>
                            <div className={classes.data6}>
                              <div className={classes.divContent6}>
                                <div className={classes.unnamed4}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row3}>
                            <div className={classes.data7}>
                              <div className={classes.divContent7}>
                                <div className={classes.duplicateEventNotificationOAMP}>
                                  Duplicate Event Notification OAMPDUs
                                </div>
                              </div>
                            </div>
                            <div className={classes.data8}>
                              <div className={classes.divContent8}>
                                <div className={classes.unnamed5}>0</div>
                              </div>
                            </div>
                            <div className={classes.data9}>
                              <div className={classes.divContent9}>
                                <div className={classes.unnamed6}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row4}>
                            <div className={classes.data10}>
                              <div className={classes.divContent10}>
                                <div className={classes.variableRequestOAMPDUs}>Variable Request OAMPDUs</div>
                              </div>
                            </div>
                            <div className={classes.data11}>
                              <div className={classes.divContent11}>
                                <div className={classes.unnamed7}>0</div>
                              </div>
                            </div>
                            <div className={classes.data12}>
                              <div className={classes.divContent12}>
                                <div className={classes.unnamed8}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row5}>
                            <div className={classes.data13}>
                              <div className={classes.divContent13}>
                                <div className={classes.variableResponseOAMPDUs}>Variable Response OAMPDUs</div>
                              </div>
                            </div>
                            <div className={classes.data14}>
                              <div className={classes.divContent14}>
                                <div className={classes.unnamed9}>0</div>
                              </div>
                            </div>
                            <div className={classes.data15}>
                              <div className={classes.divContent15}>
                                <div className={classes.unnamed10}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row6}>
                            <div className={classes.data16}>
                              <div className={classes.divContent16}>
                                <div className={classes.loopbackControlOAMPDUs}>Loopback Control OAMPDUs</div>
                              </div>
                            </div>
                            <div className={classes.data17}>
                              <div className={classes.divContent17}>
                                <div className={classes.unnamed11}>0</div>
                              </div>
                            </div>
                            <div className={classes.data18}>
                              <div className={classes.divContent18}>
                                <div className={classes.unnamed12}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row7}>
                            <div className={classes.data19}>
                              <div className={classes.divContent19}>
                                <div className={classes.organizationSpecificOAMPDUs}>Organization Specific OAMPDUs</div>
                              </div>
                            </div>
                            <div className={classes.data20}>
                              <div className={classes.divContent20}>
                                <div className={classes.unnamed13}>0</div>
                              </div>
                            </div>
                            <div className={classes.data21}>
                              <div className={classes.divContent21}>
                                <div className={classes.unnamed14}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row8}>
                            <div className={classes.data22}>
                              <div className={classes.divContent22}>
                                <div className={classes.unsupportedOAMPDUs}>Unsupported OAMPDUs</div>
                              </div>
                            </div>
                            <div className={classes.data23}>
                              <div className={classes.divContent23}>
                                <div className={classes.unnamed15}>0</div>
                              </div>
                            </div>
                            <div className={classes.data24}>
                              <div className={classes.divContent24}>
                                <div className={classes.unnamed16}>0</div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.row9}>
                            <div className={classes.data25}>
                              <div className={classes.divContent25}>
                                <div className={classes.framesLostDueToOAM}>Frames Lost Due to OAM</div>
                              </div>
                            </div>
                            <div className={classes.data26}>
                              <div className={classes.divContent26}>
                                <div className={classes.unnamed17}>0</div>
                              </div>
                            </div>
                            <div className={classes.unnamed18}>0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.image5}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
