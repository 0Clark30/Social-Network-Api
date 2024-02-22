const {Schema, model} = require("mongoose");

const reactionSchema = new Schema (
{
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        Required: true,
        // set something for 280 character max
    },
    username: {
        type: String,
        Required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()

    }
}
{
    toJSON: {
        virtuals: true,
    }
}
);

//  need to set a getter method to format the timestamp on query


