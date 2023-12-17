import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './DHCPRelay.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 577:1362 */
export const DHCPRelay: FC<Props> = memo(function DHCPRelay(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.globalConfig}>Global Config</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.frame16}>
        <div className={classes.dHCPRelay}>DHCP Relay:</div>
        <div className={classes.dHCPRelayTimeThreshold}>DHCP Relay Time Threshold:</div>
        <_Property1Variant4
          className={classes.unnamed}
          text={{
            _1921681: <div className={classes._1921681}>64</div>,
          }}
        />
        <div className={classes.dHCPRelayHops}>DHCP Relay Hops:</div>
        <_Property1Variant4
          className={classes.unnamed2}
          text={{
            _1921681: <div className={classes._19216812}>10</div>,
          }}
        />
        <div className={classes.delete}>Delete</div>
        <div className={classes.enable}>Enable</div>
        <div className={classes.option82Config}>Option 82 Config</div>
        <div className={classes._116}>(1-16)</div>
        <div className={classes.seconds65535}>seconds (0-65535)</div>
        <div className={classes.add}>Add</div>
        <div className={classes.divPanelContentContainer}>
          <div className={classes.divLinkGrid}>
            <div className={classes.divLinkGridPanel}>
              <div className={classes.divGridPanelContent}>
                <div className={classes.divGridPanelContentContainer}>
                  <div className={classes.divContainer}>
                    <div className={classes.divScrollXContainer}>
                      <div className={classes.divContainer2}>
                        <div className={classes.table}>
                          <div className={classes.bodyRow}>
                            <div className={classes.cell}>
                              <div className={classes.divCheckboxGroupContainer}>
                                <div className={classes.divWidgetWrap}>
                                  <div className={classes.label}>
                                    <div className={classes.spanIcon}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={classes.cell2}>
                              <div className={classes.port}>Port</div>
                            </div>
                            <div className={classes.cell3}>
                              <div className={classes.option82Support}>Option 82 Support</div>
                            </div>
                            <div className={classes.cell4}>
                              <div className={classes.option82Policy}>Option 82 Policy</div>
                            </div>
                            <div className={classes.cell5}>
                              <div className={classes.format}>Format</div>
                              <div className={classes.cell6}>
                                <div className={classes.circuitIDCustomization}>Circuit ID Customization</div>
                                <div className={classes.cell7}>
                                  <div className={classes.circuitID}>Circuit ID</div>
                                </div>
                              </div>
                            </div>
                            <div className={classes.cell8}>
                              <div className={classes.remoteIDCustomization}>Remote ID Customization</div>
                            </div>
                            <div className={classes.cell9}>
                              <div className={classes.remoteID}>Remote ID</div>
                              <div className={classes.cell10}>
                                <div className={classes.lAG}>LAG</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divLinkGrid_statusBar}>
                    <div className={classes.table2}>
                      <div className={classes.bodyRowData}>
                        <div className={classes.spanStatusTotal}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divGridPanelFbarContainer}></div>
              </div>
            </div>
          </div>
          <div className={classes.divTab}>
            <div className={classes.divWidgetWrapOuter}>
              <div className={classes.divWidgetWrap2}>
                <div className={classes.list}>
                  <div className={classes.itemLink}>
                    <div className={classes.After}></div>
                    <div className={classes.spanSubNavigatorText}>
                      <div className={classes.uNIT1}>UNIT1</div>
                    </div>
                  </div>
                </div>
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
      </div>
    </div>
  );
});
