import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './OAMLinkMonitoring.module.css';

interface Props {
  className?: string;
}
/* @figmaId 424:1158 */
export const OAMLinkMonitoring: FC<Props> = memo(function OAMLinkMonitoring(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.linkEvent}>Link Event</div>
            </div>
          </div>
          <div className={classes.divEventCombobox}>
            <div className={classes.divWidgetFieldlabelWrap}>
              <div className={classes.labelCurrentLinkEvent}>Current Link Event:</div>
            </div>
            <div className={classes.divWidgetWrap}>
              <div className={classes.input}>
                <div className={classes.errorSymbolPeriod}>Error Symbol Period</div>
              </div>
              <div className={classes.link}></div>
            </div>
          </div>
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}>
              <div className={classes.linkMonitoringConfig}>Link Monitoring Config</div>
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
                                <div className={classes.thresholdErrorSymbols}>Threshold (Error Symbols)</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.window100ms}>Window (100ms)</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.eventNotification}>Event Notification</div>
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
                                  <div className={classes.divContent}>
                                    <div className={classes._11}>1/0/1</div>
                                  </div>
                                </div>
                                <div className={classes.data3}>
                                  <div className={classes.divContent2}>
                                    <div className={classes._1}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data4}>
                                  <div className={classes.divContent3}>
                                    <div className={classes._10}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data5}>
                                  <div className={classes.divContent4}>
                                    <div className={classes.enabled}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row2}>
                                <div className={classes.data6}>
                                  <div className={classes.divCheckboxGroupContainer3}>
                                    <div className={classes.divWidgetWrap4}>
                                      <div className={classes.label3}>
                                        <div className={classes.spanIcon3}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data7}>
                                  <div className={classes.divContent5}>
                                    <div className={classes._12}>1/0/2</div>
                                  </div>
                                </div>
                                <div className={classes.data8}>
                                  <div className={classes.divContent6}>
                                    <div className={classes._13}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data9}>
                                  <div className={classes.divContent7}>
                                    <div className={classes._102}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data10}>
                                  <div className={classes.divContent8}>
                                    <div className={classes.enabled2}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row3}>
                                <div className={classes.data11}>
                                  <div className={classes.divCheckboxGroupContainer4}>
                                    <div className={classes.divWidgetWrap5}>
                                      <div className={classes.label4}>
                                        <div className={classes.spanIcon4}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data12}>
                                  <div className={classes.divContent9}>
                                    <div className={classes._132}>1/0/3</div>
                                  </div>
                                </div>
                                <div className={classes.data13}>
                                  <div className={classes.divContent10}>
                                    <div className={classes._14}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data14}>
                                  <div className={classes.divContent11}>
                                    <div className={classes._103}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data15}>
                                  <div className={classes.divContent12}>
                                    <div className={classes.enabled3}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row4}>
                                <div className={classes.data16}>
                                  <div className={classes.divCheckboxGroupContainer5}>
                                    <div className={classes.divWidgetWrap6}>
                                      <div className={classes.label5}>
                                        <div className={classes.spanIcon5}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data17}>
                                  <div className={classes.divContent13}>
                                    <div className={classes._142}>1/0/4</div>
                                  </div>
                                </div>
                                <div className={classes.data18}>
                                  <div className={classes.divContent14}>
                                    <div className={classes._15}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data19}>
                                  <div className={classes.divContent15}>
                                    <div className={classes._104}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data20}>
                                  <div className={classes.divContent16}>
                                    <div className={classes.enabled4}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row5}>
                                <div className={classes.data21}>
                                  <div className={classes.divCheckboxGroupContainer6}>
                                    <div className={classes.divWidgetWrap7}>
                                      <div className={classes.label6}>
                                        <div className={classes.spanIcon6}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data22}>
                                  <div className={classes.divContent17}>
                                    <div className={classes._152}>1/0/5</div>
                                  </div>
                                </div>
                                <div className={classes.data23}>
                                  <div className={classes.divContent18}>
                                    <div className={classes._16}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data24}>
                                  <div className={classes.divContent19}>
                                    <div className={classes._105}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data25}>
                                  <div className={classes.divContent20}>
                                    <div className={classes.enabled5}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row6}>
                                <div className={classes.data26}>
                                  <div className={classes.divCheckboxGroupContainer7}>
                                    <div className={classes.divWidgetWrap8}>
                                      <div className={classes.label7}>
                                        <div className={classes.spanIcon7}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data27}>
                                  <div className={classes.divContent21}>
                                    <div className={classes._162}>1/0/6</div>
                                  </div>
                                </div>
                                <div className={classes.data28}>
                                  <div className={classes.divContent22}>
                                    <div className={classes._17}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data29}>
                                  <div className={classes.divContent23}>
                                    <div className={classes._106}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data30}>
                                  <div className={classes.divContent24}>
                                    <div className={classes.enabled6}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row7}>
                                <div className={classes.data31}>
                                  <div className={classes.divCheckboxGroupContainer8}>
                                    <div className={classes.divWidgetWrap9}>
                                      <div className={classes.label8}>
                                        <div className={classes.spanIcon8}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data32}>
                                  <div className={classes.divContent25}>
                                    <div className={classes._172}>1/0/7</div>
                                  </div>
                                </div>
                                <div className={classes.data33}>
                                  <div className={classes.divContent26}>
                                    <div className={classes._18}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data34}>
                                  <div className={classes.divContent27}>
                                    <div className={classes._107}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data35}>
                                  <div className={classes.divContent28}>
                                    <div className={classes.enabled7}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row8}>
                                <div className={classes.data36}>
                                  <div className={classes.divCheckboxGroupContainer9}>
                                    <div className={classes.divWidgetWrap10}>
                                      <div className={classes.label9}>
                                        <div className={classes.spanIcon9}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data37}>
                                  <div className={classes.divContent29}>
                                    <div className={classes._182}>1/0/8</div>
                                  </div>
                                </div>
                                <div className={classes.data38}>
                                  <div className={classes.divContent30}>
                                    <div className={classes._19}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data39}>
                                  <div className={classes.divContent31}>
                                    <div className={classes._108}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data40}>
                                  <div className={classes.divContent32}>
                                    <div className={classes.enabled8}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row9}>
                                <div className={classes.data41}>
                                  <div className={classes.divCheckboxGroupContainer10}>
                                    <div className={classes.divWidgetWrap11}>
                                      <div className={classes.label10}>
                                        <div className={classes.spanIcon10}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data42}>
                                  <div className={classes.divContent33}>
                                    <div className={classes._192}>1/0/9</div>
                                  </div>
                                </div>
                                <div className={classes.data43}>
                                  <div className={classes.divContent34}>
                                    <div className={classes._110}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data44}>
                                  <div className={classes.divContent35}>
                                    <div className={classes._109}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data45}>
                                  <div className={classes.divContent36}>
                                    <div className={classes.enabled9}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.row10}>
                                <div className={classes.data46}>
                                  <div className={classes.divCheckboxGroupContainer11}>
                                    <div className={classes.divWidgetWrap12}>
                                      <div className={classes.label11}>
                                        <div className={classes.spanIcon11}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={classes.data47}>
                                  <div className={classes.divContent37}>
                                    <div className={classes._1102}>1/0/10</div>
                                  </div>
                                </div>
                                <div className={classes.data48}>
                                  <div className={classes.divContent38}>
                                    <div className={classes._111}>1</div>
                                  </div>
                                </div>
                                <div className={classes.data49}>
                                  <div className={classes.divContent39}>
                                    <div className={classes._1010}>10</div>
                                  </div>
                                </div>
                                <div className={classes.data50}>
                                  <div className={classes.divContent40}>
                                    <div className={classes.enabled10}>Enabled</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.divLinkGrid_statusBar}>
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
