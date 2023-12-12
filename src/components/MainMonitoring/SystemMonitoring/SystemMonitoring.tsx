import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './SystemMonitoring.module.css';

interface Props {
  className?: string;
}
/* @figmaId 443:913 */
export const SystemMonitoring: FC<Props> = memo(function SystemMonitoring(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.divPanelHeader}>
        <div className={classes.heading3}>
          <div className={classes.panel}>Panel</div>
        </div>
      </div>
      <div className={classes.divPanelHeader2}>
        <div className={classes.heading32}>
          <div className={classes.systemStatus}>System Status</div>
        </div>
      </div>
      <div className={classes.divPanelHeader3}>
        <div className={classes.heading33}>
          <div className={classes.systemDescription}>System Description</div>
        </div>
      </div>
      <div className={classes.download1}></div>
      <div className={classes.productModel}>Product Model</div>
      <div className={classes.xXXXXXXXX}>XXX-XXX-XXX</div>
      <div className={classes.deviceName}>Device Name</div>
      <div className={classes.uptime}>Uptime</div>
      <div className={classes.serialNumber}>Serial Number</div>
      <div className={classes.mAC}>MAC</div>
      <div className={classes.device}>Device</div>
      <div className={classes._352546DdHhMmSs}>3:5:25:46 (dd:hh:mm:ss) </div>
      <div className={classes.xXXXXXXXXXXX}>XXX-XXX-XXX-XXX</div>
      <div className={classes.xXXXXXXXXXXX2}>XXXX-XXXX-XXXX</div>
      <div className={classes.image4}></div>
    </div>
  );
});
