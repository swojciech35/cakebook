import recipeDAO from "../DAO/recipeDAO";

function create(context) {
    async function query() {
        let result = recipeDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await recipeDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await recipeDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
    };
}

export default {
    create: create
};
