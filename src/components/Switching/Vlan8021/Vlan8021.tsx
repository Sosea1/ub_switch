import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './Vlan8021.module.css';

interface Props {
  className?: string;
}
/* @figmaId 470:10479 */
export const Vlan8021: FC<Props> = memo(function Vlan8021(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>VLAN Config</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Port Config</div>,
          }}
        />
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.vLANConfig}>VLAN Config</div>
          </div>
        </div>
        <div className={classes.divGridPanelTbarContainer}>
          <div className={classes.divNotificationGrid_bar}>
            <div className={classes.link}>
              <div className={classes.add}>Add</div>
            </div>
            <div className={classes.link2}>
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
                      <div className={classes.vLANID}>VLAN ID</div>
                    </div>
                    <div className={classes.cell2}>
                      <div className={classes.vLANName}>VLAN Name</div>
                    </div>
                    <div className={classes.cell3}>
                      <div className={classes.members}>Members</div>
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
    </div>
  );
});
