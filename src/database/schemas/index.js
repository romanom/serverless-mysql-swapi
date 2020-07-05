
import Sequelize from 'sequelize';
import config from '../../../config';

//Singleton params per lambda
const schemas = {};

export function getSchemas(force = false) {
    console.log('getSchemas function has been triggered');
    if (Object.keys(schemas).length && !force) {
        console.log('Returning an existing DB schema');
        return schemas;
    }
    console.log('Creating a new DB schema');
    // Database connection
    const dataBases = {
        SWAPIDB: new Sequelize(config.db),
    };

    const modules = [
        require('./Film'),
        require('./FilmRelation'),
        require('./People'),
        require('./PeopleRelation'),
        require('./Planet'),
        require('./Specie'),
        require('./Startship'),
        require('./Vehicle')
    ];

    // Initialize models
    Object.keys(dataBases).forEach((key) => {
        const schemaDB = {};
        
        modules.forEach((module) => {
            const model = module(dataBases[key], Sequelize);
            
            schemaDB[model.name] = model;

        });

        Object.keys(schemaDB).forEach(modelName => {
            
            if (schemaDB[modelName].associate) {
                schemaDB[modelName].associate(schemaDB);
            }
        });
        schemaDB.sequelize = dataBases[key];
        schemas[key] = schemaDB;
    });

    return schemas;
};
