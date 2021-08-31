export function getExceptionResponseMessage (exception) {
    if(exception.hasOwnProperty('response') && exception.response !== undefined) {
        if(exception.response.hasOwnProperty('data') && exception.response.data !== undefined) {
            if(exception.response.data.hasOwnProperty('message') && exception.response.data.message !== undefined) {
                return exception.response.data.message;
            }
        }
    }
}
