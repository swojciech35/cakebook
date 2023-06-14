'use strict';

import userManager from './user.manager';
import recipeManager from './recipe.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getRecipeManager:getter(recipeManager)
};
