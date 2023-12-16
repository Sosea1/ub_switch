import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './UserManagment_Default.module.css';
import { SlArrowRight } from 'react-icons/sl';
import { CounterState, update } from '../../../main';
import { useDispatch, useSelector } from 'react-redux';
import ReactDomServer from 'react-dom/server'

interface Props {
  className?: string;
}
/* @figmaId 243:1096 */
export const UserManagment_Default: FC<Props> = memo(function UserManagment_Default(props = {}) {
  const ComponentOne =(): React.ReactNode  => {

    return <>1</>
   };
  
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  
  
    const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };
  
      useEffect(() => {
        setCurrentComponent(currentComponent)
        var x = document.getElementById('system_frame') as HTMLElement;
        x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
      },[currentComponent])
  

  return (
    <>
    <button id = "UserManagment" className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("UserManagment") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('UserManagment')
      setCurrentComponent(ComponentOne)
    }
    }} style={value != "UserManagment" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >User Managment
        </button>
     </> 
  );
});
