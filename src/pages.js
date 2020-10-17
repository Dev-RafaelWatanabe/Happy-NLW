const orphanages = require('./database/fakedata.js');

const { request, response } = require("express")

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    orphanages(req,res) {
        return res.render('orphanages', { orphanages })  
    },

    createOrphanage(req, res) {
        return res.render('Create-orphanage')  
    }
}