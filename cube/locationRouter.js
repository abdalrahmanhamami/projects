const express = require('express');
const bodyPareser = require('body-parser');

const locationRouter = express.Router();
locationRouter.use(bodyPareser());

locationRouter.route('/')
    .all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
    })
    .get((req, res, next)=>{
    res.end('all the location send to you ')
     })
    .post((req, res, next)=>{
    res.end('Location will be added: ' + req.body.name);
    console.log(req.body)
    })
     .put((req, res, next)=>{
    res.statusCode = 403;
    res.end('PUT operation is not supported on /locaion')
    })
     .delete((req, res, next)=>{
    res.end('deleting all location')
    });


locationRouter.route('/:locationId')
    .all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    next();
    })

    .get((req, res, next)=>{
     res.end('specific locations is send to you id is : '+ req.params.locationId)
    })

    .post((req, res, next)=>{
     res.end('Location will be added: ' + req.params.locationId);
    })

    .put((req, res, next)=>{
     res.statusCode = 403;
     res.end('PUT operation is not supported on /locaion' + req.params.locationId)
    })

    .delete((req, res, next)=>{
    res.end('deleting  location' + req.params.locationId)
    });
    
    module.exports = locationRouter;