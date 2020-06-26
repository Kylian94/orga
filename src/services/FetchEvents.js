const URI = 'http://api-orga.kp-dev.fr';

export default {
    async fetchEvents() {
        try {
            let response = await fetch(URI + '/api/events');
            let responseJsonData = await response.json();
            console.log(responseJsonData);
            return responseJsonData;

        }
        catch (e) {
            console.log(e)
        }
    },
}