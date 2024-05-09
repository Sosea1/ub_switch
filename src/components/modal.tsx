import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

import  './modal_styles.css';
import { Button } from 'semantic-ui-react';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText: string;
  onApply: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  onApply
}) => {
  const modal = (
    <React.Fragment>
      <div className='Backdrop'/>
      <div className='Wrapper'>
        <div className='StyledModal'>
          <div className='Header'>
            <div className='HeaderText'>{headerText}</div>
          </div>
          <div className='Content'>{modalContent}</div>
          <div className='Footer'>
            <button className='CancelButton' onClick={hide}>Cancel</button>
            <button className='ApplyButton' onClick={onApply}>Apply</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};