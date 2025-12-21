
const reqLoger = (req, res, next) => {
    const logedData = {
        type: req.method,
        route: req.path,
        body: req.body
    }

    req.loggedData = logedData;
    // console.log(logedData)
    next();
}

export default reqLoger;