const jwt = require('jsonwebtoken')
const { isTokenBlacklisted } = require('./blacklist')

function authenticateUser(req, res, next) {
  const token = req.header('Authorization') // Asumiendo que el token se envía en el encabezado "Authorization"
  //console.log('Token recibido en el backend:', token)

  if (!token || isTokenBlacklisted(token)) {
    return res.status(401).json({ error: 'Usuario no autorizado.' })
  }

  try {
    // Verificar el token y obtener la información del usuario
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded // Agregar el usuario decodificado al objeto de solicitud
    next() // Continuar con la siguiente función en la ruta
  } catch (error) {
    return res.status(401).json({ error: 'Usuario no autorizado.' })
  }
}

module.exports = authenticateUser
