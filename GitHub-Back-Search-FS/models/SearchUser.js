const { mongoose, Schema } = require('../db')

const searchUserSchema = new Schema({
  search: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true
  },
  usersList: [
    {
      username: {
        type: String
      },
      avatar: {
        type: String
      },
      url: {
        type: String
      }
    }
  ],
  comment: {
    // Esto lo usaremos en el Update
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

searchUserSchema.set('toJSON', { virtuals: true })

const SearchUser = mongoose.model('SearchUser', searchUserSchema)

module.exports = SearchUser
