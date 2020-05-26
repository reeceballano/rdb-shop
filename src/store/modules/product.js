// STATE
const state = {
    products: [],
    product: [],
}

// GETTERS
const getters = {
    getProducts: state => {
        return state.products;
    },

    getProduct: state => {
        return state.product;
    }
}

// MUTATIONS
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },

    SET_PRODUCT(state, product) {
        state.product = product;
    }
}

// ACTIONS
const actions = {
    getAllProducts({ commit }) {
        let data = [
            {
                id: 1,
                name: 'Chair 1',
                desc: 'Chair 1 built to last, the safety of you laptop and instruments is guaranteed.',
                price: 25,
                img: 'chair-2.png',
                tab:[
                    {
                        label: 'Description',
                        content:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus, nostrum repellat recusandae assumenda sequi blanditiis dolor quis obcaecati excepturi ducimus sint, beatae minima suscipit, commodi fugit eligendi eius inventore.',
                    },
                    {
                        label: 'Gallery',
                        content: ['chair-1.png', 'chair-2.png']
                    }
                ]
            },

            {
                id: 2,
                name: 'Chair 2',
                desc: 'Chair 2 built to last, the safety of you laptop and instruments is guaranteed.',
                price: 35,
                img: 'chair-1.png',
                tab:[
                    {
                        label: 'Description',
                        content:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus, nostrum repellat recusandae assumenda sequi blanditiis dolor quis obcaecati excepturi ducimus sint, beatae minima suscipit, commodi fugit eligendi eius inventore.',
                    },
                    {
                        label: 'Gallery',
                        content: ['chair-1.png', 'chair-2.png']
                    }
                ]
            },

            {
                id: 3,
                name: 'Chair 3',
                desc: 'Chair 3 built to last, the safety of you laptop and instruments is guaranteed.',
                price: 45,
                img: 'chair-3.png',
                tab:[
                    {
                        label: 'Description',
                        content:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus, nostrum repellat recusandae assumenda sequi blanditiis dolor quis obcaecati excepturi ducimus sint, beatae minima suscipit, commodi fugit eligendi eius inventore.',
                    },
                    {
                        label: 'Gallery',
                        content: ['chair-1.png', 'chair-2.png']
                    }
                ]
            },

            {
                id: 4,
                name: 'Chair 4',
                desc: 'Chair 4 built to last, the safety of you laptop and instruments is guaranteed.',
                price: 25,
                img: 'chair-1.png',
                tab:[
                    {
                        label: 'Description',
                        content:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus, nostrum repellat recusandae assumenda sequi blanditiis dolor quis obcaecati excepturi ducimus sint, beatae minima suscipit, commodi fugit eligendi eius inventore.',
                    },
                    {
                        label: 'Gallery',
                        content: ['chair-1.png', 'chair-2.png']
                    }
                ]
            },

            {
                id: 5,
                name: 'Chair 5 5',
                desc: 'Chair 5 5built to last, the safety of you laptop and instruments is guaranteed.',
                price: 35,
                img: 'chair-1.png',
                tab:[
                    {
                        label: 'Description',
                        content:  '5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus, nostrum repellat recusandae assumenda sequi blanditiis dolor quis obcaecati excepturi ducimus sint, beatae minima suscipit, commodi fugit eligendi eius inventore.',
                    },
                    {
                        label: 'Gallery',
                        content: ['chair-1.png', 'chair-2.png']
                    }
                ]
            },

            {
                id: 6,
                name: 'Chair 6',
                desc: 'Chair 6 built to last, the safety of you laptop and instruments is guaranteed.',
                price: 45,
                img: 'chair-1.png',
                tab:[
                    {
                        label: 'Description',
                        content:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus, nostrum repellat recusandae assumenda sequi blanditiis dolor quis obcaecati excepturi ducimus sint, beatae minima suscipit, commodi fugit eligendi eius inventore.',
                    },
                    {
                        label: 'Gallery',
                        content: ['chair-1.png', 'chair-2.png']
                    }
                ]
            }
        ]

        commit('SET_PRODUCTS', data);
    },

    getSingleProduct({ commit, state }, payload) {
        const id = Number(payload);

        const product = state.products.find(item => item.id == id);

        if (!product) {
            return;
        }

        commit('SET_PRODUCT', product);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}