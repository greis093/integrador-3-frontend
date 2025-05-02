# Nombre : Yirley Agreda Pachecho

# Github: git@github.com:greis093/integrador-3-frontend.git

# Netlify : https://integrador02.netlify.app/

## Pasos para crear un proyecto en REACT

### CREAR UN PROyECTO

npm create vite@latest ./ -- --template react

### EN vite.config.js (Antes de Instalar la dependencia - npm i)

export default defineConfig({
plugins: [react()],
css : {
devSourcemap: true
}
})

## INSTALAMOS LA DEPENDENCIAS

npm install # npm i

## ISNTALAMOS LA DEPENDENCIA DE REACT-ROUTER

npm i react-router

## INSTALAR JSON SERVER

npm i json-server -D

## ARRANCAMOS SERVICIOS DE DESARROLLO

npm run dev

# ABRO UN TERMINAL NUEVO

## ENTRAMOS A LA CARPETA src

cd src

## CREAR CARPETAS (mkdir) CON ESTOS COMPONENTES (constants contexts helpers hooks pages routes)

mkdir components constants contexts helpers hooks pages routes

## Salir del SRC

cd ..

## CREAR .env .env .example netlify.toml

touch .env .env.example netlify.toml

### EN netlify.toml (problema del router)

    [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200

### EN .env COLOCO ESTA RUTA

VITE_BACKEND_PRODUCTOS=http://localhost:8080/productos/
VITE_BACKEND_MENSAJES=http://localhost:8080/mensajes/
VITE_BACKEND_CARRITO=http://localhost:8080/carritos/

### EN .env.example COLOCAR ESTA RUTA

    VITE_BACKEND_PRODUCTOS=

## CUANDO CAMBIAMOS ->index.css a SASS con -> index.scss

npm install -D sass-embedded
