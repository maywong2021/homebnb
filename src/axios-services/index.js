import axios from 'axios'
const JSON_DATA = require('../data.json')
/*
! just for reference
* const UNSPLASH = 'https://api.unsplash.com'
* const CLIENT = '?client_id=h5djjhOvsmtyWwpjmPbxeX-DiM76U6_PNWR_fwt7O5Q'
*/

export const getUserByUsername = async (userName) => {
  const { users } = JSON_DATA
  const specUser = users.filter((user) => user.username === userName)
  console.log('specUser :>> ', specUser)
  return specUser
}

export const getListing = (listingId) => {
  const { listings } = JSON_DATA
  const [singleListing] = listings.filter((listing) => listing.id === listingId)
  return singleListing
}
