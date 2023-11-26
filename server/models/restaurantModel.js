import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: String,
  description: String,
  logo: String,
  address: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  branches: [],
  menus: [],
  cuisineTypes: [],
})

export default mongoose.model('restaurants', RestaurantSchema)