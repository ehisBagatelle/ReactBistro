import catalogReducer, { initialState } from '../../../src/store/catalog/reducer'
import { GET_CATEGORIES, GET_DISCOUNTS } from '../../../src/store/catalog/types'

describe('Catalog Reducer', () => {
  it('should return the initial state', () => {
    const newState = catalogReducer(undefined, {} as any);
    expect(newState).toEqual(initialState);
  });

  it('should handle GET_CATEGORIES action', () => {
    const mockCategories = [
      {
        id: 1,
        name: 'Category A',
      },
      {
        id: 2,
        name: 'Category B',
      },
    ];

    const action = {
      type: GET_CATEGORIES,
      payload: mockCategories,
    };

    const newState = catalogReducer(initialState, action);

    expect(newState.categories).toEqual(mockCategories);
  });

  it('should handle GET_DISCOUNTS action', () => {
    const mockDiscounts = [
      {
        id: 1,
        type: 'percentage',
        amount: 5,
      },
      {
        id: 2,
        type: 'dollar',
        amount: 2,
      },
    ];

    const action = {
      type: GET_DISCOUNTS,
      payload: mockDiscounts,
    };

    const newState = catalogReducer(initialState, action);

    expect(newState.discounts).toEqual(mockDiscounts);
  });
});
