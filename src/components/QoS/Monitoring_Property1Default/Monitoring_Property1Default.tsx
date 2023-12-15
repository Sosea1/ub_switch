import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Monitoring_Property1Default.module.css';
import { MonitoringDiagnose1Icon } from './MonitoringDiagnose1Icon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:369 */
export const Monitoring_Property1Default: FC<Props> = memo(function Monitoring_Property1Default(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/monitoring');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>
      <div className={classes.monitoring}>Monitoring</div>
      <div className={classes.monitoringDiagnose1}>
        <MonitoringDiagnose1Icon className={classes.icon} />
      </div>
      </div>
    </div>
  );
});
