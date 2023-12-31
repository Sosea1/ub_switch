import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './EEE.module.css';

interface Props {
  className?: string;
}
/* @figmaId 543:1031 */
export const EEE: FC<Props> = memo(function EEE(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}></div>
      <div className={classes.divSflowGlobalNotes}>
        <div className={classes.divNotesTitle}>
          <div className={classes.notes}>Notes:</div>
        </div>
        <div className={classes.list}>
          <div className={classes.item}>
            <div className={classes.ifThePortIsAMemberPortOfAnLAGI}>
              If the port is a member port of an LAG, it will follow the EEE configuration of the LAG and not its own.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divPanelWrap}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.eEEConfig}>EEE Config</div>
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
                <div className={classes.total}>Total: 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
