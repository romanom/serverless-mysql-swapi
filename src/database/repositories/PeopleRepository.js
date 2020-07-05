
import { Repository } from './Repository';

class PeopleRepository extends Repository {


    async create(request) {
        try {
            const { People } = this.db;
            const peopleSaved = await People.create(request);

            return peopleSaved;
        } catch(ex) {
            console.log(ex);
            throw ex;
        }
    }

    async createFilmRelation(peopleRelation) {
        try {
          const { PeopleRelation } = this.db;
          const peopleRelationSaved = await PeopleRelation.create(peopleRelation)
    
          return peopleRelationSaved
        } catch (ex) {
          console.log(ex);
          throw ex;
        }
    }

    async get(filters) {
        try {
            const {
                Film, People, Starship, Specie, Vehicle
            } = this.db;
            
            const response = await People.findAll({
                include: [
                    {
                        model: Film,
                        as: 'Films'
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
            const response = await People.findOne({ 
                where: { id },
                include: [
                    {
                        model: Film,
                        as: 'Films'
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



export default PeopleRepository;