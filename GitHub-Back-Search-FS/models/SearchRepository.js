const { mongoose, Schema } = require('../db')

const searchRepositorySchema = new Schema({
  search: {
    type: String,
    required: true,
    maxlength: 50
  },
  reposlist: [
    {
      name: {
        type: String
      },
      user: {
        type: String
      },
      description: {
        type: String
      },
      language: {
        type: String
      },
      url: {
        type: String
      },
      created_at: {
        type: Date
      },
      pushed_at: {
        type: Date
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

searchRepositorySchema.set('toJSON', { virtuals: true })

const SearchRepository = mongoose.model(
  'SearchRepository',
  searchRepositorySchema
)

module.exports = SearchRepository
