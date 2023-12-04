import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './L2functions_Property1Default.module.css';
import { Switch1Icon } from './Switch1Icon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:199 */
export const L2functions_Property1Default: FC<Props> = memo(function L2functions_Property1Default(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/switching');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>
      <div className={classes.switch1}>
        <Switch1Icon className={classes.icon} />
      </div>
      <div className={classes.switching}>Switching</div>
      </div>
    </div>
  );
});
