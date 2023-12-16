import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './PoEConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 543:1078 */
export const PoEConfig: FC<Props> = memo(function PoEConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}></div>
      <div className={classes.divPanelWrap}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
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
                                <div className={classes.poEStatus}>PoE Status</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.poEPriority}>PoE Priority</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.powerLimit}>Power Limit</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.powerLimitValue130W}>Power Limit Value(0.1-30.0 W)</div>
                              </div>
                              <div className={classes.cell6}>
                                <div className={classes.timeRange}>Time Range</div>
                              </div>
                              <div className={classes.cell7}>
                                <div className={classes.poEProfile}>PoE Profile</div>
                              </div>
                              <div className={classes.cell8}>
                                <div className={classes.powerW}>Power (W)</div>
                              </div>
                              <div className={classes.cell9}>
                                <div className={classes.currentMA}>Current (mA)</div>
                              </div>
                              <div className={classes.cell10}>
                                <div className={classes.voltageV}>Voltage (V)</div>
                              </div>
                              <div className={classes.cell11}>
                                <div className={classes.pDClass}>PD Class</div>
                              </div>
                              <div className={classes.cell12}>
                                <div className={classes.powerStatus}>Power Status</div>
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
          <div className={classes.spanSubNavigatorText}>
            <div className={classes.uNIT1}>UNIT1</div>
          </div>
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
      </div>
      <div className={classes.divPanelWrap2}>
        <div className={classes.divPanelHeader2}>
          <div className={classes.heading32}>
            <div className={classes.poEConfig}>PoE Config</div>
          </div>
        </div>
        <div className={classes.divPanelContentContainer2}>
          <div className={classes.divLinkGrid2}>
            <div className={classes.divLinkGridPanel2}>
              <div className={classes.divGridPanelContent2}>
                <div className={classes.divGridPanelContentContainer2}>
                  <div className={classes.divContainer3}>
                    <div className={classes.divScrollXContainer2}>
                      <div className={classes.divContainer4}>
                        <div className={classes.table3}>
                          <div className={classes.bodyRow2}>
                            <div className={classes.frame322}>
                              <div className={classes.cell13}>
                                <div className={classes.unit}>Unit</div>
                              </div>
                              <div className={classes.cell14}>
                                <div className={classes.systemPowerLimitW}>System Power Limit (W)</div>
                              </div>
                              <div className={classes.cell15}>
                                <div className={classes.systemPowerConsumptionW}>System Power Consumption (W)</div>
                              </div>
                              <div className={classes.cell16}>
                                <div className={classes.systemPowerRemainW}>System Power Remain (W)</div>
                              </div>
                              <div className={classes.cell17}>
                                <div className={classes.operation}>Operation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.bodyRow3}>
                        <div className={classes.frame323}>
                          <div className={classes.cell18}>
                            <div className={classes.unit1}>Unit1</div>
                          </div>
                          <div className={classes.cell19}>
                            <div className={classes._384}>384.0</div>
                          </div>
                          <div className={classes.cell20}>
                            <div className={classes.unnamed}>0.0</div>
                          </div>
                          <div className={classes.cell21}>
                            <div className={classes._3842}>384.0</div>
                          </div>
                          <div className={classes.cell22}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divTab2}></div>
          <div className={classes.divWidgetWrapOuter2}></div>
          <div className={classes.divWidgetWrap}></div>
        </div>
        <div className={classes.divLinkGrid_statusBar2}>
          <div className={classes.table4}>
            <div className={classes.bodyRowData2}>
              <div className={classes.spanStatusTotal2}>
                <div className={classes.total1}>Total: 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
