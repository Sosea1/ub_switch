import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Notification.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import { IoMdAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

interface Props {
  className?: string;
}
/* @figmaId 421:1426 */
export const Notification: FC<Props> = memo(function Notification(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Notification Config</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Trap Config</div>,
          }}
        />
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig2}>
        <div className={classes.divPanelHeader}>
          <div className={classes.heading3}>
            <div className={classes.notificationConfig}>Notification Config</div>
          </div>
        </div>
        <div className={classes.divGridPanelTbarContainer}>
          <div className={classes.divNotificationGrid_bar}>
            <div className={classes.link}>
              <div className={classes.spanIcon}></div>
              <div className={classes.add}>Add</div>
              <IoMdAddCircle style={{cursor: 'pointer'}} className={classes.add1} />
            </div>
            <div className={classes.link2}>
              <div className={classes.spanIcon2}></div>
              <div className={classes.delete}>Delete</div>
              <TiDelete style={{cursor: 'pointer'}} className={classes.delete1}/>
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
                <div className={classes.cell}>
                  <div className={classes.iPAddress}>IP Address</div>
                </div>
                <div className={classes.cell2}>
                  <div className={classes.iPMode}>IP Mode</div>
                </div>
                <div className={classes.cell3}>
                  <div className={classes.uDPPort}>
                    <div className={classes.textBlock}>UDP</div>
                    <div className={classes.textBlock2}>Port</div>
                  </div>
                </div>
                <div className={classes.cell4}>
                  <div className={classes.user}>User</div>
                </div>
                <div className={classes.cell5}>
                  <div className={classes.securityMode}>
                    <div className={classes.textBlock3}>Security</div>
                    <div className={classes.textBlock4}>Mode</div>
                  </div>
                </div>
                <div className={classes.cell6}>
                  <div className={classes.securityLevel}>Security Level</div>
                </div>
                <div className={classes.cell7}>
                  <div className={classes.type}>Type</div>
                </div>
                <div className={classes.cell8}>
                  <div className={classes.retryTimes}>
                    <div className={classes.textBlock5}>Retry</div>
                    <div className={classes.textBlock6}>Times</div>
                  </div>
                </div>
                <div className={classes.cell9}>
                  <div className={classes.timeout}>Timeout</div>
                </div>
                <div className={classes.cell10}>
                  <div className={classes.operation}>Operation</div>
                </div>
                <div className={classes.cell11}>
                  <div className={classes.index}>Index</div>
                  <input id='main_check' style={{cursor: 'pointer'}} type="checkbox" className={classes.input2}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
