
export const addToCart = (options, quantity, id) => {
    return{
        type: 'ADD_TO_CART',
        payload: {
            options,
            quantity,
            id
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return([...state, action.payload]);
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id!== action.payload);
        default:
            return state;
    }
}

export default cartReducer;