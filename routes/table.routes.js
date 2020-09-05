const express = require('express');
const router = express.Router();

const Table = require('../models/Table.model');

//GET route to display all the tables

router.get('/tables', (req, res) => {
    Table.find()
      .then(allTheTablesFromDB => {
        console.log(allTheTablesFromDB);
        res.render('admin/tables-list', { tables: allTheTablesFromDB });
      })
      .catch(err =>
        console.log(`Err while getting the tables from the  DB: ${err}`)
      );
  });

// GET route for displaying the form to create a new table

  router.get('/tables/create', (req, res) => res.render('tables-create'));

// POST route for saving a new table in the database

router.post('/tables/create', (req, res) => {
    // console.log(req.body);
    const { name, size, status } = req.body;
  
    Table.create({ name, size, status })
      // .then(tableFromDB => console.log(`New table created: ${tableFromDB.name}.`))
      .then(() => res.redirect('admin/tables'))
      .catch(error => `Error while creating a new table: ${error}`);
  });

  // GET route for querying a specific table from the database

  router.get('/tables/:id/edit', (req, res) => {
    const { id } = req.params;
    Table.findById(id)
      .then(tableToEdit => {
        // console.log(tableToEdit);
        res.render('admin/table-edit', tableToEdit);
      })
      .catch(error =>
        console.log(`Error while getting a single table for edit: ${error}`)
      );
  });

  // POST route to save changes after updates in a specific table

  router.post('/tables/:id/edit', (req, res) => {
    const { id } = req.params;
    const {  name, size, status } = req.body;
  
    Table.findByIdAndUpdate(
      id,
      {  name, size, status },
      { new: true }
    )
      .then(updatedTable => res.redirect(`/tables/${updatedTable._id}`))
      .catch(error =>
        console.log(`Error while updating a single Table: ${error}`)
      );
  });

  // POST route to delete a specific table

  router.post('/tables/:id/delete', (req, res) => {
    const { id } = req.params;
  
    Table.findByIdAndDelete(id)
      .then(() => res.redirect('/tables'))
      .catch(error => console.log(`Error while deleting a table: ${error}`));
  });

  // GET route for displaying the table details page

  router.get('/tables/:someTableId', (req, res) => {
    const { someTableId } = req.params;
    Table.findById(someTableId)
      .then(foundTable => {
        // console.log('Did I find a table?', foundTable);
        res.render('admin/table-details', foundTable);
      })
      .catch(err =>
        console.log(`Err while getting the specific table from the  DB: ${err}`)
      );
  });
  
  router.get('/homepage', function(req, res, next) {
    res.render('homepage');
  });

  module.exports = router;
  