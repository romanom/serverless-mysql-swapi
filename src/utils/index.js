
function lambdaResponse({
    json,
    statusCode,
    allowCORS = false
}) {
    const response = {
        statusCode,
        body: JSON.stringify(json),
    };

    if (allowCORS) {
        response.headers = {
            'Access-Control-Allow-Origin': '*',
        };
    }

    return response;
}

export function errorResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 500,
    });
}

export function corsErrorResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 500,
        allowCORS: true,
    });
}

export function notFoundResponse(json) {
    return lambdaResponse({
      json,
      statusCode: 404,
    });
}

export function badRequestResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 400,
    });
}

export function successResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 200,
    });
}

export function corsSuccessResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 200,
        allowCORS: true,
    });
}

export function customResponse(json, code) {
    return lambdaResponse({
        json,
        statusCode: code,
    });
}


export function getResponse(status, data, message) {
    return {
        status,
        message,
        data,
    };
}


export function convertValidationResult(result) {
    let array = [];
    if(result.error) {
        let details = result.error.details;
        for(let i = 0; i < details.length; i++) {
            let key = arrayToStringCamelCase(details[i].path);
            //object[key] = details[i].message;
            let object = {
            propertyName: key,
            errorMessage: details[i].message
            }

            array.push(object);

        }
    }


    return {
        success: !(result.error) ? true : false,
        errorDictionary: array
    }
}

export function arrayToStringCamelCase(array) {
    let string = "";
    for(let i = 0; i < array.length; i++) {
        string += camelCase(array[i]);
        if(i < array.length - 1)
        string += '-';
    }

    return string;
}

function camelCase(str) { 
    return str.toString().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
} 


