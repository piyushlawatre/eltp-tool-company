import { BucketModel } from "./bucket.schema";
import { IBucket } from "./bucket.types";

const createBucket = (bucket: IBucket) => BucketModel.create(bucket)

const getBucket = () => BucketModel.find();

const getBucketByName = (name: string) => BucketModel.findOne({ name: name })

const updateBucket = (bucket: IBucket) => BucketModel.updateOne({ _id: bucket._id }, { $set: bucket })

const deleteBucket = (id: string) => BucketModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createBucket,
    getBucket,
    getBucketByName,
    updateBucket,
    deleteBucket
}