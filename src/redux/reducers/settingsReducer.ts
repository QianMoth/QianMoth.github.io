import * as types from '../actionTypes'
import { AnyAction } from 'redux'

const initialState = {}

export function SettingsReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      }
    case types.UPDATE_THEME:
      return {
        ...state,
        theme: action.theme,
      }
    case types.UPDATE_SLOGAN:
      return {
        ...state,
        slogan: action.slogan,
      }
    default:
      return state
  }
}
