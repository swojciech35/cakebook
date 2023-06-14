import userEndpoint from './user.endpoint';
import recipeEndpoint from './recipe.endpoint';
const routes = function (router) {
    userEndpoint(router);
    recipeEndpoint(router)
};

export default routes;
