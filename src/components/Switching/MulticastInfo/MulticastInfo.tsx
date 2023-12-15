import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MulticastInfo.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 489:12116 */
export const MulticastInfo: FC<Props> = memo(function MulticastInfo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.multicastIPAddressTable}>Multicast IP Address Table</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer}>
            <div className={classes.divTab}></div>
            <div className={classes.divPorts}></div>
          </div>
        </div>
      </div>
      <PingButton_Property1Default
        className={classes.pingButton}
        text={{
          ping: <div className={classes.ping}>IPv4 Multicast Table</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton2}
        text={{
          ping: <div className={classes.ping2}>IPv4 Multicast Statistics</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton3}
        text={{
          ping: <div className={classes.ping3}>IPv6 Multicast Statistics</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton4}
        text={{
          ping: <div className={classes.ping4}>IPv6 Multicast Table</div>,
        }}
      />
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
                <div className={classes.frame27}>
                  <div className={classes.cell}>
                    <div className={classes.index}>Index</div>
                  </div>
                  <div className={classes.cell2}>
                    <div className={classes.multicastIP}>Multicast IP</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.vLANID}>VLAN ID</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.source}>Source</div>
                  </div>
                  <div className={classes.cell5}>
                    <div className={classes.type}>Type</div>
                  </div>
                  <div className={classes.cell6}>
                    <div className={classes.forwardPorts}>Forward Ports</div>
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
