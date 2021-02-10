
export const RESET_IN_START_VALUE ='RESET_IN_START_VALUE'
export const INCREMENT_VALUE ='INCREMENT_VALUE'
export const SET_CHANGE_VALUE = 'CHANGE_VALUE'
export const SET_VALUE_START = 'SET_VALUE_START'
export const SET_VALUE_MAX = 'SET_VALUE_MAX'



export type SetValueStartType = {
    type: typeof SET_VALUE_START
    valueStart: number
}
export type SetValueMaxType = {
    type: typeof SET_VALUE_MAX
    valueMax: number
}
export type ResetInStartType = {
    type: typeof RESET_IN_START_VALUE
}
export type IncrementType = {
    type:typeof INCREMENT_VALUE
}

export type SetChangeValueType = {
    type: typeof SET_CHANGE_VALUE
    change: boolean
}
export type ActionType = ResetInStartType
    | IncrementType | SetChangeValueType
    | SetValueStartType | SetValueMaxType
export type InitialStateType = {
    change: boolean,
    count: number,
    valueMax: number,
    valueStart: number
}
const InitialState:InitialStateType = {
    change: false,
    count: 0,
    valueMax: 0,
    valueStart: 0
}

export const reducer = (state=InitialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case INCREMENT_VALUE: {
            return{
                ...state,count: state.count + 1
            }
        }
        case RESET_IN_START_VALUE: {
            return{
                ...state,count: state.valueStart
            }
        }
        case SET_CHANGE_VALUE: {
            return{
                ...state,
                change: action.change
            }
        }
        case SET_VALUE_START: {
            return{
                ...state,
                valueStart: action.valueStart
            }
        }
        case SET_VALUE_MAX: {
            return{
                ...state,
                valueMax: action.valueMax
            }
        }

        default:
            return state

    }
}



export const IncrementValueAC = (): IncrementType => {
    return {type: INCREMENT_VALUE}
}
export const ResetStartValueAC = (): ResetInStartType => {
    return {type: RESET_IN_START_VALUE}
}

export const SetChangeValueAC = (change: boolean): SetChangeValueType => {
    return {type: SET_CHANGE_VALUE, change}
}
export const SetStartValueAC = (valueStart: number): SetValueStartType => {
    return {type: SET_VALUE_START, valueStart}
}
export const SetMaxValueAC = (valueMax: number): SetValueMaxType => {
    return {type: SET_VALUE_MAX, valueMax}
}






