import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MulticastFiltering.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 485:11444 */
export const MulticastFiltering: FC<Props> = memo(function MulticastFiltering(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.iPv4ProfileConfig}>IPv4 Profile Config</div>
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
          ping: <div className={classes.ping}> IPv4 Profile</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton2}
        text={{
          ping: <div className={classes.ping2}>IPv4 Port Config</div>,
        }}
      />
      <div className={classes.link}>
        <div className={classes.iPv6Profile}>IPv6 Profile</div>
      </div>
      <div className={classes.link2}>
        <div className={classes.iPv6PortConfig}>IPv6 Port Config</div>
      </div>
      <div className={classes.divGridPanelTbarContainer}>
        <div className={classes.divNotificationGrid_bar}>
          <div className={classes.link3}>
            <div className={classes.add}>Add</div>
          </div>
          <div className={classes.link4}>
            <div className={classes.delete}>Delete</div>
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
                <div className={classes.frame27}>
                  <div className={classes.cell}>
                    <div className={classes.profileID}>Profile ID</div>
                  </div>
                  <div className={classes.cell2}>
                    <div className={classes.mode}>Mode</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.boundPorts}>Bound Ports</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.operation}>Operation</div>
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
