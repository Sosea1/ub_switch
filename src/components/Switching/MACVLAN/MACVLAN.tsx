import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MACVLAN.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 470:10530 */
export const MACVLAN: FC<Props> = memo(function MACVLAN(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.portEnable}>Port Enable</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer}>
            <div className={classes.divTab}>
              <div className={classes.divWidgetWrapOuter}>
                <div className={classes.divWidgetWrap}>
                  <div className={classes.list}>
                    <div className={classes.itemLink}>
                      <div className={classes.uNIT1}>UNIT1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divPorts}></div>
            <div className={classes.image5}></div>
          </div>
        </div>
      </div>
      <PingButton_Property1Default
        className={classes.pingButton}
        text={{
          ping: <div className={classes.ping}>Apply</div>,
        }}
      />
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
                    <div className={classes.index}>Index</div>
                  </div>
                  <div className={classes.cell2}>
                    <div className={classes.mACAddress}>MAC Address</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.description}>Description</div>
                  </div>
                  <div className={classes.cell4}>
                    <div className={classes.vLANID}>VLAN ID</div>
                  </div>
                  <div className={classes.cell5}>
                    <div className={classes.vLANName}>VLAN Name</div>
                  </div>
                  <div className={classes.cell6}>
                    <div className={classes.operation}>Operation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divPanelHeader2}>
        <div className={classes.heading32}>
          <div className={classes.mACVLANConfig}>MAC VLAN Config</div>
        </div>
      </div>
    </div>
  );
});
