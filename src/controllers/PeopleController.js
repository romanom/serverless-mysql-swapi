import {
	getResponse,
	errorResponse,
	successResponse
} from 'utils';

import {
	SwapiService
} from 'services';

import {
	PeopleRepository
} from 'repositories';

import {
    CreatePeopleRequest
} from 'requests';

import {
	peopleDTO
} from 'dtos';

import moment from 'moment';
import { map, concat, get } from 'lodash';

class PeopleController {
	constructor() {
		this.swapiService = new SwapiService();
		this.peopleRepository = new PeopleRepository();
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
				data: peopleFromSWAPI
			} = await this.swapiService.getPeoples();

			const peopleFromDB = await this.peopleRepository.get();

			
			
			var results = concat(
                get(peopleFromSWAPI, 'results', []),
                peopleFromDB
            )
          
            results = map(results, e => (new peopleDTO(e)).toJSON());
                
            return successResponse({
                status: true,
                data: {
                    ...peopleFromSWAPI,
                    results,
                    count: peopleFromSWAPI.count + results.length
                }
            });

		} catch (ex) {
			console.log({
				message: 'PeopleController::get: Something wrong happened',
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
			} = await this.swapiService.getPeopleById(id);

			if(!success || (success && (data == null || (typeof data == 'object' && Object.entries(data).length === 0)))) {
                response = await this.peopleRepository.getById(id);
			}
			
			//Process DTO
            const peopledto = new peopleDTO((success && data) || response);


			return successResponse({
				status: true,
				data: peopledto
			});

		} catch (ex) {
			console.log({
				message: 'PeopleController::getById: Something wrong happened',
				ex
			});

		}

		return errorResponse(getResponse(false, null, 'Internal Error'))

	}

	async create(peopleRequest) {
        
        try {
            
			const requestParams = new CreatePeopleRequest(peopleRequest);
			
			if(requestParams.isValid()) {
				const request = requestParams.toJSON();
			
				const filmSaved = await this.peopleRepository.create(request);

				const childs = ['people', 'planet', 'specie', 'starship', 'vehicle'];
				const created = moment().format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z';

				const createChilds = (entity = null) => {
					if (request[entity]) {
						if (Array.isArray(request[entity])) {
							return request[entity].map(e => this.peopleRepository.createFilmRelation({
								film_id: filmSaved.id,
								relation_id: e,
								relation: entity,
								created
							}))
						} else {
							return this.peopleRepository.createFilmRelation({
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
				message: 'PeopleController::create: Something wrong happened',
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






export default PeopleController;