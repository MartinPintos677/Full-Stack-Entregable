const { mongoose, Schema } = require('../db')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 18
  },
  password: {
    type: String,
    required: true,
    maxlength: 18
  },
  biografia: {
    type: String
  },
  avatar_url: {
    type: String
  },
  seguidores: {
    type: Number
  },
  siguiendo: {
    type: Number
  }
})

userSchema.set('toJSON', { virtuals: true })

// ESTO DE ABAJO SALE DE LA DOCUMENTACIÓN DE BCRYPT

// Middleware para hashear la contraseña antes de guardar
userSchema.pre('save', async function (next) {
  // Solo hashear la contraseña si ha sido modificada o es nueva
  if (!this.isModified('password')) {
    return next()
  }

  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(this.password, 10)
    // Reemplazar la contraseña en texto plano por la contraseña hasheada
    this.password = hashedPassword
    return next()
  } catch (error) {
    return next(error)
  }
})

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password)
  } catch (error) {
    throw error
  }
}

const User = mongoose.model('User', userSchema)

module.exports = User
