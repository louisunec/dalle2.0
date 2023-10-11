import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    const url = process.env.MONGODB_URL;
    
    mongoose.connect(url)
     .then(() => console.log('MongoDB connected...'))
     .catch((err) => console.log(err));
}

export default connectDB;