import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './VoiceVLANGlobal2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 495:13746 */
export const VoiceVLANGlobal2: FC<Props> = memo(function VoiceVLANGlobal2(props = {}) {
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
                                <div className={classes.voiceVLAN}>Voice VLAN</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.operationalStatus}>Operational Status</div>
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
                <div className={classes.total}>Total: 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
