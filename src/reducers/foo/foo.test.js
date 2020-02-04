import { toggleCompleteFoo, TOGGLE_COMPLETE_FOO, createFoo, CREATE_FOO } from './foo';

describe('toggleCompleteFoo', () => {
  it('should dispatch an action of toggle complete foo', () => {
    const result = toggleCompleteFoo('some-id');

    const expectedResult = {
      type: TOGGLE_COMPLETE_FOO,
      payload: {
        id: 'some-id'
      },
    };

    expect(result).toEqual(expectedResult);
  })

  it('should dispatch an action of toggle complete foo without id', () => {
    const result = toggleCompleteFoo();

    const expectedResult = {
      type: TOGGLE_COMPLETE_FOO,
      payload: {
        id: undefined
      },
    };

    expect(result).toEqual(expectedResult);
  })
})

describe('createFoo', () => {
  it('should dispatch an action of create a foo', () => {
    const payload = {
      id: 'v4u64j',
      colour: 'blue',
      size: 'medium',
      speed: 'very fast'
    };

    const { id, colour, size, speed } = payload;

    const result = createFoo(id, colour, size, speed);

    const expectedResult = {
      type: CREATE_FOO,
      payload: {
        ...payload,
        createdAt: result.payload.createdAt
      }
    };

    expect(result).toEqual(expectedResult);
  })


  it('should dispatch an action of create a foo without payload', () => {
    const payload = {
      id: undefined,
      colour: undefined,
      size: undefined,
      speed: undefined
    };

    const result = createFoo();

    const expectedResult = {
      type: CREATE_FOO,
      payload: {
        ...payload,
        createdAt: result.payload.createdAt
      }
    };

    expect(result).toEqual(expectedResult);
  })
})