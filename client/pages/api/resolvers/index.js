import PageDataService from "../../../services/pageData";

export const resolvers = {
  Query: {
    getPageDataById: async (_, { jsonId }) => {
      const pageData = await PageDataService.getPageById(jsonId);
      if (!pageData) {
        throw "";
      }

      return pageData;
    },
  },
};
