import { services${ACTION_NAME_CAPITALIZED} } from '$src/services/${ACTION_NAME_CAMELIZED}'

export const ${ACTION_NAME_CAMELIZED} = {
  FETCH_${ACTION_NAME_UPPERCASE}_REQUEST: '${ACTION_NAME_CAMELIZED}/FETCH_${ACTION_NAME_UPPERCASE}_REQUEST',
  fetch${ACTION_NAME_CAPITALIZED}Request () {
    return {
      type: ${ACTION_NAME_CAMELIZED}.FETCH_${ACTION_NAME_UPPERCASE}_REQUEST,
    }
  },

  FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS: '${ACTION_NAME_CAMELIZED}/FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS',
  fetch${ACTION_NAME_CAPITALIZED}Success (response) {
    return {
      type: ${ACTION_NAME_CAMELIZED}.FETCH_${ACTION_NAME_UPPERCASE}_SUCCESS,
      response,
    }
  },

  FETCH_${ACTION_NAME_UPPERCASE}_FAILURE: '${ACTION_NAME_CAMELIZED}/FETCH_${ACTION_NAME_UPPERCASE}_FAILURE',
  fetch${ACTION_NAME_CAPITALIZED}Failure (error) {
    return {
      type: ${ACTION_NAME_CAMELIZED}.FETCH_${ACTION_NAME_UPPERCASE}_FAILURE,
      error,
    }
  },

  fetch${ACTION_NAME_CAPITALIZED} () {
    return (dispatch) => {
      dispatch(${ACTION_NAME_CAMELIZED}Actions.fetch${ACTION_NAME_CAPITALIZED}Request())
      return services${ACTION_NAME_CAPITALIZED}.fetch${ACTION_NAME_CAPITALIZED}()
        .then(${ACTION_NAME_CAMELIZED} => {
          dispatch(${ACTION_NAME_CAMELIZED}Actions.fetch${ACTION_NAME_CAPITALIZED}Success(${ACTION_NAME_CAMELIZED}))
        })
        .catch(error => {
          dispatch(${ACTION_NAME_CAMELIZED}Actions.fetch${ACTION_NAME_CAPITALIZED}Failure(error))

          // rethrow so returned Promise is rejected
          throw error
        })
    }
  },
}
