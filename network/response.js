exports.success = function (req, res, messege, status) {
    let statusCode = status || 200;
    let statusMessege = messege || '';

let error = false;
    res .status (status).send({
   error,
   statusCode,
   statusMessege
    });

}