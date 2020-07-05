import request from 'request';

const endpoint = process.env.SWAPI_URL;

class SwapiService {

    async getPeoples() {
        try {
            const url = `${endpoint}/people`;
            const headers = {
                'Content-Type': 'application/json'
            };
            return new Promise(async (resolve, reject) => {

                await request.get({
                    url,
                    headers,
                    json: true
                }, async (err, httpResponse, response) => {
                    
                    if (err) {
                        await reject({
                            success: false,
                            data: null
                        })
                    } else {
                        
                        await resolve({
                            success: httpResponse.statusCode == 200 ? true : false,
                            data: response
                        })
                    }

                })

            });

        } catch (ex) {
            console.log({
                message: 'SwapiService::getPeoples: Something wrong happened',
                ex
            });
            return {
                success: false,
                data: null
            }
        }
    }


    async getPeopleById(id) {
        try {
            const url = `${endpoint}/people/${id}`;
            const headers = {
                'Content-Type': 'application/json'
            };
            return new Promise(async (resolve, reject) => {

                await request.get({
                    url,
                    headers,
                    json: true
                }, async (err, httpResponse, response) => {
                    
                    if (err) {
                        await reject({
                            success: false,
                            data: null
                        })
                    } else {
                        
                        await resolve({
                            success: httpResponse.statusCode == 200 ? true : false,
                            data: response
                        })
                    }

                })

            });

        } catch (ex) {
            console.log({
                message: 'SwapiService::getPeoples: Something wrong happened',
                ex
            });
            return {
                success: false,
                data: null
            }
        }
    }

    async getFilms() {
        try {
            const url = `${endpoint}/films`;
            const headers = {
                'Content-Type': 'application/json'
            };
            return new Promise(async (resolve, reject) => {

                await request.get({
                    url,
                    headers,
                    json: true
                }, async (err, httpResponse, response) => {
                    
                    if (err) {
                        await reject({
                            success: false,
                            data: null
                        })
                    } else {
                        
                        await resolve({
                            success: httpResponse.statusCode == 200 ? true : false,
                            data: response
                        })
                    }

                })

            });

        } catch (ex) {
            console.log({
                message: 'SwapiService::getFilms: Something wrong happened',
                ex
            });
            return {
                success: false,
                data: null
            }
        }
    }


    async getFilmById(id) {
        try {
            const url = `${endpoint}/films/${id}`;
            
            const headers = {
                'Content-Type': 'application/json'
            };
            return new Promise(async (resolve, reject) => {

                await request.get({
                    url,
                    headers,
                    json: true
                }, async (err, httpResponse, response) => {
                    
                    if (err) {
                        await reject({
                            success: false,
                            data: null
                        })
                    } else {
                        
                        await resolve({
                            success: httpResponse.statusCode == 200 ? true : false,
                            data: response
                        })
                    }

                })

            });

        } catch (ex) {
            console.log({
                message: 'SwapiService::getFilmById: Something wrong happened',
                ex
            });
            return {
                success: false,
                data: null
            }
        }
    }
}


export default SwapiService;