import {
    Repository
} from './Repository';
import People from '../schemas/People';

class FilmsRepository extends Repository {


    async create(request) {
        try {
            const {
                Film
            } = this.db;
            const filmSaved = await Film.create(request);

            return filmSaved;
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }

    async createFilmRelation(filmRelation) {
        try {
          const { FilmRelation } = this.db;
          const filmRelationSaved = await FilmRelation.create(filmRelation)
    
          return filmRelationSaved
        } catch (ex) {
          console.log(ex);
          throw ex;
        }
    }

    async get(filters) {
        try {
            const {
                Film, People, Planet, Starship, Specie, Vehicle
            } = this.db;
            
            const response = await Film.findAll({
                include: [
                    {
                        model: People,
                        as: 'People'
                    },
                    {
                        model: Planet,
                        as: 'Planets'
                    },
                    {
                        model: Starship,
                        as: 'Starships'
                    },
                    {
                        model: Specie,
                        as: 'Species'
                    },
                    {
                        model: Vehicle,
                        as: 'Vehicles'
                    }
                ]
            });

            return response;
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }

    async getById(id) {
        try {
            const {
                Film, People, Planet, Starship, Specie, Vehicle
            } = this.db;
            const response = await Film.findOne({ 
                where: { id },
                include: [
                    {
                        model: People,
                        as: 'People'
                    },
                    {
                        model: Planet,
                        as: 'Planets'
                    },
                    {
                        model: Starship,
                        as: 'Starships'
                    },
                    {
                        model: Specie,
                        as: 'Species'
                    },
                    {
                        model: Vehicle,
                        as: 'Vehicles'
                    }
                ]
            });
    
          return response;
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }


}



export default FilmsRepository;