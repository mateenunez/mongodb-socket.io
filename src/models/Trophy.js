import { Schema, model} from "mongoose";

const Trophy = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: [80, 'Nombre muy grande']
    },
    description: {
        type: String,
        required: false,
        maxLength: [150, 'Descripcion muy grande']
    },
    imgUrl:{
        type: String,
        required: false,
    },
    date:{
        type: Date,
        required: false,
    },
    dateCompleted: {
        type: String
    },
    status:{
        type: Boolean,
        default:false,
        required:true,
    }
})

export default model("Trophy", Trophy)