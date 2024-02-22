const { Schema, model } = require("mongoose");

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // need to set between 1 and 280 questions
        }, 
        createdAt: {
            type: Date,
            default: Date.now(), 
        },
        username : [
            // how do we reference the user that created this thought
        ],
        reactions: [reactionSchema],

    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

thoughtsSchema.virtual('reactionCount')
.get(function(){
    return this.reactions.length + 1
})
const Thought = model('thoughtsSchema', userSchema);

module.exports = Thought;