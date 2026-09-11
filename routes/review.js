const express = require("express");
const router = express.Router({ mergeParams: true });

const Listing = require("../models/listing");

const wrapAsync = require("../utiles/wrapAsyc.js");
const ExpressError = require("../utiles/ExpressError.js");

const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


//Reviews Post Route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destoryReview));

module.exports = router;