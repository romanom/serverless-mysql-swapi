# Reto RIMAC

## Como configurar el proyecto?

Ejecute: `npm install`

## Como correr el proyecto localmente?

Paso 0:

Configurar variables en serverless/environment/environment-local.yml

Paso 1:

Ejecutar sentencias SQL ubicadas en infraestructura/database/SQLscripts/000000000-create-tables.sql, en una base de datos MySQL.


Paso 2:

Ejecute: `npm run start`

## Como desplegar el proyecto en AWS?

Paso 0:

Configurar variables en serverless/environment/environment-development.yml

Paso 1:

Ejecute: `npm run deploy`


## Consideraciones

Endpoints: 

Obtener personas:
GET /api/people

Crear una persona:
POST /api/people

Obtener una persona:
GET /api/people/{id}

Obtener peliculas: 
GET /api/films

Crear una pelicula:
POST /api/films

Obtener una pelicula:
GET /api/films/{id}

## PRUEBAS


Crear una persona:
curl -H "Content-Type: application/json" -X POST http://localhost:4000/api/people -d '
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker 888",
    "skin_color": "Fair"
}'

Crear una pelicula:
curl -H "Content-Type: application/json" -X POST http://localhost:4000/api/films -d '
{
    "director": "Antony melendez",
    "episode_id": "1",
    "opening_crawl": "Cevichada 2",
    "producer": "Antony",
    "release_date": "2017-01-01",
    "title": "Parrillada de casa",
    "people": [105]
}'

Obtener las personas:
curl -X GET http://localhost:4000/api/people

Obtener una persona por id:
curl -X GET http://localhost:4000/api/people/{id}

Obtener las peliculas:
curl -X GET http://localhost:4000/api/films

Obtener una pelicula por id:
curl -X GET http://localhost:4000/api/films/{id}


## Endpoint Api Gateway con acceso al proyecto desplegado en AWS

https://ru98cucv3g.execute-api.us-west-1.amazonaws.com/development
