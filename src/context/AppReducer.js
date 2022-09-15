export const AppReducer = (state, action) =>
{
    switch (action.type)
    {
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state, transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}