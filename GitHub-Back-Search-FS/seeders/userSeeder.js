const User = require('../models/User')

// DATOS DE PRUEBA (Creamos 1 usuario por ahora)
const users = [
  {
    nombre: 'Michi',
    username: 'MichiCat',
    password: '123',
    biografia: 'Biografía del Michi',
    avatar_url: 'http://localhost:3000/img/Titi.jpg',
    seguidores: 50,
    siguiendo: 90
  }
]

const seedUsers = async () => {
  // Insertar usuarios y obtener sus IDs
  const createdUsers = []
  for (const user of users) {
    const newUser = new User(user)
    await newUser.save()
    createdUsers.push(newUser)
  }
}

module.exports = seedUsers
