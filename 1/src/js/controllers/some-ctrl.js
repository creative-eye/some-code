import { isOdd } from 'js/utils/numbers';
import {
    getFirstData,
    getSecondData,
} from 'js/services';

/**
 * get data from different endpoints and implement some business rules
 * can be extended to write to a model or chain multiple methods
 * @returns {Promise<*[]>}
 */
export default () => Promise.all([getFirstData(), getSecondData()])
        .then(res => [...res[0], ...res[1]])
        .then(data => data.filter(item => isOdd(item.id) && isOdd(item.val)));