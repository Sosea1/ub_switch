import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame27.module.css';

interface Props {
  className?: string;
}
/* @figmaId 421:1481 */
export const Frame27: FC<Props> = memo(function Frame27(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.link}>
          <div className={classes.sNMPGroup}>SNMP Group</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.sNMPUser}>SNMP User</div>
        </div>
        <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
          <div className={classes.divPanelWrap}>
            <div className={classes.divPanelHeader}>
              <div className={classes.heading3}>
                <div className={classes.groupConfig}>Group Config</div>
              </div>
            </div>
            <div className={classes.divGroupGrid}>
              <div className={classes.divGroupGridPanel}>
                <div className={classes.divGridPanelContent}>
                  <div className={classes.divGridPanelTbarContainer}>
                    <div className={classes.divGroupGrid_bar}>
                      <div className={classes.link3}>
                        <div className={classes.spanIcon}></div>
                        <div className={classes.add}>Add</div>
                      </div>
                      <div className={classes.link4}>
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
                                <div className={classes.divCheckboxGroupContainer}>
                                  <div className={classes.divWidgetWrap}>
                                    <div className={classes.label}>
                                      <div className={classes.spanIcon3}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.cell2}>
                                <div className={classes.index}>Index</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.groupName}>Group Name</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.securityModel}>Security Model</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.securityLevel}>Security Level</div>
                              </div>
                              <div className={classes.cell6}>
                                <div className={classes.readView}>Read View</div>
                              </div>
                              <div className={classes.cell7}>
                                <div className={classes.writeView}>Write View</div>
                              </div>
                              <div className={classes.cell8}>
                                <div className={classes.notifyView}>Notify View</div>
                              </div>
                              <div className={classes.cell9}>
                                <div className={classes.operation}>Operation</div>
                              </div>
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
                  <div className={classes.divGridPanelFbarContainer}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
