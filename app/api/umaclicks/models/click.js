import  {Schema, model,models} from 'mongoose';

const UmaClickerSchema= new Schema({
    counter: Number,
})

export default models.umaclicker || model('umaclicker',UmaClickerSchema) 