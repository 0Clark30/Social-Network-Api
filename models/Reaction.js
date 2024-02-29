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
        maxlength: 280
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
reactionSchema.virtual('CreatedAt').get(function() {
    return this.createdAt.toDateString();
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
