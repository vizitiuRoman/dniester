import { reducer, initialState } from './service.reducer';

describe('Service Reducer', () => {
    describe('unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
