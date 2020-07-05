
class filmsDTO {
    constructor(inputDTO) {
        if(inputDTO) {
            this.id = inputDTO.id;
            this.creado = inputDTO.created;
            this.director = inputDTO.director;
            this.editado = inputDTO.edited;
            this.episodio_id = inputDTO.episode_id;
            this.rastreo_apertura = inputDTO.opening_crawl;
            this.productor = inputDTO.producer;
            this.fecha_lanzamiento = inputDTO.release_date;
            this.titulo = inputDTO.title;
            this.url = inputDTO.url;
            this.actores = inputDTO.characters || (inputDTO.People && inputDTO.People.map(u => u.url)) || [];
            this.planetas = inputDTO.planets || (inputDTO.Planets && inputDTO.Planets.map(u => u.url)) || [];
            this.naves_espaciales = inputDTO.starships || (inputDTO.Starships && inputDTO.Starships.map(u => u.url)) || [];
            this.vehiculos = inputDTO.vehicles || (inputDTO.Vehicles && inputDTO.Vehicles.map(u => u.url)) || [];
            this.especies = inputDTO.species || (inputDTO.Species && inputDTO.Species.map(u => u.url)) || [];
        }

    }


    toJSON() {
        return {
            ...this
        }
    }
}


export default filmsDTO;