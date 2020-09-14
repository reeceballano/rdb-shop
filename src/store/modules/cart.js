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
        console.log(JSON.parse(cartLocalStorage));
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