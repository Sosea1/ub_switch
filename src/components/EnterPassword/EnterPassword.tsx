import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _Property1Variant4 } from './_Property1Variant4/_Property1Variant4';
import classes from './EnterPassword.module.css';
import { Extercom_logo11Icon } from './Extercom_logo11Icon.js';
import { PingButton_Property1Default } from './PingButton_Property1Default/PingButton_Property1Default';
import { Route, useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}

export const EnterPassword: FC<Props> = memo(function EnterPassword(props = {}) {
  const navigate = useNavigate();

  const navigateTo = () => {
 
  navigate('/monitoring');
 };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame33}>
        <div className={classes.frame29}>
          <div className={classes.login}>Login</div>
          <PingButton_Property1Default
            className={classes.pingButton}
            text={{
              ping: <div onClick={navigateTo} className={classes.ping}>Submit</div>,
            }}
          />
          <div className={classes.frame30}>
            <div className={classes.userName}>User Name:</div>
            <_Property1Variant4
              className={classes.unnamed}
              text={{
                _1921681: <div className={classes._1921681}>64</div>,
              }}
            />
          </div>
          <div className={classes.frame31}>
            <div className={classes.password}>Password: </div>
            <_Property1Variant4
              className={classes.unnamed2}
              text={{
                _1921681: <div className={classes._19216812}>1000</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.exterCom_logo11}>
          <Extercom_logo11Icon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
