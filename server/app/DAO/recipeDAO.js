import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";


const ingredientsSchema = new mongoose.Schema({
    ingredients:String,
    number:String,
    type:String,

},{id:false,_id:false})

const stepsSchema = new mongoose.Schema({
    step:String,
    numberOfStep:String,

},{id:false,_id:false})

const recipeSchema= new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    ingredients:[ingredientsSchema],
    steps:[stepsSchema]
})
recipeSchema.plugin(uniqueValidator);
const RecipeModel=mongoose.model('db_recipe',recipeSchema);

async function query() {
    const result = await RecipeModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return RecipeModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new RecipeModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return RecipeModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

async function remove(id){
    return RecipeModel.findByIdAndRemove(id);
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    remove: remove,
    model: RecipeModel
};
