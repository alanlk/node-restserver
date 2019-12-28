// ===============================
// Puerto
// ===============================

process.env.PORT = process.env.PORT || 3000;



// ===============================
// Entorno
// ===============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===============================
// Vencimiento del Token
// ===============================
// 60 seg
//60 min
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = '48h';

// ===============================
// Seed de autenticacion
// ===============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
// process.env.SEED = 'este-es-el-seed-desarrollo';




// ===============================
// Base de Datos
// ===============================

let urlDB;
if (process.env.NODE_ENV === 'dev') {


    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = process.env.MONGO_URL;
}

process.env.NODE_ENV = urlDB;


// ===============================
// Google
// ===============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '591266412923-svm26c5t59aj6sd6a3n1fbeiupcfvl24.apps.googleusercontent.com';