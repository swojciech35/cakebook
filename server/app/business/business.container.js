'use strict';

import userManager from './user.manager';
import postManager from './post.manager';
import recipeManager from "./recipe.manager";


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getPostManager: getter(postManager),
    getRecipeManager: getter(recipeManager),
};
