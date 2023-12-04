import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './L3functions_Property1Variant3.module.css';
import { Router1Icon } from './Router1Icon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:275 */
export const L3functions_Property1Variant3: FC<Props> = memo(function L3functions_Property1Variant3(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/routing');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>
      <div className={classes.routing}>Routing</div>
      <div className={classes.router1}>
        <Router1Icon className={classes.icon} />
      </div>
      </div>
    </div>
  );
});
