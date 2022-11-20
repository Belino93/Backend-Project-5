# Proyecto VideoClub API

## Proyecto realizado para GeeksHubs Academy, se nos pide crear la parte backend para una aplicación de alquiler de películas tomando como referencia la popular plataforma de alquiler online o streaming Netflix...
Las funcionalidades que serán requeridas para este primer check radicarán en
la consulta de datos. Seremos capaces de consumir datos de una base de datos
generada por nosotros mismos, en la que depositamos todos los datos de
usuarios y alquileres.

La relación entre tablas seria la siguiente
***
![image](https://user-images.githubusercontent.com/90568424/200182878-c99740e5-eece-4333-b173-aaf6e651031a.png)

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'url-del-repositorio'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm install
```

* Arrancamos el servidor con el siguiente comando:
```
npm run start
```

## Creación de la base de datos

Tras modificar el archivo /config/config.json con los datos de nuestro servidor mysql (username, password, database y host), ejecutaremos los siguientes comandos:
* **Creación de la base de datos**:
```
sequelize db:create
```
* **Creación de las tablas**:
```
sequelize db:migrate
```
* **Creación de los registros**:
```
sequelize db:seed:all
```
## Uso de la API

Haz clic para realizar una copia en postman del workspace con las request permitidas.
<br>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23873290-491822b9-d8a9-4b00-aaf0-29ddb396b3ac?action=collection%2Ffork&collection-url=entityId%3D23873290-491822b9-d8a9-4b00-aaf0-29ddb396b3ac%26entityType%3Dcollection%26workspaceId%3D0036013c-adfd-42cc-995e-7fbd3c9599ba)


## Tecnologías utilizadas en el proyecto:

* **express**: Instalar express en proyecto:
```
npm install express
```
* **nodemon**: Instalar nodemon en proyecto. Haciendo uso del package.json añadimos script para usarlo:
```
npm install nodemon
```
```
* **PACKAGE.JSON**
"dev": "nodemon app.js"
```
```
//EJECUTAMOS EN TERMINAL
npm run dev
```
* **morgan**: Instalamos morgan en nuestro proyecto, para poder mostrar mensajes por terminal al realizar peticiones al servidor.
```
npm i morgan
```
* **sequelize**: Instalar el ORM sequelize y sequelize-cli para poder interactuar con la base de datos, también instalamos los dialectos de mysql.
```
npm i sequelize-cli -g
npm i --save sequelize mysql2 sequelize-cli
sequelize init
```
* **jsonwebtoken**: Instalar jsonwebtoken en proyecto para autentificaciones:
```
npm i jsonwebtoken
```
* **crypt**: Usamos la librería nativa de node 'crypt':

## Explicación de la estructura del proyecto

Usamos el modelo vista-controlador para estructurar el proyecto. **Creamos un CRUD básico**. En el proyecto existirá la siguiente estructura:

* **app.js**: Este es el archivo principal. En este archivo se llama al archivo de las rutas, y se arranca el servidor.

* **config**
    * **config.json**: Gestiona la configuración para conectar con la base de datos. Se crea de manera automática con **sequelize**.

* **middlewares**
    * **auth.middleware.js**: Gestiona el acceso a endpoints restringidos.

* **db.js**: Gestiona el acceso a la base de datos.

* **router.js**: Gestiona las rutas de la aplicación.

* **views**
    * **authRoutes.js**: Gestiona la ruta /auth y sus endpoints.
    * **LeaseRoutes.js**: Gestiona la ruta /lease y sus endpoints.
    * **MovieRoutes.js**: Gestiona la ruta /movie y sus endpoints.
    * **ShowRoutes.js**: Gestiona la ruta /show y sus endpoints.
    * **UserRoutes.js**: Gestiona la ruta /user y sus endpoints.

* **controllers**
    * **auth.controller.js**: En este archivo creamos las funciones de cada endpoint:
        * **authLoginController**: Controla el login y crea el token de autenticación.
        * **authRegisterController**: Valida el registro de un usuario.
    * **MovieController.js**: En este archivo creamos las funciones de cada endpoint:
        * **getMovies**: Todas las películas.
        * **getTopRatedMovies**: Películas top.
        * **getMovie**: Película por id.
        * **getMovieByTitle**: Película por título.
        * **getMovieByGenre**: Película por genero

    * **LeaseController.js**: En este archivo creamos las funciones de cada endpoint:
        * **newLease**: Crea un nuevo préstamo, es necesario enviar un array de artículos id en el body.
        * **updateLease**: Actualiza el artículo de un prestamo.
        * **showLease**: Extrae los préstamos de un usuario.
        * **geshowAlltAll**: Extrae todos los pedidos(Necesitas ser admin).
   * **ShowController.js**: En este archivo creamos las funciones de cada endpoint:
        * **getShows**: Todas las series.
        * **getTopRatedShows**: Series top.
        * **getShow**: Show por ir.
        * **getShowByTitle**: Show por título.
        * **getShowsOut** : Extrae las series que tienen pases en cines o teatros
        * **getNextChapters**: Extrae las series que emiten capitulo en los próximos 7 días
    * **UserController.js**: En este archivo creamos las funciones de cada endpoint:
        * **getUser**: Extrae la información del usuario.
        * **patchUser**: Actualiza el nombre de un usuario.
        * **deleteUser**: Elimina un usuario.

* **migrations**
    Estos archivos controlan las migraciones de cada tabla.(No tienen relaciones).

* **models**
   Modelos de las tablas generados con sequelize-cli.(Con relaciones)

* **seeders**:
  Datos de pruebas

* **.gitignore**: Archivo en el que se indica que archivos no se subirán a nuestro repositorio. Está editado de la siguiente manera:
```
/node_modules
/logs
package-lock.json
```
## Explicación de la securización de la API:
* Los usuarios que no estén logados pueden:
    * Acceder a los enpoints de películas y series.
    * Registrarse y loguearse.
* Los usuarios logueados con rol 'user', pueden además:
    * Extraer su usuario.
    * Cambiar su nombre de usuario.
    * Acceder a sus préstamos.
    * Generar un nuevo préstamo propio.
* Los usuarios con rol 'admin', también pueden:
    * Acceder a todos los pedidos.
    * Borrar un usuario.

