import {
	getResponse,
	errorResponse,
    successResponse,
    badRequestResponse
} from 'utils';

import {
    FilmsRepository
} from 'repositories';

import {
	SwapiService
} from 'services';

import {
    CreateFilmsRequest
} from 'requests';

import {
    filmsDTO
} from 'dtos';

import moment from 'moment';
import { map, concat, get } from 'lodash';

class FilmsController {
	constructor() {
        this.swapiService = new SwapiService();
        this.filmsRepository = new FilmsRepository();

	}


	init(headers, params, requestContext) {
		this.userAgent = headers['User-Agent'];
		this.params = params;
		this.ipAddress = requestContext.identity.sourceIp;
	}


	async get() {
		try {

			//Get data from SwapiService
			const {
				success,
				data: filmsFromSWAPI
            } = await this.swapiService.getFilms();

            const filmsFromDB = await this.filmsRepository.get();

            var results = concat(
                get(filmsFromSWAPI, 'results', []),
                filmsFromDB
            )
          
            results = map(results, e => (new filmsDTO(e)).toJSON());
                
            return successResponse({
                status: true,
                data: {
                    ...filmsFromSWAPI,
                    results,
                    count: filmsFromSWAPI.count + results.length
                }
            });
            

		} catch (ex) {
			console.log({
				message: 'FilmsController::get: Something wrong happened',
				ex
			});

		}

		return errorResponse(getResponse(false, null, 'Internal Error'))

	}

	async getById(id) {
		try {
            let response;
			//Get data from SwapiService
			const {
				success,
				data
            } = await this.swapiService.getFilmById(id);
            
            if(!success || (success && (data == null || (typeof data == 'object' && Object.entries(data).length === 0)))) {
                response = await this.filmsRepository.getById(id);
            }

            //Process DTO
            const filmdto = new filmsDTO((success && data) || response);



			return successResponse({
                status: true,
                data: filmdto
            });

		} catch (ex) {
			console.log({
				message: 'FilmsController::getById: Something wrong happened',
				ex
			});

		}

		return errorResponse(getResponse(false, null, 'Internal Error'));

    }
    

    async create(filmRequest) {
        
        try {
            
            const requestParams = new CreateFilmsRequest(filmRequest);


            if(requestParams.isValid()) {

                const request = requestParams.toJSON();

                const filmSaved = await this.filmsRepository.create(request);

                const childs = ['people', 'planet', 'specie', 'starship', 'vehicle'];
                const created = moment().format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z';

                const createChilds = (entity = null) => {
                    if (request[entity]) {
                        
                        if (Array.isArray(request[entity])) {
                            
                            return request[entity].map(e => this.filmsRepository.createFilmRelation({
                                film_id: filmSaved.id,
                                relation_id: e,
                                relation: entity,
                                created
                            }))
                        } else {
                            return this.filmsRepository.createFilmRelation({
                                film_id: filmSaved.id,
                                relation_id: request[entity],
                                relation: entity,
                                created
                            })
                        }
                    }
                }

                await Promise.all(childs.map(e => createChilds(e)));

            }
            
            
            return successResponse({
                status: true,
                message: "El recurso fue creado existosamente"
            });

            
        } catch (ex) {

            console.log({
				message: 'FilmsController::create: Something wrong happened',
				ex
            });
            
            if (typeof ex == "object" && 'validationError' in ex && ex.validationError) {

                let errorMessage = 'El request tiene errores en la validación.';
                console.log(errorMessage);
                

                return badRequestResponse({
                    success: false,
                    message: errorMessage,
                    errors: ex.errorDictionary
                });

            }

        }

        return errorResponse(getResponse(false, null, 'Internal Error'));
    }

}






export default FilmsController;