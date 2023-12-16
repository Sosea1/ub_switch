import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './OUIConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 495:13870 */
export const OUIConfig: FC<Props> = memo(function OUIConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}></div>
      <div className={classes.divPanelWrap}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.oUIConfig}>OUI Config</div>
          </div>
        </div>
        <div className={classes.divPanelContentContainer}>
          <div className={classes.divLinkGrid}>
            <div className={classes.divLinkGridPanel}>
              <div className={classes.divGridPanelContent}>
                <div className={classes.divGridPanelContentContainer}>
                  <div className={classes.divContainer}>
                    <div className={classes.divScrollXContainer}>
                      <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
                    </div>
                    <div className={classes.divContainer2}>
                      <div className={classes.table}>
                        <div className={classes.bodyRow}>
                          <div className={classes.frame32}>
                            <div className={classes.cell}>
                              <div className={classes.oUI}>OUI</div>
                            </div>
                            <div className={classes.cell2}>
                              <div className={classes.status}>Status</div>
                            </div>
                            <div className={classes.cell3}>
                              <div className={classes.description}>Description</div>
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
            <div className={classes.divTab2}>
              <div className={classes.divWidgetWrapOuter2}>
                <div className={classes.divWidgetWrap2}>
                  <div className={classes.list}>
                    <div className={classes.itemLink}>
                      <div className={classes.spanSubNavigatorText}>
                        <div className={classes.uNIT1}>UNIT1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divGroupGrid_bar}>
            <div className={classes.link}>
              <div className={classes.add}>Add</div>
            </div>
            <div className={classes.link2}>
              <div className={classes.delete}>Delete</div>
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
