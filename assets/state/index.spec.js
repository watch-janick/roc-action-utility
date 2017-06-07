import { ${ACTION_NAME_CAMELIZED}Actions } from '../actions'
import reducer from '../'

describe('${ACTION_NAME_CAPITALIZED} reducer', () => {
  it('should return the initial state', () => {
    // Given the initial state...
    const state = {
      isFetching: false,
      ${ACTION_NAME_CAMELIZED}: undefined,
      error: undefined,
    }

    // ... When the reducer is called without any action...
    const result = reducer(undefined, {})

    // Then I should get the initial state.
    expect(result).toEqual(state)
  })

  it('should handle the FETCH_${ACTION_NAME_UPPERCASE}_REQUEST action', () => {
    // Given the initial state...
    const state = {
      isFetching: false,
      ${ACTION_NAME_CAMELIZED}: undefined,
      error: undefined,
    }

    // ... When the reducer is called with the FETCH_${ACTION_NAME_UPPERCASE}_REQUEST action...
    const result = reducer(
      state,
      ${ACTION_IMPORT_NAME}.fetch${ACTION_NAME_CAPITALIZED}Request(),
    )

    // Then the reduced state should equal the expected state.
    expect(result).toEqual({
      ...state,
      isFetching: true,
    })
  })

  it('should handle the FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS action', () => {
    const ${ACTION_NAME_CAMELIZED} = {}

    // Given the initial state...
    const state = {
      isFetching: false,
      ${ACTION_NAME_CAMELIZED}: undefined,
      error: undefined,
    }

    // ... When the reducer is called with the FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS action...
    const result = reducer(
      state,
      ${ACTION_IMPORT_NAME}.fetch${ACTION_NAME_CAPITALIZED}Success(${ACTION_NAME_CAMELIZED}),
    )

    // Then the reduced state should equal the expected state.
    expect(result).toEqual({
      ...state,
      ${ACTION_NAME_CAMELIZED},
    })
  })

  it('should handle the FETCH_${ACTION_NAME_UPPERCASE}_FAILURE action', () => {
    const error = { msg: 'an error occurred' }

    // Given the initial state...
    const state = {
      isFetching: false,
      ${ACTION_NAME_CAMELIZED}: undefined,
      error: undefined,
    }

    // ... When the reducer is called with the FETCH_${ACTION_NAME_UPPERCASE}_FAILURE action...
    const result = reducer(
      state,
      ${ACTION_IMPORT_NAME}.fetch${ACTION_NAME_CAPITALIZED}Failure(error),
    )

    // Then the reduced state should equal the expected state.
    expect(result).toEqual({
      ...state,
      error,
    })
  })
}
