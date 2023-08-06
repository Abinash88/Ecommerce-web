export const ErrorMessage = async (res, statuscode = 500, message = 'Internal Server Error') => {
    return res.status(statuscode).json({
        success: false,
        message: message
    })
}


export const middlewareError = (passedFunc) => (req, res) => {
    return Promise.resolve(passedFunc(req, res)).catch(err => {
        return ErrorMessage(res, 500, err.message);
    })
}