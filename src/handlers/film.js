import {
    FilmsController
} from 'controllers';

import { badRequestResponse } from 'utils';

const filmsController = new FilmsController();


export const run = async (event, context, callback) => {
    // Hack: Sequelize keeps the functions running and Lambda gives time out otherwise
    context.callbackWaitsForEmptyEventLoop = false;

    const headers = event.headers;
    const params = event.pathParameters;
    const requestContext = event.requestContext;
    const httpMethod = String(event.requestContext.httpMethod).toUpperCase();

    filmsController.init(headers, params, requestContext);

    async function callbackFilter() {
        let response = {};
        let body = {};

        const key = `${event.resource} ${httpMethod}`;

        let requestIsOk = true;
        
        try {
            body = JSON.parse(event.body);    
        } catch (ex) {
            console.log({
                message: 'Bad Request',
                ex
            });
            response = badRequestResponse({ 
                success : false,
                errors: [{propertyName: 'BadRequest', errorMessage: 'El request esta mal formado' }], 
                message: 'Bad Request'
            });
            requestIsOk = false;
        }

        if(requestIsOk) {
            switch (key) {
                case '/api/films/{id} GET':
                    
                    response = await filmsController.getById(params.id);
                    break;
                case '/api/films GET':
                    response = await filmsController.get();
                    break;
                case '/api/films POST':
                    response = await filmsController.create(body);
                    break;
                default:
                    
    
                    break;
            }
        }
        
        


        if (!response.headers) {
            response.headers = {};
        }
        response.headers['Access-Control-Allow-Origin'] = '*';

        return response;
    }

    callback(null, await callbackFilter());
}


export default run;