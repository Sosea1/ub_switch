import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Networkqos1Icon } from './Networkqos1Icon.js';
import classes from './QoS_Property1Variant3.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:270 */
export const QoS_Property1Variant3: FC<Props> = memo(function QoS_Property1Variant3(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/qos');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>
      <div className={classes.qoS}>QoS</div>
      <div className={classes.networkqos1}>
        <Networkqos1Icon className={classes.icon} />
      </div>
      </div>
    </div>
  );
});
