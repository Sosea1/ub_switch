import { memo, useState } from 'react';
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
  const [text, setText] = useState('');
  const handleKeyDown = (e: any) => {
    if (e.code == "Enter") {
      navigateTo();
    }
  };
  const navigateTo = () => {
    const username_input = document.getElementById('username') as HTMLInputElement | null;
    const username_value = username_input?.value;
    const password_input = document.getElementById('password') as HTMLInputElement | null;
    const password_value = password_input?.value;
    console.log(username_value) 
    console.log(password_value)
    if (username_value == "admin"  && password_value == "admin")
    {
      navigate('/monitoring');
    }
    else
    {
      setText('Wrong username or password!');
    }
 };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame33}>
        <div className={classes.frame29}>
          <div className={classes.login}>Login</div>
          <div id="message_div" className={classes.message_div}>{text}</div>
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

                _1921681: <input id="username" onKeyDown={handleKeyDown} className={classes._1921681}/>,

              }}
            />
          </div>
          <div className={classes.frame31}>
            <div className={classes.password}>Password: </div>
            <_Property1Variant4
              className={classes.unnamed2}
              text={{

                _1921681: <input id="password" onKeyDown={handleKeyDown} className={classes._19216812}/>,

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
