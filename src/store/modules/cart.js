// STATE
const state = {
    cart: [],
    isCartActive: false,
}

// GETTERS
const getters = {
    getCartItems: state => {
        return state.cart;
    },

    getCartItemsCount: state => {
        return state.cart
            .map(item => item.qty)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },

    getCartWidgetStatus: state => {
        return state.isCartActive;
    }
}

// MUTATIONS
const mutations = {
    SET_CART(state, cart) {
        state.cart = cart;
    },

    SET_IS_CART_ACTIVE(state, isCartActive) {
        state.isCartActive = isCartActive;
    }
}

// ACTIONS
const actions = {
    loadCart({ commit }) {
        console.log('cart loaded');

        const cartLocalStorage = localStorage.getItem('cart');

        if (!cartLocalStorage) {
            return;
        }

        commit('SET_CART', JSON.parse(cartLocalStorage));
    },

    addCart({ commit }, payload) {
        let cart = [];

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        // CHECK ITEM IF EXIST
        let item = cart.find(item => item.id === payload.id);

        // IF EXIST UPDATE QUANTITY
        if (item) {
            // UPDATE QTY
            let qty = parseInt(item.qty) + 1;
            item.qty = qty;
            // return;
        } else {
            // IF NOT EXIST, PUSH TO CART
            cart.push({
                id: payload.id,
                name: payload.name,
                price: payload.price,
                productImage: payload.productImage,
                qty: 1,
            });
        }

        // SET THE NEW CART OBJECT IN LOCALSTORAGE
        localStorage.setItem('cart', JSON.stringify(cart));

        // UPDATE cart state
        commit('SET_CART', cart);
    },

    updateCartItem({ state, commit }, payload) {
        const cart = state.cart;
        const item = cart.find(item => item.id === payload.id);

        // CHECK IF ITEM IS EXIST
        if (item) {
            // CHECK IF INCREASE OR DECREASE ITEM/QTY
            switch (payload.action) {
                case 'increase':
                    item.qty++;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    commit('SET_CART', cart);

                    break;
                
                case 'decrease':
                    item.qty--;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    commit('SET_CART', cart);

                    break;
                
                default:
                    break;
            }
        }

        console.log(item);

    },

    removeCartItem({ state, commit }, payload) {
        const cart = state.cart;

        // CHECK ITEM
        const items = cart.filter(item => parseInt(item.id) !== parseInt(payload));
        
        // UPDATE AND SET CART STATE
        commit('SET_CART', items);

        // SET THE NEW CART OBJECT IN LOCALSTORAGE
        localStorage.setItem('cart', JSON.stringify(items));
    },

    findItem({ state }, payload) {
        console.log('find item: ', payload)
        const item = state.cart.find(item => parseInt(item.id) === parseInt(payload));

        if (item) {
            return true
        }

        return false;
    },

    setCartStatus({ commit }, payload) {
        commit('SET_IS_CART_ACTIVE', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}