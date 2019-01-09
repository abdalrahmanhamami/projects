const express = require('express');
const bodyPareser = require('body-parser');

const memberRouter = express.Router();
memberRouter.use(bodyPareser());

memberRouter.route('/')
    .all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
    })
    .get((req, res, next)=>{
    res.end('all the member send to you ')
     })
    .post((req, res, next)=>{
    res.end('member will be added: ' + req.body.name);
    })
     .put((req, res, next)=>{
    res.statusCode = 403;
    res.end('PUT operation is not supported on /member')
    })
     .delete((req, res, next)=>{
    res.end('deleting all member')
    });


memberRouter.route('/:memberId')
    .all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    next();
    })

    .get((req, res, next)=>{
     res.end('specific members is send to you id is : '+ req.params.memberId)
    })

    .post((req, res, next)=>{
     res.end('member will be added: ' + req.params.memberId);
    })

    .put((req, res, next)=>{
     res.statusCode = 403;
     res.end('PUT operation is not supported on /member' + req.params.memberId)
    })

    .delete((req, res, next)=>{
    res.end('deleting  member' + req.params.memberId)
    });
    
    module.exports = memberRouter;