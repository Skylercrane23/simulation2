const { getDb } = require('../database/bootstrap.database');

module.exports = {

  // CREATE LISTING METHOD
  createListing: (req, res, next) => {
    const dbInstance = getDb();
    const { prop_name, prop_desc, address, city, state, zip, img_url, loan_tot, mortgage, desired_rent, user_id } = req.body;

    dbInstance.create_listing([ prop_name, prop_desc, address, city, state, zip, img_url, loan_tot, mortgage, desired_rent, user_id ])
      .then(() => res.status(200).send())
      .catch((err) => res.status(500).send(err));
  },

  // GET ONE LISTING METHOD
  getListing: (req, res, next) => {
    const dbInstance = getDb();
    const { params } = req;

    dbInstance.get_listing([params.id])
      .then(property => res.status(200).send(property))
      .catch(() => res.status(500).send());
  },

  // GET ALL LISTINGS METHOD
  getAllListings: (req, res, next) => {
    const dbInstance = getDb();

    dbInstance.get_all_listings()
      .then(property => res.status(200).send(property))
      .catch(() => res.status(500).send());
  },

  // DELETE LISTING METHOD
  deleteListing: (req, res, next) => {
    const dbInstance = getDb();
    const { params } = req;

    dbInstance.delete_listing([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  // FILTER LISTING METHOD
  filterListing: (req, res, next) => {
    const dbInstance = getDb();

    dbInstance.filter_listing([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }

};