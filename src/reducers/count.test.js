import counter from './count';
import { increase, decrease } from '../actions/count';
import { INCREASE, DECREASE } from '../constants';

let state = undefined;
describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
        state = counter( state, { type: undefined });
        expect(state.number).toBe(1)
    });
    it('should handle INCREASE action', () => {
        state = counter(state, { type: INCREASE, amount: 1 });
        expect(state.number).toBe(2)
    })
    it('should handle DECREASE action', () => {
        state = counter(state, { type: DECREASE, amount: 1 });
        expect(state.number).toBe(1);
    });
    it('should ignore unknown actions', () => {
        state = counter(state, { type: 'unknown', amount: null });
        expect(state.number).toBe(1)
    });
  });
});
