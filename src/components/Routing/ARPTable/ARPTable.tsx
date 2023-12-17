import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ARPTable.module.css';

interface Props {
  className?: string;
}
/* @figmaId 452:2483 */
export const ARPTable: FC<Props> = memo(function ARPTable(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}></div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.aRPTable}>ARP Table</div>
            </div>
          </div>
          <div className={classes.divStatisticsGrid}>
            <div className={classes.divGridPanelContentContainer}>
              <div className={classes.divContainer}>
                <div className={classes.table}>
                  <div className={classes.bodyRow}>
                    <div className={classes.dataNoEntriesInThisTable}>No entries in this table.</div>
                  </div>
                </div>
              </div>
              <div className={classes.divStatisticsGrid_statusBar}>
                <div className={classes.table2}>
                  <div className={classes.bodyRowData}>
                    <div className={classes.spanStatusTotal}>
                      <div className={classes.total}>Total: 0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.divContainer2}>
                <div className={classes.table3}>
                  <div className={classes.bodyRow2}>
                    <div className={classes.cell}>
                      <div className={classes.interface}>Interface</div>
                    </div>
                    <div className={classes.cell2}>
                      <div className={classes.iPAddress}>IP Address</div>
                    </div>
                    <div className={classes.cell3}>
                      <div className={classes.mACAddress}>MAC Address</div>
                    </div>
                    <div className={classes.cell4}>
                      <div className={classes.type}>Type</div>
                    </div>
                    <div className={classes.cell5}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divGridPanelTbarContainer}>
          <div className={classes.divNotificationGrid_bar}>
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
      </div>
    </div>
  );
});
