const express = require("express");
const router = express.Router();

const burgers = require("..models/burger.js");

// var burger = require("../models/burger.js");

//TODO: Build out view and API routes

// ============
// API ROUTES
// ============

router.get("/", function(req,res) {
    burgers.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
    })
    }
)