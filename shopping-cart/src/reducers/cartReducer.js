const initialState = {
    products: [
        // { id: 1, name: 'Product 1', price: 20, quantity: 0 },
        // { id: 2, name: 'Product 2', price: 30, quantity: 0 },
        // Add more products as needed
    ],
    items: [],
    isCartOpen: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: 0 }
                        : product
                ),
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: Math.max(0, product.quantity - 1) }
                        : product
                ),
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                        : item
                ),
            };

        case 'TOGGLE_CART':
            return { ...state, isCartOpen: !state.isCartOpen, }

        default:
            return state;
    }
};

export default cartReducer;
