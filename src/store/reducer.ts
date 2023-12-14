import * as actionTypes from "./actionTypes"

const initialState: ButtonState = {
    buttons: [
        
    ]
}

const reducer = (
    state: ButtonState = initialState,
    action: ButtonAction
):  ButtonState => {
    switch(action.type) {
        case actionTypes.OPEN_BUTTON:
            const newButton: IButton = {
                id: action.button.id,
                isOpen: action.button.isOpen
            }
            return {
                ...state,
                buttons: state.buttons.concat(newButton)
            }
        case actionTypes.CLOSE_BUTTON:
            const updatedButtons: IButton[] = state.buttons.filter(
                button => button.id !== action.button.id
            )
            return {
                ...state,
                buttons: updatedButtons
            }
    }
    return state

}

export default reducer
