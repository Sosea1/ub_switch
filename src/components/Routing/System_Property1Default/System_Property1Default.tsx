import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './System_Property1Default.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    settings1?: string;
    root?: string;
  };
}
/* @figmaId 112:203 */
export const System_Property1Default: FC<Props> = memo(function System_Property1Default(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/system');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>
      <div className={classes.system}>System</div>
      <div className={`${props.classes?.settings1 || ''} ${classes.settings1}`}></div>
      </div>
    </div>
  );
});
