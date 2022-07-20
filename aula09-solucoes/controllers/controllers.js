const express = require("express");

exports.home = (req, res) => {
    res.render("home", { entries: res.locals.entries });
};

exports.getEntryForm = (req, res) => {
    res.render("agenda-form");
};

exports.getEntryFormFetch = (req, res) => {
    res.render("agenda-form-fetch");
};

exports.createEntry = (req, res) => {
    res.locals.entries.push({
        title: req.body.title,
        content: req.body.body,
        published: new Date(),
    });

    res.redirect(303, "/");
};
