import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './DHCPServer.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 452:2384 */
export const DHCPServer: FC<Props> = memo(function DHCPServer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.dHCPServer}>DHCP Server:</div>
        <div className={classes.option138}>Option 138:</div>
        <_Property1Variant4
          className={classes.unnamed}
          text={{
            _1921681: <div className={classes._1921681}>64</div>,
          }}
        />
        <div className={classes.option60}>Option 60:</div>
        <_Property1Variant4
          className={classes.unnamed2}
          text={{
            _1921681: <div className={classes._19216812}>10</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton}
          text={{
            ping: <div className={classes.ping}>Apply</div>,
          }}
        />
        <div className={classes.delete}>Delete</div>
        <div className={classes.enable}>Enable</div>
        <PingButton_Property1Default
          className={classes.pingButton2}
          text={{
            ping: <div className={classes.ping2}>Default</div>,
          }}
        />
        <div className={classes.pingTimeConfig}>Ping Time Config</div>
        <div className={classes._1064Hex}>(10-64 Hex)</div>
        <div className={classes.NullOr1064Hex}>(Null or 10-64 Hex)</div>
        <div className={classes.add}>Add</div>
      </div>
      <div className={classes.frame17}>
        <div className={classes.pingTimeout}>Ping Timeout:</div>
        <_Property1Variant4
          className={classes.unnamed3}
          text={{
            _1921681: <div className={classes._19216813}>64</div>,
          }}
        />
        <div className={classes.pingTimeConfig2}>Ping Time Config</div>
        <_Property1Variant4
          className={classes.unnamed4}
          text={{
            _1921681: <div className={classes._19216814}>10</div>,
          }}
        />
        <PingButton_Property1Default
          className={classes.pingButton3}
          text={{
            ping: <div className={classes.ping3}>Apply</div>,
          }}
        />
        <div className={classes.delete2}>Delete</div>
        <PingButton_Property1Default
          className={classes.pingButton4}
          text={{
            ping: <div className={classes.ping4}>Default</div>,
          }}
        />
        <div className={classes.excludedIPAddressConfig}>Excluded IP Address Config</div>
        <div className={classes._1064Hex2}>(10-64 Hex)</div>
        <div className={classes.NullOr1064Hex2}>(Null or 10-64 Hex)</div>
        <div className={classes.add2}>Add</div>
        <div className={classes.line12}></div>
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
                  </div>
                  <div className={classes.cell2}>
                    <div className={classes.startingIPAddress}>Starting IP Address</div>
                  </div>
                  <div className={classes.cell3}>
                    <div className={classes.endingIPAddress}>Ending IP Address</div>
                  </div>
                  <div className={classes.cell4}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
