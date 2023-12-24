import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MethodConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:5478 */
export const MethodConfig: FC<Props> = memo(function MethodConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.authenticationLoginMethodConfi}>Authentication Login Method Config</div>
            </div>
          </div>
          <div className={classes.divGroupGrid}>
            <div className={classes.divGroupGridPanel}>
              <div className={classes.divGridPanelContent}>
                <div className={classes.divGridPanelTbarContainer}>
                  <div className={classes.divGroupGrid_bar}>
                    <div className={classes.link}>
                      <div className={classes.spanIcon}></div>
                      <div className={classes.add}>Add</div>
                    </div>
                    <div className={classes.link2}>
                      <div className={classes.spanIcon2}></div>
                      <div className={classes.delete}>Delete</div>
                    </div>
                  </div>
                </div>
                <div className={classes.divGridPanelContentContainer}>
                  <div className={classes.divContainer}>
                    <div className={classes.divScrollXContainer}>
                      <div className={classes.divContainer2}>
                        <div className={classes.table}>
                          <div className={classes.bodyRow}>
                            <div className={classes.cell}>
                              <div className={classes.index}>Index</div>
                            </div>
                            <div className={classes.cell2}>
                              <div className={classes.name}>Name</div>
                            </div>
                            <div className={classes.cell3}>
                              <div className={classes.pri1}>Pri1</div>
                            </div>
                            <div className={classes.cell4}>
                              <div className={classes.pri2}>Pri2</div>
                            </div>
                            <div className={classes.cell5}>
                              <div className={classes.pri3}>Pri3</div>
                            </div>
                            <div className={classes.cell6}>
                              <div className={classes.pri4}>Pri4</div>
                            </div>
                            <div className={classes.cell7}>
                              <div className={classes.operation}>Operation</div>
                            </div>
                            <div className={classes.cell8}></div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.table2}>
                        <div className={classes.bodyRow2}>
                          <div className={classes.dataNoEntriesInThisTable}>No entries in this table.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divGroupGrid_statusBar}>
                    <div className={classes.table3}>
                      <div className={classes.bodyRowData}>
                        <div className={classes.spanStatusTotal}>
                          <div className={classes.total}>Total: 0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
          <div className={classes.divPanelWrap2}>
            <div className={classes.divPanelHeader2}>
              <div className={classes.heading32}>
                <div className={classes.authenticationEnableMethodConf}>Authentication Enable Method Config</div>
              </div>
            </div>
            <div className={classes.divGroupGrid2}>
              <div className={classes.divGroupGridPanel2}></div>
            </div>
            <div className={classes.divGridPanelContent2}>
              <div className={classes.divGridPanelTbarContainer2}>
                <div className={classes.divGroupGrid_bar2}>
                  <div className={classes.link3}>
                    <div className={classes.spanIcon3}></div>
                    <div className={classes.add2}>Add</div>
                  </div>
                  <div className={classes.link4}>
                    <div className={classes.spanIcon4}></div>
                    <div className={classes.delete2}>Delete</div>
                  </div>
                </div>
              </div>
              <div className={classes.divGridPanelContentContainer2}>
                <div className={classes.divContainer3}>
                  <div className={classes.divScrollXContainer2}>
                    <div className={classes.divContainer4}>
                      <div className={classes.table4}>
                        <div className={classes.bodyRow3}>
                          <div className={classes.cell9}>
                            <div className={classes.index2}>Index</div>
                          </div>
                          <div className={classes.cell10}>
                            <div className={classes.name2}>Name</div>
                          </div>
                          <div className={classes.cell11}>
                            <div className={classes.pri12}>Pri1</div>
                          </div>
                          <div className={classes.cell12}>
                            <div className={classes.pri22}>Pri2</div>
                          </div>
                          <div className={classes.cell13}>
                            <div className={classes.pri32}>Pri3</div>
                          </div>
                          <div className={classes.cell14}>
                            <div className={classes.pri42}>Pri4</div>
                          </div>
                          <div className={classes.cell15}>
                            <div className={classes.operation2}>Operation</div>
                          </div>
                          <div className={classes.cell16}></div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.table5}>
                      <div className={classes.bodyRow4}>
                        <div className={classes.dataNoEntriesInThisTable2}>No entries in this table.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divGroupGrid_statusBar2}>
                  <div className={classes.table6}>
                    <div className={classes.bodyRowData2}>
                      <div className={classes.spanStatusTotal2}>
                        <div className={classes.total2}>Total: 0</div>
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
