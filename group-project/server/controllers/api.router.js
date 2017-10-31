module.exports = {

  // CREATE LISTING METHOD
  createListing: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, description, imageUrl, loan, mortgage, recommendedRent, rent, address, city } = req.body;

    dbInstance.create_listing([name, description, imageUrl, loan, mortgage, recommendedRent, rent, address, city])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  // GET ONE LISTING METHOD
  getListing: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.get_listing([params.id])
      .then(property => res.status(200).send(property))
      .catch(() => res.status(500).send());
  },

  // GET ALL LISTINGS METHOD
  getAllListings: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_all_listings()
      .then(products => res.status(200).send(property))
      .catch(() => res.status(500).send());
  },

  // DELETE LISTING METHOD
  deleteListing: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_listing([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  // FILTER LISTING METHOD
  filterListing: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // FILTER CODE HERE???
    dbInstance.filter_listing([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }

};