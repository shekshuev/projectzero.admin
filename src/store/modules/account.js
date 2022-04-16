const state = () => ({
    accessToken: null,
    refreshToken: null
});

const getters = {
    accessToken: state => state.accessToken,
    refreshToken: state => state.refreshToken
}

const mutations = {
    setAccessToken(state, token) {
        state.accessToken = token;
    },
    setRefreshToken(state, token) {
        state.refreshToken = token;
    }
}

const actions = {
    setAccessToken(context, token) {
        context.commit("setAccessToken", token);
    },
    setRefreshToken(context, token) {
        context.commit("setRefreshToken", token);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}