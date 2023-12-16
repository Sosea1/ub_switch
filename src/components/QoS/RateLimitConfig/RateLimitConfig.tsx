import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './RateLimitConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 495:13530 */
export const RateLimitConfig: FC<Props> = memo(function RateLimitConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divNotesTitle}>
            <div className={classes.notes}>Notes:</div>
          </div>
          <div className={classes.list}>
            <div className={classes.item}></div>
          </div>
          <div className={classes._1TheMemberPortsOfAnLAGFollowTh}>
            <div className={classes.textBlock}>
              1. The member ports of an LAG follow the configurations of the LAG and not their own. The individual
              configurations of the ports can take effect only after the ports leave the LAG.
            </div>
            <div className={classes.textBlock2}>
              2. You cannot enable Storm Control and Ingress Rate control at the same time for a port.
            </div>
          </div>
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.rateLimitConfig}>Rate Limit Config</div>
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
                                  <div className={classes.ingressRate10000Kbps}>Ingress Rate (0-1,000,000Kbps)</div>
                                </div>
                                <div className={classes.cell3}>
                                  <div className={classes.egressRate10000Kbps}>Egress Rate (0-1,000,000Kbps)</div>
                                </div>
                                <div className={classes.cell4}>
                                  <div className={classes.lAG}>LAG</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.bodyRow2}>
                          <div className={classes.frame322}>
                            <div className={classes.cell5}>
                              <div className={classes._11}>1/0/1</div>
                            </div>
                            <div className={classes.cell6}>
                              <div className={classes.unnamed}>0</div>
                            </div>
                            <div className={classes.cell7}>
                              <div className={classes.unnamed2}>0</div>
                            </div>
                            <div className={classes.cell8}>
                              <div className={classes.unnamed3}>---</div>
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
      </div>
    </div>
  );
});
