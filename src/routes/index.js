import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListings";
import { getUserListingsRoute } from "./getUserListings";

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute
]