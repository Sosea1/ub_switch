import { memo, useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';

import resets from '../../_resets.module.css';
import classes from './PPPoE_Default.module.css';
import ReactDomServer from 'react-dom/server'
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, update } from '../../../main';
import { PPPoE } from '../PPPoE/PPPoE';

interface Props {
  className?: string;
}
/* @figmaId 173:1567 */
export const PPPoE_Default: FC<Props> = memo(function PPPoE_Default(props = {}) {
  const ComponentOne = (): React.ReactNode =>  {
 
    return <PPPoE/>;
   
   };
  
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);

  const value = useSelector((state: CounterState) => state.value);
 const dispatch = useDispatch();

 const handleUpdate = (key: string) => {
   dispatch(update(key));
 };

  useEffect(() => {
    setCurrentComponent(currentComponent)
    var x = document.getElementById('switching_frame') as HTMLElement;
    x.innerHTML = ReactDomServer.renderToString(currentComponent as ReactElement);
  },[currentComponent])

  return (
    <button id = 'PPPoE' className={classes.sidebar_button} onClick={() => {
      let test = (document.getElementById("PPPoE") as HTMLElement);
      let a = window.getComputedStyle(test);
      if (a.background == 'rgb(13, 89, 127)')
    {

    }
    else
    {
      handleUpdate('PPPoE')
      setCurrentComponent(ComponentOne)
    }
    }} 
    style={value != "PPPoE" ? {} : {background: '#0D597F', color: 'white', fontWeight: '700'} } >PPPoE</button>
  );
});
