import { connect } from "mongoose";

export const connectMongoDB = async () => {
    try {
        await connect(process.env.MONGO_CONNECTION_STRING as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log();
        console.log("--------------------- SUCCESSFULLY CONNECT TO MONGODB --------------------");

        return true;
    } catch (e) {
        throw { message: "COULD NOT CONNECT TO MONGODB", error: e }
    }
}
