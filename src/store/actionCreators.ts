import * as actionTypes from "./actionTypes"

export function openButton(button: IButton){
    const action: ButtonAction = {
        type: actionTypes.OPEN_BUTTON,
        button
    }

    return doAction(action)
}

export function closeButton(button: IButton){
    const action: ButtonAction = {
        type: actionTypes.CLOSE_BUTTON,
        button
    }

    return doAction(action)
}

export function doAction(action: ButtonAction) {
    return (dispatch: DispatchType) => {
        dispatch(action);
    }
}