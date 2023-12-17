import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import classes from './PPPoE.module.css';

interface Props {
  className?: string;
}
/* @figmaId 490:13052 */
export const PPPoE: FC<Props> = memo(function PPPoE(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.emulatorTpLinkComByHtmlToDesig}>
        <div className={classes.divPanelWrap}>
          <div className={classes.divPanelHeader}>
            <div className={classes.heading3}>
              <div className={classes.pPPoEIDInsertion}>PPPoE ID Insertion</div>
            </div>
          </div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div className={classes.ping}>Apply</div>,
            }}
          />
          <div className={classes.divNotes}></div>
        </div>
        <div className={classes.divJumbo}>
          <div className={classes.divWidgetFieldlabelWrap}>
            <div className={classes.labelJumbo}>PPPoE ID Insertion:</div>
          </div>
          <div className={classes.divWidgetTips}></div>
          <div className={classes.divWidgetTips2}>
            <div className={classes.divContent}>
              <div className={classes.enable}>Enable</div>
              <input style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={classes.divPanelWrap2}>
          <div className={classes.divPanelHeader2}>
            <div className={classes.heading32}>
              <div className={classes.portConfig}>Port Config</div>
            </div>
          </div>
          <div className={classes.divPanelContentContainer}>
            <div className={classes.divTab}></div>
            <div className={classes.divWidgetWrapOuter}></div>
            <div className={classes.divWidgetWrap}>
              <div className={classes.list}>
                <div className={classes.itemLink}>
                  <div className={classes.After}></div>
                  <div className={classes.spanSubNavigatorText}>
                    <div className={classes.uNIT1}>UNIT1</div>
                  </div>
                </div>
                <div className={classes.itemLink2}>
                  <div className={classes.After2}></div>
                  <div className={classes.spanSubNavigatorText2}>
                    <div className={classes.lAGS}>LAGS</div>
                  </div>
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
                          <div className={classes.port}>Port</div>
                        </div>
                        <div className={classes.cell2}>
                          <div className={classes.circuitID}>Circuit-ID</div>
                        </div>
                        <div className={classes.cell3}>
                          <div className={classes.circuitIDType}>Circuit-ID Type</div>
                        </div>
                        <div className={classes.cell4}>
                          <div className={classes.uDFValue}>UDF Value</div>
                        </div>
                        <div className={classes.cell5}>
                          <div className={classes.remoteID}>Remote-ID</div>
                        </div>
                        <div className={classes.cell6}>
                          <div className={classes.remoteIDValue}>Remote-ID Value</div>
                        </div>
                      </div>
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
