import Joi from 'joi';
import moment from 'moment';
import { convertValidationResult } from 'utils';


class CreatePeopleRequest {
    constructor(request) {
        this.birth_year = request.birth_year;
        this.eye_color = request.eye_color;
        this.films = request.films;
        this.gender = request.gender;
        this.hair_color = request.hair_color;
        this.height = request.height;
        this.homeworld = request.homeworld;
        this.mass = request.mass;
        this.name = request.name;
        this.skin_color = request.skin_color;
        this.created = moment().format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z';
        this.species = request.species;
        this.starships = request.starships;
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
            birth_year: Joi.string().max(100).required(),
            eye_color: Joi.string().max(100).required(),
            films: Joi.array().items(Joi.number()),
            gender: Joi.string().max(100).required(),
            hair_color: Joi.string().max(100).required(),
            height: Joi.string().max(100).required(),
            homeworld: Joi.string().max(100).required(),
            mass: Joi.string().max(100).required(),
            name: Joi.string().max(100).required(),
            skin_color: Joi.string().max(100).required(),
            created: Joi.string().max(100).required(),
            species: Joi.array().items(Joi.number()),
            starships: Joi.array().items(Joi.number()),
            vehicles: Joi.array().items(Joi.number()),
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


export default CreatePeopleRequest;