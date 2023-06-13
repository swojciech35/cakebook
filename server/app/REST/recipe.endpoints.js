import business from '../business/business.container';
import {request} from "express";
const recipeEndpoint = (router) => {
router.get('/api/recipe',async (request, response, next) => {

    try {
        let result = await business.().query();
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});
}
