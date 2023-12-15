import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './L2PTConfig.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 490:12901 */
export const L2PTConfig: FC<Props> = memo(function L2PTConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.l2PTConfig}>L2PT Config</div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Apply</div>,
            }}
          />
          <div className={classes.divNotes}></div>
          <div className={classes.divNotesTitle}>
            <div className={classes.notes}>Notes:</div>
          </div>
          <div className={classes.list}>
            <div className={classes.item}>
              <div className={classes.ifThePortIsAMemberPortOfAnLAGI}>
                If the port is a member port of an LAG, it will follow the L2PT configuration of the LAG and not its
                own.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>Layer 2 Protocol Tunneling:</div>
          </div>
          <div className={classes.divWidgetTips}></div>
          <div className={classes.divWidgetTips2}>
            <div className={classes.divContent}>
              <div className={classes.enable}>Enable</div>
            </div>
          </div>
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}></div>
          </div>
        </div>
        <div className={classes.divPanelWrap3}>
          <div className={classes.divPanelHeader3}>
            <div className={classes.portConfig}>Port Config</div>
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
                                  <div className={classes.type}>Type</div>
                                </div>
                                <div className={classes.cell3}>
                                  <div className={classes.protocol}>Protocol</div>
                                </div>
                                <div className={classes.cell4}>
                                  <div className={classes.threshold}>Threshold</div>
                                </div>
                                <div className={classes.cell5}>
                                  <div className={classes.lAG}>LAG</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.bodyRow2}>
                          <div className={classes.frame322}>
                            <div className={classes.cell6}>
                              <div className={classes._11}>1/0/1</div>
                            </div>
                            <div className={classes.cell7}>
                              <div className={classes.none}>None</div>
                            </div>
                            <div className={classes.cell8}>
                              <div className={classes.unnamed}>---/---/---/---/---/</div>
                            </div>
                            <div className={classes.cell9}>
                              <div className={classes.unnamed2}>---/---/---/---/---/</div>
                            </div>
                            <div className={classes.cell10}>
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
