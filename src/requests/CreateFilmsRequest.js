import Joi from 'joi';
import moment from 'moment';
import { convertValidationResult } from 'utils';


class CreateFilmsRequest {

    constructor(request) {
        this.people = request.people;
        this.created = moment().format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z';
        this.director = request.director;
        this.episode_id = request.episode_id;
        this.opening_crawl = request.opening_crawl;
        this.planets = request.planets;
        this.producer = request.producer;
        this.release_date = request.release_date;
        this.species = request.species;
        this.starships = request.starships;
        this.title = request.title;
        this.vehicles = request.vehicles;

    }

    toJSON() {
        return {
            ...this
        };
    }

    //ModelValidator
    isValid(){        
        
        const requestParamsValidator = Joi.object().keys({
            people: Joi.array().items(Joi.number()),
            director: Joi.string().max(100).required(),
            episode_id: Joi.string().max(100).required(),
            opening_crawl: Joi.string().max(100).required(),
            planets: Joi.array().items(Joi.number()),
            producer: Joi.string().max(100).required(),
            release_date: Joi.string().max(100).required(),
            species: Joi.array().items(Joi.number()),
            starships: Joi.array().items(Joi.number()),
            title: Joi.string().max(100).required(),
            vehicles: Joi.array().items(Joi.number())
        }).min(1);

        console.log("VALIDATING MODEL");
        let validationOptions = {abortEarly: false, allowUnknown: true };
        let result = Joi.validate(this.toJSON(), requestParamsValidator, validationOptions); 
        console.log('resultValidation: ', result);
        let convertedResult = convertValidationResult(result);        
                
        if (convertedResult.success) {

            return true;
        } else {
            throw { validationError: true,
                 ...convertedResult };
        }        
    }



}

export default CreateFilmsRequest;