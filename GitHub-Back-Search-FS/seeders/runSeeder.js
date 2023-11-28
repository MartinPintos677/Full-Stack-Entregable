require('dotenv').config()

async function runSeeder() {
  // Seeders - Acá creamos los datos de prueba (Usuario)
  await require('./userSeeder')()

  console.log('[MongoDB] ¡Los datos de prueba fueron insertados!')
  process.exit()
}

runSeeder()
