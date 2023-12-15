import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './PortConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:1905 */
export const PortConfig: FC<Props> = memo(function PortConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
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
                                  <div className={classes.status}>Status</div>
                                </div>
                                <div className={classes.cell3}>
                                  <div className={classes.priority}>Priority</div>
                                </div>
                                <div className={classes.cell4}>
                                  <div className={classes.extPathCost}>Ext-Path Cost</div>
                                </div>
                                <div className={classes.cell5}>
                                  <div className={classes.intPathCost}>Int-Path Cost</div>
                                </div>
                                <div className={classes.cell6}>
                                  <div className={classes.edgePort}>Edge Port</div>
                                </div>
                                <div className={classes.cell7}>
                                  <div className={classes.p2PLink}>P2P Link</div>
                                </div>
                                <div className={classes.cell8}>
                                  <div className={classes.mCheck}>MCheck</div>
                                </div>
                                <div className={classes.cell9}>
                                  <div className={classes.portMode}>Port Mode</div>
                                </div>
                                <div className={classes.cell10}>
                                  <div className={classes.portRole}>Port Role</div>
                                </div>
                                <div className={classes.cell11}>
                                  <div className={classes.portStatus}>Port Status</div>
                                </div>
                                <div className={classes.cell12}>
                                  <div className={classes.lAG}>LAG</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.divGridContentContainer}>
                          <div className={classes.table2}>
                            <div className={classes.bodyRow2}>
                              <div className={classes.frame322}>
                                <div className={classes.cell13}>
                                  <div className={classes._11}>1/0/1</div>
                                </div>
                                <div className={classes.cell14}>
                                  <div className={classes.disabled}>Disabled</div>
                                </div>
                                <div className={classes.cell15}>
                                  <div className={classes._128}>128</div>
                                </div>
                                <div className={classes.cell16}>
                                  <div className={classes.auto}>Auto</div>
                                </div>
                                <div className={classes.cell17}>
                                  <div className={classes.auto2}>Auto</div>
                                </div>
                                <div className={classes.cell18}>
                                  <div className={classes.disabled2}>Disabled</div>
                                </div>
                                <div className={classes.cell19}>
                                  <div className={classes.auto3}>Auto</div>
                                </div>
                                <div className={classes.cell20}>
                                  <div className={classes.unnamed}>-</div>
                                </div>
                                <div className={classes.cell21}>
                                  <div className={classes.unnamed2}>-</div>
                                </div>
                                <div className={classes.cell22}>
                                  <div className={classes.unnamed3}>-</div>
                                </div>
                                <div className={classes.cell23}>
                                  <div className={classes.unnamed4}>-</div>
                                </div>
                                <div className={classes.cell24}>
                                  <div className={classes.unnamed5}>-</div>
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
            <div className={classes.table3}>
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
                configurations of the ports can take effect only after the ports leave the LAG.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
