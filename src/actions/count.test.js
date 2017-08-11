import { increase, decrease } from './count';
import { INCREASE, DECREASE } from '../constants';

describe('actions', () => {
    describe('count', () => {
        it('should run INCREASE action', () => {
            const amount = 1000;
            const expected = { 'type': INCREASE, amount };
            expect(increase(amount)).toEqual(expected)
        });
        it('should run DECREASE action', () => {
            const amount = 1000;
            const expected = { 'type': DECREASE, amount };
            expect(decrease(amount)).toEqual(expected)
        });
        it('should run INCREASE with string amount', () => {
            const amount = 'abcd';
            const expected = { 'type': INCREASE, amount };
            expect(increase(amount)).toEqual(expected)
        });
        it('should run DECREASE with string amount', () => {
            const amount = 'abcd';
            const expected = { 'type': DECREASE, amount };
            expect(decrease(amount)).toEqual(expected)
        });
        it('should run INCREASE with null amount', () => {
            const amount = null;
            const expected = { 'type': INCREASE, amount };
            expect(increase(amount)).toEqual(expected)
        });
        it('should run DECREASE with string amount', () => {
            const amount = null;
            const expected = { 'type': DECREASE, amount };
            expect(decrease(amount)).toEqual(expected)
        });
    });
});
