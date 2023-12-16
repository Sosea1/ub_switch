import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './PoEProfileConfig.module.css';

interface Props {
  className?: string;
}
/* @figmaId 543:1230 */
export const PoEProfileConfig: FC<Props> = memo(function PoEProfileConfig(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}></div>
      <div className={classes.divPanelWrap}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.poEProfileConfig}>PoE Profile Config</div>
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
                                <div className={classes.index}>Index</div>
                              </div>
                              <div className={classes.cell2}>
                                <div className={classes.profileName}>Profile Name</div>
                              </div>
                              <div className={classes.cell3}>
                                <div className={classes.poEStatus}>PoE Status</div>
                              </div>
                              <div className={classes.cell4}>
                                <div className={classes.poEPriority}>PoE Priority</div>
                              </div>
                              <div className={classes.cell5}>
                                <div className={classes.powerLimit}>Power Limit</div>
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
          <div className={classes.divWidgetWrap}></div>
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
        <div className={classes.link}>
          <div className={classes.add}>Add</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.delete}>Delete</div>
        </div>
      </div>
    </div>
  );
});
