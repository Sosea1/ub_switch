import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './RMON.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

interface Props {
  className?: string;
}
export const RMON: FC<Props> = memo(function RMON(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.link}>
          <div style={{cursor: 'pointer'}} className={classes.statistics}>Statistics</div>
        </div>
        <div style={{cursor: 'pointer'}} className={classes.link2}>
          <div style={{cursor: 'pointer'}} className={classes.history}>History</div>
        </div>
        <div className={classes.link3}>
          <div style={{cursor: 'pointer'}} className={classes.event}>Event</div>
        </div>
        <div className={classes.link4}>
          <div style={{cursor: 'pointer'}} className={classes.alarm}>Alarm</div>
        </div>
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.statisticsConfig}>Statistics Config</div>
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
                      <div className={classes.index}>Index</div>
                      <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
                    </div>
                    <div className={classes.cell2}>
                      <div className={classes.port}>Port</div>
                    </div>
                    <div className={classes.cell3}>
                      <div className={classes.owner}>Owner</div>
                    </div>
                    <div className={classes.cell4}>
                      <div className={classes.status}>Status</div>
                    </div>
                    <div className={classes.cell5}>
                      <div className={classes.operation}>Operation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divGridPanelTbarContainer}>
          <div className={classes.divNotificationGrid_bar}>
            <div className={classes.link5}>
              <div className={classes.spanIcon}></div>
              <div className={classes.add}>Add</div>
              <IoMdAddCircle style={{cursor: 'pointer'}} className={classes.add1} />
            </div>
            <div className={classes.link6}>
              <div className={classes.spanIcon2}></div>
              <div className={classes.delete}>Delete</div>
              <TiDelete style={{cursor: 'pointer'}} className={classes.delete1}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
