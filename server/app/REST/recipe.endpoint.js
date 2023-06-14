import business from '../business/business.container';

const recipeEndpoint = (router) => {
    router.get('/api/recipes',async (req, res) => {
        try {
            let result = await business.getRecipeManager().query();
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
      });

      router.get('/api/recipe/:id', async (req, res) => {
        const { id } = req.params;
        try {
        const result = await business.getRecipeManager().get(id);
        if (result) {
        res.status(200).send(result);
        } else {
        res.status(404).send('Recipe not found');
        }
        } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred');
        }
        });



      router.post('/api/recipe', async (request, response, next) => {
        try {
            let result = await business.getRecipeManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

}
export default recipeEndpoint;