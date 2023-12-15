import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './STPSecurity.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:1709 */
export const STPSecurity: FC<Props> = memo(function STPSecurity(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
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
                                <div className={classes.loopProtect}>Loop Protect</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.rootProtect}>Root Protect</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.tCGuard}>TC Guard</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.bPDUProtect}>BPDU Protect</div>
                              </div>
                              <div className={classes.cell6}>
                                <div className={classes.bPDUFilter}>BPDU Filter</div>
                              </div>
                              <div className={classes.cell7}>
                                <div className={classes.bPDUForward}>BPDU Forward</div>
                              </div>
                              <div className={classes.cell8}>
                                <div className={classes.lAG}>LAG</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.bodyRow2}>
                        <div className={classes.frame322}>
                          <div className={classes.cell9}>
                            <div className={classes._11}>1/0/1</div>
                          </div>
                          <div className={classes.cell10}>
                            <div className={classes.disabled}>Disabled</div>
                          </div>
                          <div className={classes.cell11}>
                            <div className={classes.disabled2}>Disabled</div>
                          </div>
                          <div className={classes.cell12}>
                            <div className={classes.disabled3}>Disabled</div>
                          </div>
                          <div className={classes.cell13}>
                            <div className={classes.disabled4}>Disabled</div>
                          </div>
                          <div className={classes.cell14}>
                            <div className={classes.disabled5}>Disabled</div>
                          </div>
                          <div className={classes.cell15}>
                            <div className={classes.enabled}>Enabled</div>
                          </div>
                          <div className={classes.cell16}>
                            <div className={classes.unnamed}>---</div>
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
          <div className={classes.divWidgetWrap}>
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
      <div className={classes.divNotes}>
        <div className={classes.divNotesTitle}>
          <div className={classes.notes}>Notes:</div>
        </div>
        <div className={classes.list2}>
          <div className={classes.item}>
            <div className={classes.theMemberPortsOfAnLAGFollowThe}>
              The member ports of an LAG follow the configurations of the LAG and not their own. The individual
              configurations of the ports can take effect only after the ports leave the LAG
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
