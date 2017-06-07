it('should create an action to fetch ${ACTION_NAME_UPPERCASE}', () => {
  // When I create fetch ${ACTION_NAME_UPPERCASE} request action
  const action = ${ACTION_IMPORT_NAME}.${ACTION_NAME_CAMELIZED}()

  // Then it should match the expected action
  const expectedAction = {
    type: ${ACTION_IMPORT_NAME}.FETCH_${ACTION_NAME_UPPERCASE}_REQUEST,
  }
  expect(action).toEqual(expectedAction)
})
