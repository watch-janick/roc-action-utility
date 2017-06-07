import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ${ACTION_NAME_CAMELIZED}Actions } from '../actions'
import { services${ACTION_NAME_CAPITALIZED} } from '$src/services/${ACTION_NAME_CAMELIZED}'

describe('${ACTION_IMPORT_NAME}', () => {
  it('should create an action to fetch ${ACTION_NAME_UPPERCASE}', () => {
    // When I create fetch ${ACTION_NAME_UPPERCASE} request action
    const action = ${ACTION_IMPORT_NAME}.fetch${ACTION_NAME_CAPITALIZED}Request()

    // Then it should match the expected action
    const expectedAction = {
      type: ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_REQUEST,
    }
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to handle fetch ${ACTION_NAME_UPPERCASE} success', () => {
    // Given some data
    const data = {}

    // ... When I create fetch ${ACTION_NAME_UPPERCASE} action
    const action = ${ACTION_IMPORT_NAME}.fetch${ACTION_NAME_CAPITALIZED}Success(data)

    // Then it should match the expected action
    const expectedAction = {
      type: ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS,
      messages,
    }
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to handle fetch ${ACTION_NAME_UPPERCASE} error', () => {
    // Given an error object ...
    const error = { msg: 'an error occurred' }

    // ... When I create fetch ${ACTION_NAME_UPPERCASE} failure action
    const action = ${ACTION_IMPORT_NAME}.fetch${ACTION_NAME_CAPITALIZED}Failure(error)

    // Then it should match the expected action
    const expectedAction = {
      type: ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_FAILURE,
      error,
    }
    expect(action).toEqual(expectedAction)
  })

  it('should create an async action to handle fetch ${ACTION_NAME_UPPERCASE}', (done) => {
    // Given a request to fetch ${ACTION_NAME_UPPERCASE} ...
    const store = mockStore()
    const data = {}
    spyOn(services${ACTION_NAME_CAPITALIZED}, 'fetch${ACTION_NAME_CAPITALIZED}').and.returnValue(Promise.resolve(messages))

    // ... When I create an async resolved fetch ${ACTION_NAME_UPPERCASE} action
    const action = ${ACTION_NAME_CAMELIZED}Actions.fetch${ACTION_NAME_CAPITALIZED}()

    // Then it should match the expected actions
    const expectedActions = [
      {
        type: ${ACTION_NAME_CAMELIZED}Actions.FETCH_${ACTION_NAME_UPPERCASE}_REQUEST,
      },
      {
        type: ${ACTION_NAME_CAMELIZED}Actions.FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS,
        ${ACTION_NAME_CAMELIZED}: ${ACTION_NAME_CAMELIZED},
      },
    ]

    store.dispatch(action)
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
}
