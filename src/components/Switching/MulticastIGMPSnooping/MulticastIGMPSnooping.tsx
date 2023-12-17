import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MulticastIGMPSnooping.module.css';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';

interface Props {
  className?: string;
}
/* @figmaId 452:1129 */
export const MulticastIGMPSnooping: FC<Props> = memo(function MulticastIGMPSnooping(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <PingButton_Property1Default
        className={classes.pingButton}
        text={{
          ping: <div className={classes.ping}>Global Config</div>,
        }}
      />
      <PingButton_Property1Default
        className={classes.pingButton2}
        text={{
          ping: <div className={classes.ping2}>Port Config</div>,
        }}
      />
      <div className={classes.link}>
        <div className={classes.staticGroupConfig}>Static Group Config</div>
      </div>
      <div className={classes.link2}>
        <div className={classes.iGMPAuthentification}>IGMP Authentification</div>
      </div>
      <div className={classes.divPanelHeader}>
        <div className={classes.heading3}>
          <div className={classes.globalConfig}>Global Config</div>
        </div>
      </div>
      <div className={classes.divPanelHeader2}>
        <div className={classes.heading32}>
          <div className={classes.iGMPVLANConfig}>IGMP VLAN Config</div>
        </div>
      </div>
      <div className={classes.divJumbo}>
        <div className={classes.divWidgetFieldlabelWrap}>
          <div className={classes.labelJumbo}>IGMP Snooping:</div>
        </div>
        <div className={classes.divWidgetTips}>
          <div className={classes.divContent}>
            <div className={classes.enable}>Enable</div>
            <input id='main_check' style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
          </div>
        </div>
      </div>
      <div className={classes.divJumbo2}>
        <div className={classes.divWidgetFieldlabelWrap2}>
          <div className={classes.labelJumbo2}>Unknown Multicast Groups:</div>
        </div>
        <div className={classes.divWidgetTips2}>
          <div className={classes.divContent2}>
            <div className={classes.forward}>Forward</div>
            <input type="radio" checked style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} name="Multicast" />
          </div>
        </div>
        <div className={classes.divContent3}>
          <div className={classes.discard}>Discard</div>
          <input type="radio" style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} name="Multicast" />
        </div>
      </div>
      <div className={classes.divJumbo3}>
        <div className={classes.divWidgetFieldlabelWrap3}>
          <div className={classes.labelJumbo3}>Header Validation:</div>
        </div>
        <div className={classes.divWidgetTips3}>
          <div className={classes.divContent4}>
            <div className={classes.enable2}>Enable</div>
            <input id='main_check1' style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} type="checkbox" />
          </div>
        </div>
      </div>
      <div className={classes.divJumbo4}>
        <div className={classes.divWidgetFieldlabelWrap4}>
          <div className={classes.labelJumbo4}>IGMP Version:</div>
        </div>
        <div className={classes.divWidgetTips4}>
          <div className={classes.divContent5}>
            <div className={classes.v1}>v1</div>
            <input type="radio" checked style={{cursor: 'pointer', position:'absolute', left:'-30px',top:'5px'}} name="IGMP" />
          </div>
        </div>
        <div className={classes.divWidgetTips5}>
          <div className={classes.divContent6}>
            <div className={classes.v2}>v2</div>
            <input type="radio" style={{cursor: 'pointer', position:'absolute', left:'-20px',top:'5px'}} name="IGMP" />
          </div>
        </div>
        <div className={classes.divWidgetTips6}>
          <div className={classes.divContent7}>
            <div className={classes.v3}>v3</div>
            <input type="radio" style={{cursor: 'pointer', position:'absolute', left:'-20px',top:'5px'}} name="IGMP" />
          </div>
        </div>
      </div>
      <PingButton_Property1Default
        className={classes.pingButton3}
        text={{
          ping: <div className={classes.ping3}>Apply</div>,
        }}
      />
      <div className={classes.table}>
        <div className={classes.bodyRowData}>
          <div className={classes.spanStatusTotal}>
            <div className={classes.total1}>Total: 1</div>
          </div>
        </div>
      </div>
      <div className={classes.divScrollXContainer}>
        <div className={classes.table2}>
          <div className={classes.bodyRow}></div>
        </div>
        <div className={classes.frame25}>
          <div className={classes.frame27}>
            <div className={classes.cell}>
              <div className={classes._1}>1</div>
            </div>
            <div className={classes.cell2}>
              <div className={classes.disabled}>Disabled</div>
            </div>
            <div className={classes.cell3}>
              <div className={classes.disabled2}>Disabled</div>
            </div>
            <div className={classes.cell4}>
              <div className={classes.disabled3}>Disabled</div>
            </div>
            <div className={classes.cell5}>
              <div className={classes.disabled4}>Disabled</div>
            </div>
            <div className={classes.cell6}></div>
            <div className={classes.cell7}></div>
            <div className={classes.cell8}></div>
            <div className={classes.cell9}></div>
          </div>
        </div>
      </div>
      <div className={classes.divContainer}>
        <div className={classes.table3}>
          <div className={classes.bodyRow2}>
            <div className={classes.frame252}>
              <div className={classes.frame272}>
                <div className={classes.cell10}>
                  <div className={classes.vLANID}>VLAN ID</div>
                </div>
                <div className={classes.cell11}>
                  <div className={classes.iGMPSnoopingStatus}>IGMP Snooping Status</div>
                </div>
                <div className={classes.cell12}>
                  <div className={classes.fastLeave}>Fast Leave</div>
                </div>
                <div className={classes.cell13}>
                  <div className={classes.reportSuppression}>Report Suppression</div>
                </div>
                <div className={classes.cell14}>
                  <div className={classes.iGMPSnoopingQuerier}>IGMP Snooping Querier</div>
                </div>
                <div className={classes.cell15}>
                  <div className={classes.dynamicRouterPorts}>Dynamic Router Ports</div>
                </div>
                <div className={classes.cell16}>
                  <div className={classes.staticRouterPorts}>Static Router Ports</div>
                </div>
                <div className={classes.cell17}>
                  <div className={classes.forbiddenRouterPorts}>Forbidden Router Ports</div>
                </div>
                <div className={classes.cell18}>
                  <div className={classes.operation}>Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
