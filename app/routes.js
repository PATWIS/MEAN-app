const express = require("express");
const users = require("../app/models/users");

const router = express.Router();

router.get("/users", function(req, res) {

    users.list(function(err, data) {

        if (err) {
            res.status(404);
            res.json({ 
                error: "Users not found"
            });
        } else {
            res.json(data);
        }

    });


});

router.post("/users", function(req, res) {

    // res.json( users.add(req.body) );

    users.add(req.body, function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "User not created"
            });
        } else {

             users.list(function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "Users not found"
            });
        } else {
            res.json(data);
        }

    });
        };

    });

});

router.get("/user/:id", function(req, res) {

    users.get(req.params.id, function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "User not found"
            });
        } else {
            res.json(data);
        }

    });

});


router.put("/user/:id", function(req, res) {

    console.log(req.body);
    req.body.id = req.params.id;

    users.update(req.body, function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "User not found"
            });
        } else {
            users.list(function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "Users not found"
            });
        } else {
            res.json(data);
        }

    });
        }

    });

});


router.delete("/user/:id", function(req, res) {

    users.delete(req.params.id, function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "User not deleted"
            });
        } else {
              users.list(function(err, data) {

        if (err) {
            res.status(404);
            res.json({
                error: "Users not found"
            });
        } else {
            res.json(data);
        }

    });
        }

    });

});

module.exports = router;