export const state = () => ({
  team: [],
  content: [],
  portfolioLogos: [],
  portfolio: [],
  contact: [],
});

export const getters = {
  getTheTeam: (state) => JSON.parse(state.team),
  getTheContent: (state) => JSON.parse(state.content),
  getThePortfolioLogos: (state) => JSON.parse(state.portfolioLogos),
  getThePortfolio: (state) => JSON.parse(state.portfolio),
  getContact: (state) => JSON.parse(state.contact),
};

export const mutations = {
  setTheTeam(state, payload) {
    state.team = payload;
  },
  setTheContent(state, payload) {
    state.content = payload;
  },
  setThePortfolioLogos(state, payload) {
    state.portfolioLogos = payload;
  },
  setThePortfolio(state, payload) {
    state.portfolio = payload;
  },
  setContact(state, payload) {
    state.contact = payload;
  }
};

export const actions = {
  async getTheTeam({ commit }, callback) {
    let team = await this.$content("team").fetch();
    team.sort((a, b) => {
      return a.order - b.order;
    })
    commit("setTheTeam", team);
  },
  async getTheContent({ commit }, callback) {
    let content = await this.$content("content").fetch();
    content.sort((a, b) => {
      return a.order - b.order;
    })
    commit("setTheContent", content);
  },
  async getThePortfolioLogos({ commit }, callback) {
    let portfolioLogos = await this.$content("portfolioLogos").fetch();
    commit("setThePortfolioLogos", portfolioLogos);
  },
  async getThePortfolio({ commit }, callback) {
    let portfolio = await this.$content("portfolio").fetch();
    commit("setThePortfolio", portfolio);
  },
  async getContact({ commit }, callback) {
    let contact = await this.$content("contact").fetch();
    commit("setContact", contact);
  }
};
