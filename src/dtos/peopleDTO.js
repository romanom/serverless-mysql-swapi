
class peopleDTO {
    constructor(inputDTO) {
        if(inputDTO) {
            this.id = inputDTO.id,
            this.fecha_nacimiento = inputDTO.birth_year;
            this.color_ojos = inputDTO.eye_color;
            this.peliculas = inputDTO.films || (inputDTO.Films && inputDTO.Films.map(u => u.url)) || [];;
            this.genero = inputDTO.gender;
            this.color_cabello = inputDTO.hair_color;
            this.altura = inputDTO.height;
            this.planeta_de_residencia = inputDTO.homeworld;
            this.masa = inputDTO.mass;
            this.nombre = inputDTO.name;
            this.color_piel = inputDTO.skin_color;
            this.creado = inputDTO.created;
            this.editado = inputDTO.edited;
            this.especies = inputDTO.species || (inputDTO.Species && inputDTO.Species.map(u => u.url)) || [];;
            this.naves_espaciales = inputDTO.starships || (inputDTO.Starships && inputDTO.Starships.map(u => u.url)) || [];;
            this.url = inputDTO.url;
            this.vehiculos = inputDTO.vehicles || (inputDTO.Vehicles && inputDTO.Vehicles.map(u => u.url)) || [];;
        }

    }


    toJSON() {
        return {
            ...this
        }
    }
}


export default peopleDTO;