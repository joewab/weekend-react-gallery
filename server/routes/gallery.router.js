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
      SET "likes"= likes + 1
      WHERE "id"=$1;
      `;
    let sqlValues = [req.params.imageId];
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

router.post('/', (req, res) => {
    const image = req.body;
    console.log('heeeeeeres body!', req.body);
    const sqlText = `
    INSERT INTO "gallery"
    ("path", "description", "likes")
    VALUES
    ($1, $2, $3)
    `;
    const sqlValues = [
      image.path,
      image.description,
      0
    ]
    pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        console.log(`Added image to the database`, image);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      })
  
  })

  router.delete("/:imageId", (req, res) => {
    let imageToDelete = req.params.imageId;
    let sqlQuery = `
      DELETE FROM "gallery"
      WHERE "id"=$1;
      `;
    let sqlValues = [imageToDelete];
    pool
      .query(sqlQuery, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      })
      .catch((dbError) => {
        console.log("error in DELETE /treats db request:");
        res.sendStatus(500);
      });
  });

module.exports = router;