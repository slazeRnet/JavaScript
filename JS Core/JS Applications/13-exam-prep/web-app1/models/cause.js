import extend from '../utils/context.js'
import models from './index.js';
import docModifier from '../utils/doc-modifier.js';
import {apiKey} from '../utils/apiKey.js';

export default {

    create(data, userId) { // Sammy.Object {}
        return fetch(apiKey + 'causes.json' + (userId ? `?auth=${userId}` : ``), {
            method: 'POST',
            body: JSON.stringify(data)
        })
    },
    getAll(userId) { // Sammy.Object {}
                return fetch(apiKey + 'causes.json' + (userId ? `?auth=${userId}` : ``))
    },
    get(id, userId) {
        return fetch(apiKey + 'causes/' + `${id}.json` + (userId ? `?auth=${userId}` : ``))
    },
    close(id, userId) {
        return fetch(apiKey + 'causes' + `${id}.json` + (userId ? `?auth=${userId}` : ``), {
            method: 'DELETE',
        })
    },
    donate(id, data, userId) {
        return fetch(apiKey + 'causes' + `${id}.json` + (userId ? `?auth=${userId}` : ``), {
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    }

}