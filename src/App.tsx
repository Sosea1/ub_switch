import { memo } from 'react';
import type { FC } from 'react';
import { ReactDOM } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MainMonitoring } from './components/MainMonitoring/MainMonitoring';
import { Diagnosis } from './components/Diagnosis/Diagnosis'
import { QoS } from './components/QoS/QoS';
import { Routing } from './components/Routing/Routing';
import { Security } from './components/Security/Security';
import { Switching } from './components/Switching/Switching';
import { System } from './components/System/System';
import { useNavigate } from 'react-router-dom';


interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      
    </div>
  );
});


  //   const navigate = useNavigate();

  //   export const navigateToMonitoring = () => {
    
  //   navigate('/');
  //  };

  // export const navigateToRouting = () => {
    
  //   navigate('/routing');
  // };
  // export const navigateToSwitching = () => {
    
  //   navigate('/switching');
  // };
  // export const navigateToQoS = () => {
    
  //   navigate('/qos');
  // };
  // export const navigateToSecurity = () => {
    
  //   navigate('/security');
  // };
  // export const navigateToSystem = () => {
    
  //   navigate('/system');
  // };
  // export const navigateToDiagnosis = () => {
    
  //   navigate('/diagnosis');
  // };
