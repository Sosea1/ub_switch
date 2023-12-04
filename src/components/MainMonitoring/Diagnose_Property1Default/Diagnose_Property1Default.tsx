import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Diagnose_Property1Default.module.css';

import { Navigate, useNavigate } from 'react-router-dom';





interface Props {
  className?: string;
  classes?: {
    pngtree_diagnosis_file_icon_pn?: string;
    root?: string;
  };
}
/* @figmaId 112:204 */
export const Diagnose_Property1Default: FC<Props> = memo(function Diagnose_Property1Default(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/diagnosis');
 };
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2} onClick={navigateTo}>

      
      <div className={classes.diagnosis}>Diagnosis</div>
      <div
        className={`${props.classes?.pngtree_diagnosis_file_icon_pn || ''} ${classes.pngtree_diagnosis_file_icon_pn}`}
      ></div>
      </div>
    </div>
  );
});
