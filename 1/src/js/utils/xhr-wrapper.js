import 'whatwg-fetch';

export default (path, opts = {}) => {
    const request = new Request(path, opts);
    const resType = opts.resType || 'json';
    const fetchPromise = fetch(request, opts);

    // TODO:: implement caching system to block the same request if it is already in progress
    return fetchPromise
        .then(res => res[resType]())
        // TODO:: proper error handling
        .catch(err => console.error(`Errror thrown: ${err}`));
}