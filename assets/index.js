import { ${ACTION_NAME_CAMELIZED}Actions } from './actions'

const initialState = {
  isFetching: false,
  ${ACTION_NAME_CAMELIZED}: undefined,
  error: undefined,
}

export default function ${ACTION_NAME_CAMELIZED} (state = initialState, action) {
  switch (action.type) {
    case ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ${ACTION_NAME_CAMELIZED}: action.${ACTION_NAME_CAMELIZED},
      }

    case ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    default:
      return state
  }
}
