// this is a helper function that will wrap our async functions and catch any errors that occur and pass them on to our
// error handler.
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    };
};
