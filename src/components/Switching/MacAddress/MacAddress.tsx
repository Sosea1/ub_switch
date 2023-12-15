import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MacAddress.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 452:959 */
export const MacAddress: FC<Props> = memo(function MacAddress(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Address Table</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Static Address</div>,
          }}
        />
        <div className={classes.link}>
          <div className={classes.dynamicAddress}>Dynamic Address</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.filteringAddress}>Filtering Address</div>
        </div>
        <div className={classes.link3}>
          <div className={classes.mACNotification}>MAC Notification</div>
        </div>
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.addressTable}>Address Table</div>
          </div>
        </div>
        <div className={classes.divGridPanelTbarContainer}>
          <div className={classes.divNotificationGrid_bar}>
            <div className={classes.link4}>
              <div className={classes.search}>Search</div>
            </div>
          </div>
        </div>
        <div className={classes.divGridPanelContentContainer}>
          <div className={classes.table}>
            <div className={classes.bodyRowData}>
              <div className={classes.spanStatusTotal}>
                <div className={classes.total}>Total: 0</div>
              </div>
            </div>
          </div>
          <div className={classes.divScrollXContainer}>
            <div className={classes.table2}>
              <div className={classes.bodyRow}>
                <div className={classes.dataNoEntriesInThisTable}>No entries in this table.</div>
              </div>
            </div>
          </div>
          <div className={classes.divContainer}>
            <div className={classes.table3}>
              <div className={classes.bodyRow2}>
                <div className={classes.frame25}>
                  <div className={classes.cell}>
                    <div className={classes.mACAddress}>MAC Address</div>
                  </div>
                  <div className={classes.cell2}>
                    <div className={classes.vLANID}>VLAN ID</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.port}>Port</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.type}>Type</div>
                  </div>
                  <div className={classes.frame26}>
                    <div className={classes.cell5}>
                      <div className={classes.agingStatus}>Aging Status</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
