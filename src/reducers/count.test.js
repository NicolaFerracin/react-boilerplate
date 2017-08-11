import count from './count';
import { increase, decrease } from '../actions/count';
import { INCREASE, DECREASE } from '../constants';

let state = undefined;
describe('reducers', () => {
  describe('count', () => {
    it('should provide the initial state', () => {
        state = count( state, { type: undefined });
        expect(state.number).toBe(1)
    });
    it('should handle INCREASE action', () => {
        state = count(state, { type: INCREASE, amount: 1 });
        expect(state.number).toBe(2)
    })
    it('should handle DECREASE action', () => {
        state = count(state, { type: DECREASE, amount: 1 });
        expect(state.number).toBe(1);
    });
    it('should ignore unknown actions', () => {
        state = count(state, { type: 'unknown', amount: null });
        expect(state.number).toBe(1)
    });
  });
});
