import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food_order:FoodOrder123@cluster0.dg3ppx3.mongodb.net/food-order').then(() => console.log("Connected to MongoDB")).catch((err) => console.error(err));
}