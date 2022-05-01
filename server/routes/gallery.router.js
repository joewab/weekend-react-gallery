const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:imageId", (req, res) => {
    console.log('in the PUT route');
    let sqlQuery = `
      UPDATE "gallery"
      SET "likes"=$1
      WHERE "id"=$2;
      `;
    let sqlValues = ["likes" + 1, req.params.imageId];
    console.log('I am image id:', req.params.imageId);
    pool.query(sqlQuery, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      })
      .catch((dbError) => {
        console.log("error in PUT /gallery db request:");
        res.sendStatus(500);
      });
  });


// GET Route
router.get('/', (req, res) => {
  // When you fetch all things in these GET routes, strongly encourage ORDER BY
  // so that things always come back in a consistent order 

  const sqlText = `
  SELECT * FROM "gallery"
  ORDER BY "id" DESC;
  `;
  pool.query(sqlText)
    .then((dbResult) => {
      console.log(`Got stuff back from the database`, dbResult.rows);
      res.send(dbResult.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    })
}) // END GET Route

module.exports = router;