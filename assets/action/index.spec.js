  it('should handle the ${ACTION_NAME_UPPERCASE} action', () => {
    // Given the initial state...
    const state = {
      ${ACTION_NAME_CAMELIZED}: undefined,
    }

    // ... When the reducer is called with the ${ACTION_NAME_UPPERCASE} action...
    const result = reducer(
      state,
      ${ACTION_NAME_CAMELIZED}Actions.${ACTION_NAME_CAMELIZED}(),
    )

    // Then the reduced state should equal the expected state.
    expect(result).toEqual({
      ...state,
    })
  })
