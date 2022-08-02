import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListings";
import { getUserListingsRoute } from "./getUserListings";
import { updatedListingRoute } from "./updateListing";

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updatedListingRoute
]