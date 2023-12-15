import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './Port.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:910 */
export const Port: FC<Props> = memo(function Port(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.link}>
        <div className={classes.portConfig}>Port Config</div>
      </div>
      <div className={classes.link2}>
        <div className={classes.portIsolation}>Port Isolation</div>
      </div>
      <div className={classes.link3}>
        <div className={classes.loopbackDetection}>Loopback Detection</div>
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.portConfig2}>Port Config</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer}>
            <div className={classes.divJumbo}>
              <div className={classes.divWidgetFieldlabelWrap}>
                <div className={classes.labelJumbo}>Jumbo:</div>
              </div>
              <div className={classes.divWidgetTips}>
                <div className={classes.divContent}>
                  <div className={classes.bytes15189216}>bytes (1518-9216)</div>
                </div>
              </div>
              <div className={classes.divWidgetWrap}>
                <div className={classes.input}>
                  <div className={classes._1518}>1518</div>
                </div>
              </div>
            </div>
            <div className={classes.divFormSubmit}></div>
            <div className={classes.divSwtPortCfgGrid}>
              <div className={classes.divSwtPortCfgGridPanel}>
                <div className={classes.divGridPanelContent}>
                  <div className={classes.divGridPanelContentContainer}>
                    <div className={classes.divContainer}>
                      <div className={classes.divScrollXContainer}>
                        <div className={classes.divContainer2}>
                          <div className={classes.table}>
                            <div className={classes.bodyRow}>
                              <div className={classes.cell}>
                                <div className={classes.divCheckboxGroupContainer}>
                                  <div className={classes.divWidgetWrap2}>
                                    <div className={classes.label}>
                                      <div className={classes.spanIcon}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.cell2}>
                                <div className={classes.port}>Port</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.type}>Type</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.description}>Description</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.status}>Status</div>
                              </div>
                              <div className={classes.cell6}>
                                <div className={classes.speed}>Speed</div>
                              </div>
                              <div className={classes.cell7}>
                                <div className={classes.duplex}>Duplex</div>
                              </div>
                              <div className={classes.cell8}>
                                <div className={classes.flowControl}>Flow Control</div>
                              </div>
                              <div className={classes.cell9}>
                                <div className={classes.lAG}>LAG</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.divGridContentContainer}>
                          <div className={classes.table2}>
                            <div className={classes.body}>
                              <div className={classes.row}>
                                <div className={classes.data}>
                                  <div className={classes.divCheckboxGroupContainer2}>
                                    <div className={classes.divWidgetWrap3}>
                                      <div className={classes.label2}>
                                        <div className={classes.spanIcon2}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data2}>
                                  <div className={classes.divContent2}>
                                    <div className={classes._11}>1/0/1</div>
                                  </div>
                                </div>
                                <div className={classes.data3}>
                                  <div className={classes.divContent3}>
                                    <div className={classes.copper}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data4}>
                                  <div className={classes.divContent4}>
                                    <div className={classes.enabled}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data5}>
                                  <div className={classes.divContent5}>
                                    <div className={classes.auto}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data6}>
                                  <div className={classes.divContent6}>
                                    <div className={classes.auto2}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data7}>
                                  <div className={classes.divContent7}>
                                    <div className={classes.disabled}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data8}>
                                  <div className={classes.divContent8}>
                                    <div className={classes.unnamed}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row2}>
                                <div className={classes.data9}>
                                  <div className={classes.divCheckboxGroupContainer3}>
                                    <div className={classes.divWidgetWrap4}>
                                      <div className={classes.label3}>
                                        <div className={classes.spanIcon3}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data10}>
                                  <div className={classes.divContent9}>
                                    <div className={classes._12}>1/0/2</div>
                                  </div>
                                </div>
                                <div className={classes.data11}>
                                  <div className={classes.divContent10}>
                                    <div className={classes.copper2}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data12}>
                                  <div className={classes.divContent11}>
                                    <div className={classes.enabled2}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data13}>
                                  <div className={classes.divContent12}>
                                    <div className={classes.auto3}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data14}>
                                  <div className={classes.divContent13}>
                                    <div className={classes.auto4}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data15}>
                                  <div className={classes.divContent14}>
                                    <div className={classes.disabled2}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data16}>
                                  <div className={classes.divContent15}>
                                    <div className={classes.unnamed2}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row3}>
                                <div className={classes.data17}>
                                  <div className={classes.divCheckboxGroupContainer4}>
                                    <div className={classes.divWidgetWrap5}>
                                      <div className={classes.label4}>
                                        <div className={classes.spanIcon4}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data18}>
                                  <div className={classes.divContent16}>
                                    <div className={classes._13}>1/0/3</div>
                                  </div>
                                </div>
                                <div className={classes.data19}>
                                  <div className={classes.divContent17}>
                                    <div className={classes.copper3}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data20}>
                                  <div className={classes.divContent18}>
                                    <div className={classes.enabled3}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data21}>
                                  <div className={classes.divContent19}>
                                    <div className={classes.auto5}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data22}>
                                  <div className={classes.divContent20}>
                                    <div className={classes.auto6}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data23}>
                                  <div className={classes.divContent21}>
                                    <div className={classes.disabled3}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data24}>
                                  <div className={classes.divContent22}>
                                    <div className={classes.unnamed3}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row4}>
                                <div className={classes.data25}>
                                  <div className={classes.divCheckboxGroupContainer5}>
                                    <div className={classes.divWidgetWrap6}>
                                      <div className={classes.label5}>
                                        <div className={classes.spanIcon5}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data26}>
                                  <div className={classes.divContent23}>
                                    <div className={classes._14}>1/0/4</div>
                                  </div>
                                </div>
                                <div className={classes.data27}>
                                  <div className={classes.divContent24}>
                                    <div className={classes.copper4}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data28}>
                                  <div className={classes.divContent25}>
                                    <div className={classes.enabled4}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data29}>
                                  <div className={classes.divContent26}>
                                    <div className={classes.auto7}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data30}>
                                  <div className={classes.divContent27}>
                                    <div className={classes.auto8}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data31}>
                                  <div className={classes.divContent28}>
                                    <div className={classes.disabled4}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data32}>
                                  <div className={classes.divContent29}>
                                    <div className={classes.unnamed4}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row5}>
                                <div className={classes.data33}>
                                  <div className={classes.divCheckboxGroupContainer6}>
                                    <div className={classes.divWidgetWrap7}>
                                      <div className={classes.label6}>
                                        <div className={classes.spanIcon6}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data34}>
                                  <div className={classes.divContent30}>
                                    <div className={classes._15}>1/0/5</div>
                                  </div>
                                </div>
                                <div className={classes.data35}>
                                  <div className={classes.divContent31}>
                                    <div className={classes.copper5}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data36}>
                                  <div className={classes.divContent32}>
                                    <div className={classes.enabled5}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data37}>
                                  <div className={classes.divContent33}>
                                    <div className={classes.auto9}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data38}>
                                  <div className={classes.divContent34}>
                                    <div className={classes.auto10}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data39}>
                                  <div className={classes.divContent35}>
                                    <div className={classes.disabled5}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data40}>
                                  <div className={classes.divContent36}>
                                    <div className={classes.unnamed5}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row6}>
                                <div className={classes.data41}>
                                  <div className={classes.divCheckboxGroupContainer7}>
                                    <div className={classes.divWidgetWrap8}>
                                      <div className={classes.label7}>
                                        <div className={classes.spanIcon7}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data42}>
                                  <div className={classes.divContent37}>
                                    <div className={classes._16}>1/0/6</div>
                                  </div>
                                </div>
                                <div className={classes.data43}>
                                  <div className={classes.divContent38}>
                                    <div className={classes.copper6}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data44}>
                                  <div className={classes.divContent39}>
                                    <div className={classes.enabled6}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data45}>
                                  <div className={classes.divContent40}>
                                    <div className={classes.auto11}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data46}>
                                  <div className={classes.divContent41}>
                                    <div className={classes.auto12}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data47}>
                                  <div className={classes.divContent42}>
                                    <div className={classes.disabled6}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data48}>
                                  <div className={classes.divContent43}>
                                    <div className={classes.unnamed6}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row7}>
                                <div className={classes.data49}>
                                  <div className={classes.divCheckboxGroupContainer8}>
                                    <div className={classes.divWidgetWrap9}>
                                      <div className={classes.label8}>
                                        <div className={classes.spanIcon8}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data50}>
                                  <div className={classes.divContent44}>
                                    <div className={classes._17}>1/0/7</div>
                                  </div>
                                </div>
                                <div className={classes.data51}>
                                  <div className={classes.divContent45}>
                                    <div className={classes.copper7}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data52}>
                                  <div className={classes.divContent46}>
                                    <div className={classes.enabled7}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data53}>
                                  <div className={classes.divContent47}>
                                    <div className={classes.auto13}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data54}>
                                  <div className={classes.divContent48}>
                                    <div className={classes.auto14}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data55}>
                                  <div className={classes.divContent49}>
                                    <div className={classes.disabled7}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data56}>
                                  <div className={classes.divContent50}>
                                    <div className={classes.unnamed7}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row8}>
                                <div className={classes.data57}>
                                  <div className={classes.divCheckboxGroupContainer9}>
                                    <div className={classes.divWidgetWrap10}>
                                      <div className={classes.label9}>
                                        <div className={classes.spanIcon9}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data58}>
                                  <div className={classes.divContent51}>
                                    <div className={classes._18}>1/0/8</div>
                                  </div>
                                </div>
                                <div className={classes.data59}>
                                  <div className={classes.divContent52}>
                                    <div className={classes.copper8}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data60}>
                                  <div className={classes.divContent53}>
                                    <div className={classes.enabled8}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data61}>
                                  <div className={classes.divContent54}>
                                    <div className={classes.auto15}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data62}>
                                  <div className={classes.divContent55}>
                                    <div className={classes.auto16}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data63}>
                                  <div className={classes.divContent56}>
                                    <div className={classes.disabled8}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data64}>
                                  <div className={classes.divContent57}>
                                    <div className={classes.unnamed8}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row9}>
                                <div className={classes.data65}>
                                  <div className={classes.divCheckboxGroupContainer10}>
                                    <div className={classes.divWidgetWrap11}>
                                      <div className={classes.label10}>
                                        <div className={classes.spanIcon10}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data66}>
                                  <div className={classes.divContent58}>
                                    <div className={classes._19}>1/0/9</div>
                                  </div>
                                </div>
                                <div className={classes.data67}>
                                  <div className={classes.divContent59}>
                                    <div className={classes.copper9}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data68}>
                                  <div className={classes.divContent60}>
                                    <div className={classes.enabled9}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data69}>
                                  <div className={classes.divContent61}>
                                    <div className={classes.auto17}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data70}>
                                  <div className={classes.divContent62}>
                                    <div className={classes.auto18}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data71}>
                                  <div className={classes.divContent63}>
                                    <div className={classes.disabled9}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data72}>
                                  <div className={classes.divContent64}>
                                    <div className={classes.unnamed9}>--</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row10}>
                                <div className={classes.data73}>
                                  <div className={classes.divCheckboxGroupContainer11}>
                                    <div className={classes.divWidgetWrap12}>
                                      <div className={classes.label11}>
                                        <div className={classes.spanIcon11}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data74}>
                                  <div className={classes.divContent65}>
                                    <div className={classes._110}>1/0/10</div>
                                  </div>
                                </div>
                                <div className={classes.data75}>
                                  <div className={classes.divContent66}>
                                    <div className={classes.copper10}>Copper</div>
                                  </div>
                                </div>
                                <div className={classes.data76}>
                                  <div className={classes.divContent67}>
                                    <div className={classes.enabled10}>Enabled</div>
                                  </div>
                                </div>
                                <div className={classes.data77}>
                                  <div className={classes.divContent68}>
                                    <div className={classes.auto19}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data78}>
                                  <div className={classes.divContent69}>
                                    <div className={classes.auto20}>Auto</div>
                                  </div>
                                </div>
                                <div className={classes.data79}>
                                  <div className={classes.divContent70}>
                                    <div className={classes.disabled10}>Disabled</div>
                                  </div>
                                </div>
                                <div className={classes.data80}>
                                  <div className={classes.divContent71}>
                                    <div className={classes.unnamed10}>--</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.divSwtPortCfgGrid_statusBar}>
                      <div className={classes.table3}>
                        <div className={classes.bodyRowData}>
                          <div className={classes.spanStatusTotal}>
                            <div className={classes.total52}>Total: 52</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divGridPanelFbarContainer}></div>
                </div>
              </div>
            </div>
            <div className={classes.divTab}>
              <div className={classes.divWidgetWrapOuter}>
                <div className={classes.divWidgetWrap13}>
                  <div className={classes.list}>
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
            <PingButton_Property1Default
              className={classes.pingButton}
              text={{
                ping: <div className={classes.ping}>Apply</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.divNotes}>
          <div className={classes.divNotesTitle}>
            <div className={classes.notes}>Notes:</div>
          </div>
          <div className={classes.list2}>
            <div className={classes.item}>
              <div className={classes.ifThePortIsAMemberPortOfAnLAGI}>
                If the port is a member port of an LAG, it will follow the port configuration of the LAG and not its
                own.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
