import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Security_Property1Variant3.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  classes?: {
    thenounproject1?: string;
    root?: string;
  };
}
/* @figmaId 112:266 */
export const Security_Property1Variant3: FC<Props> = memo(function Security_Property1Variant3(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/security');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>
      <div className={classes.security}>Security</div>
      <div className={`${props.classes?.thenounproject1 || ''} ${classes.thenounproject1}`}></div>
      </div>
    </div>
  );
});
