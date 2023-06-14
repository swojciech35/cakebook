import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";


const ingredientsSchema = new mongoose.Schema({
    ingredients:String,
    number:String,
    type:String,

},{id:false,_id:false})

const directionsSchema = new mongoose.Schema({
    directions:String,
    numberOfDirections:String,

},{id:false,_id:false})

const recipeSchema= new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    ingredients:[ingredientsSchema],
    directions:[directionsSchema]
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

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: RecipeModel
};