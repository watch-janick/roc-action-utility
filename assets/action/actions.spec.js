it('should create an action to fetch ${ACTION_NAME_UPPERCASE}', () => {
  // When I create fetch ${ACTION_NAME_UPPERCASE} request action
  const action = ${ACTION_NAME_CAMELIZED}Actions.${ACTION_NAME_CAMELIZED}()

  // Then it should match the expected action
  const expectedAction = {
    type: ${ACTION_NAME_CAMELIZED}Actions.FETCH_${ACTION_NAME_UPPERCASE}_REQUEST,
  }
  expect(action).toEqual(expectedAction)
})
