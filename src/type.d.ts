interface IButton {
    id: string
    isOpen: bool
  }
  
  type ButtonState = {
    buttons: IButton[]
  }
  
  type ButtonAction = {
    type: string
    button: IButton
  }
  
  type DispatchType = (args: ButtonAction) => ButtonAction