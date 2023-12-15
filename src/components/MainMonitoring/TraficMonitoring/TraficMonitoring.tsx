import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './TraficMonitoring.module.css';

interface Props {
  className?: string;
}
/* @figmaId 443:1637 */
export const TraficMonitoring: FC<Props> = memo(function TraficMonitoring(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divModule}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.trafficSummary}>Traffic Summary</div>
              </div>
            </div>
            <div className={classes.divFieldsetContent}>
              <div className={classes.divAutoRefresh}>
                <div className={classes.divWidgetFieldlabelWrap}>
                  <div className={classes.labelAutoRefresh}>Auto Refresh:</div>
                </div>
                <div className={classes.divWidgetWrapOuter}>
                  <div className={classes.divCheckboxGroupWrap}>
                    <div className={classes.list}>
                      <div className={classes.item}>
                        <div className={classes.divWidgetWrap}>
                          <div className={classes.label}>
                            <div className={classes.enable}>Enable</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
          <div className={classes.divBlockSeparate}>
            <div className={classes.divTrafficMonitorCfgGrid}>
              <div className={classes.divTrafficMonitorCfgGridPanel}>
                <div className={classes.divGridPanelContent}>
                  <div className={classes.divGridPanelTbarContainer}>
                    <div className={classes.divTrafficMonitorCfgGrid_bar}>
                      <div className={classes.link}>
                        <div className={classes.refresh}>Refresh</div>
                      </div>
                      <div className={classes.link2}>
                        <div className={classes.clear}>Clear</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divGridPanelContentContainer}>
                    <div className={classes.divContainer}>
                      <div className={classes.divScrollXContainer}>
                        <div className={classes.divContainer2}>
                          <div className={classes.table}>
                            <div className={classes.bodyRow}>
                              <div className={classes.cell}></div>
                              <div className={classes.cell2}>
                                <div className={classes.port}>Port</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.packetsRx}>Packets Rx</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.packetsTx}>Packets Tx</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.octetsRx}>Octets Rx</div>
                              </div>
                              <div className={classes.cell6}>
                                <div className={classes.octetsTx}>Octets Tx</div>
                              </div>
                              <div className={classes.cell7}>
                                <div className={classes.statistics}>Statistics</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.divGridContentContainer}>
                          <div className={classes.table2}>
                            <div className={classes.body}>
                              <div className={classes.row}>
                                <div className={classes.data}>
                                  <div className={classes.divCheckboxGroupContainer}></div>
                                </div>
                                <div className={classes.data2}>
                                  <div className={classes.divContent}>
                                    <div className={classes._11}>1/0/1</div>
                                  </div>
                                </div>
                                <div className={classes.data3}>
                                  <div className={classes.divContent2}>
                                    <div className={classes.unnamed}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data4}>
                                  <div className={classes.divContent3}>
                                    <div className={classes.unnamed2}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data5}>
                                  <div className={classes.divContent4}>
                                    <div className={classes.unnamed3}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data6}>
                                  <div className={classes.divContent5}>
                                    <div className={classes.unnamed4}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data7}>
                                  <div className={classes.divGridContentTdWrap}>
                                    <div className={classes.linkStatistics}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row2}>
                                <div className={classes.data8}>
                                  <div className={classes.divCheckboxGroupContainer2}></div>
                                </div>
                                <div className={classes.data9}>
                                  <div className={classes.divContent6}>
                                    <div className={classes._12}>1/0/2</div>
                                  </div>
                                </div>
                                <div className={classes.data10}>
                                  <div className={classes.divContent7}>
                                    <div className={classes.unnamed5}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data11}>
                                  <div className={classes.divContent8}>
                                    <div className={classes.unnamed6}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data12}>
                                  <div className={classes.divContent9}>
                                    <div className={classes.unnamed7}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data13}>
                                  <div className={classes.divContent10}>
                                    <div className={classes.unnamed8}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data14}>
                                  <div className={classes.divGridContentTdWrap2}>
                                    <div className={classes.linkStatistics2}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row3}>
                                <div className={classes.data15}>
                                  <div className={classes.divCheckboxGroupContainer3}></div>
                                </div>
                                <div className={classes.data16}>
                                  <div className={classes.divContent11}>
                                    <div className={classes._13}>1/0/3</div>
                                  </div>
                                </div>
                                <div className={classes.data17}>
                                  <div className={classes.divContent12}>
                                    <div className={classes.unnamed9}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data18}>
                                  <div className={classes.divContent13}>
                                    <div className={classes.unnamed10}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data19}>
                                  <div className={classes.divContent14}>
                                    <div className={classes.unnamed11}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data20}>
                                  <div className={classes.divContent15}>
                                    <div className={classes.unnamed12}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data21}>
                                  <div className={classes.divGridContentTdWrap3}>
                                    <div className={classes.linkStatistics3}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row4}>
                                <div className={classes.data22}></div>
                                <div className={classes.data23}>
                                  <div className={classes.divContent16}>
                                    <div className={classes._14}>1/0/4</div>
                                  </div>
                                </div>
                                <div className={classes.data24}>
                                  <div className={classes.divContent17}>
                                    <div className={classes.unnamed13}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data25}>
                                  <div className={classes.divContent18}>
                                    <div className={classes.unnamed14}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data26}>
                                  <div className={classes.divContent19}>
                                    <div className={classes.unnamed15}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data27}>
                                  <div className={classes.divContent20}>
                                    <div className={classes.unnamed16}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data28}>
                                  <div className={classes.divGridContentTdWrap4}>
                                    <div className={classes.linkStatistics4}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row5}>
                                <div className={classes.data29}>
                                  <div className={classes.divCheckboxGroupContainer4}></div>
                                </div>
                                <div className={classes.data30}>
                                  <div className={classes.divContent21}>
                                    <div className={classes._15}>1/0/5</div>
                                  </div>
                                </div>
                                <div className={classes.data31}>
                                  <div className={classes.divContent22}>
                                    <div className={classes.unnamed17}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data32}>
                                  <div className={classes.divContent23}>
                                    <div className={classes.unnamed18}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data33}>
                                  <div className={classes.divContent24}>
                                    <div className={classes.unnamed19}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data34}>
                                  <div className={classes.divContent25}>
                                    <div className={classes.unnamed20}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data35}>
                                  <div className={classes.divGridContentTdWrap5}>
                                    <div className={classes.linkStatistics5}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row6}>
                                <div className={classes.data36}>
                                  <div className={classes.divCheckboxGroupContainer5}>
                                    <div className={classes.divWidgetWrap2}>
                                      <div className={classes.label2}></div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data37}>
                                  <div className={classes.divContent26}>
                                    <div className={classes._16}>1/0/6</div>
                                  </div>
                                </div>
                                <div className={classes.data38}>
                                  <div className={classes.divContent27}>
                                    <div className={classes.unnamed21}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data39}>
                                  <div className={classes.divContent28}>
                                    <div className={classes.unnamed22}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data40}>
                                  <div className={classes.divContent29}>
                                    <div className={classes.unnamed23}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data41}>
                                  <div className={classes.divContent30}>
                                    <div className={classes.unnamed24}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data42}>
                                  <div className={classes.divGridContentTdWrap6}>
                                    <div className={classes.linkStatistics6}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row7}>
                                <div className={classes.data43}>
                                  <div className={classes.divCheckboxGroupContainer6}>
                                    <div className={classes.divWidgetWrap3}>
                                      <div className={classes.label3}></div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data44}>
                                  <div className={classes.divContent31}>
                                    <div className={classes._17}>1/0/7</div>
                                  </div>
                                </div>
                                <div className={classes.data45}>
                                  <div className={classes.divContent32}>
                                    <div className={classes.unnamed25}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data46}>
                                  <div className={classes.divContent33}>
                                    <div className={classes.unnamed26}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data47}>
                                  <div className={classes.divContent34}>
                                    <div className={classes.unnamed27}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data48}>
                                  <div className={classes.divContent35}>
                                    <div className={classes.unnamed28}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data49}>
                                  <div className={classes.divGridContentTdWrap7}>
                                    <div className={classes.linkStatistics7}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row8}>
                                <div className={classes.data50}>
                                  <div className={classes.divCheckboxGroupContainer7}>
                                    <div className={classes.divWidgetWrap4}>
                                      <div className={classes.label4}></div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data51}>
                                  <div className={classes.divContent36}>
                                    <div className={classes._18}>1/0/8</div>
                                  </div>
                                </div>
                                <div className={classes.data52}>
                                  <div className={classes.divContent37}>
                                    <div className={classes.unnamed29}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data53}>
                                  <div className={classes.divContent38}>
                                    <div className={classes.unnamed30}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data54}>
                                  <div className={classes.divContent39}>
                                    <div className={classes.unnamed31}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data55}>
                                  <div className={classes.divContent40}>
                                    <div className={classes.unnamed32}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data56}>
                                  <div className={classes.divGridContentTdWrap8}>
                                    <div className={classes.linkStatistics8}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row9}>
                                <div className={classes.data57}>
                                  <div className={classes.divCheckboxGroupContainer8}>
                                    <div className={classes.divWidgetWrap5}>
                                      <div className={classes.label5}></div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data58}>
                                  <div className={classes.divContent41}>
                                    <div className={classes._19}>1/0/9</div>
                                  </div>
                                </div>
                                <div className={classes.data59}>
                                  <div className={classes.divContent42}>
                                    <div className={classes.unnamed33}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data60}>
                                  <div className={classes.divContent43}>
                                    <div className={classes.unnamed34}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data61}>
                                  <div className={classes.divContent44}>
                                    <div className={classes.unnamed35}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data62}>
                                  <div className={classes.divContent45}>
                                    <div className={classes.unnamed36}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data63}>
                                  <div className={classes.divGridContentTdWrap9}>
                                    <div className={classes.linkStatistics9}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row10}>
                                <div className={classes.data64}>
                                  <div className={classes.divCheckboxGroupContainer9}>
                                    <div className={classes.divWidgetWrap6}>
                                      <div className={classes.label6}></div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data65}>
                                  <div className={classes.divContent46}>
                                    <div className={classes._110}>1/0/10</div>
                                  </div>
                                </div>
                                <div className={classes.data66}>
                                  <div className={classes.divContent47}>
                                    <div className={classes.unnamed37}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data67}>
                                  <div className={classes.divContent48}>
                                    <div className={classes.unnamed38}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data68}>
                                  <div className={classes.divContent49}>
                                    <div className={classes.unnamed39}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data69}>
                                  <div className={classes.divContent50}>
                                    <div className={classes.unnamed40}>0</div>
                                  </div>
                                </div>
                                <div className={classes.data70}>
                                  <div className={classes.divGridContentTdWrap10}>
                                    <div className={classes.linkStatistics10}>Statistics</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.divTrafficMonitorCfgGrid_statu}>
                      <div className={classes.table3}>
                        <div className={classes.bodyRowData}>
                          <div className={classes.spanStatusTotal}>
                            <div className={classes.total52}>Total: 52</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className={classes.divTab}>
              <div className={classes.divWidgetWrapOuter2}>
                <div className={classes.divWidgetWrap7}>
                  <div className={classes.list2}>
                    <div className={classes.itemLink}>
                      <div className={classes.After}></div>
                      <div className={classes.spanSubNavigatorText}>
                        <div className={classes.uNIT1}>UNIT1</div>
                      </div>
                    </div>
                    <div className={classes.itemLink2}>
                      <div className={classes.After2}></div>
                      <div className={classes.spanSubNavigatorText2}>
                        <div className={classes.lAGS}>LAGS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
