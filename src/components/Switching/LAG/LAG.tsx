import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './LAG.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 452:1056 */
export const LAG: FC<Props> = memo(function LAG(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.link}>
        <div className={classes.lAGTable}>LAG Table</div>
      </div>
      <div className={classes.link2}>
        <div className={classes.staticLAG}>Static LAG</div>
      </div>
      <div className={classes.link3}>
        <div className={classes.lACPConfig}>LACP Config</div>
      </div>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.globalConfig}>Global Config</div>
            </div>
          </div>
          <div className={classes.divGroupGrid}>
            <div className={classes.divGroupGridPanel}>
              <div className={classes.divGridPanelContent}>
                <div className={classes.divGridPanelTbarContainer}>
                  <div className={classes.divGroupGrid_bar}>
                    <div className={classes.link4}>
                      <div className={classes.delete}>Delete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}>
              <div className={classes.lAGTable2}>LAG Table</div>
            </div>
          </div>
          <div className={classes.divJumbo}>
            <div className={classes.divWidgetFieldlabelWrap}>
              <div className={classes.labelJumbo}>Hash Algorithm:</div>
            </div>
            <div className={classes.divWidgetWrap}>
              <div className={classes.input}>
                <div className={classes.sRCMACDSTMAC}>SRC MAC+DST MAC</div>
              </div>
            </div>
          </div>
        </div>
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <div className={classes.frame22}>
          <div className={classes.noEntriesInThisTable}>No entries in this table.</div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame17}></div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.groupID}>Group ID</div>
          <div className={classes.description}>Description</div>
          <div className={classes.members}>Members</div>
          <div className={classes.operation}>Operation</div>
        </div>
        <div className={classes.total}>Total: 0</div>
      </div>
    </div>
  );
});
