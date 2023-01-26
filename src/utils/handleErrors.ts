export const handleError = function (err: any) {
    console.warn('Error: ', err);
    return new Response(JSON.stringify({
        code: 400,
        message: 'Stupid network Error'
    }));
};