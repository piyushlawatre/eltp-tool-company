import BucketRepo from "./bucket.repo";
import { IBucket } from "./bucket.types";

const createBucket = (bucket: IBucket) => BucketRepo.createBucket(bucket)

const getBucket = () => BucketRepo.getBucket();

const getBucketByName = (name: string) => BucketRepo.getBucketByName(name);

const updateBucket = (bucket: IBucket) => BucketRepo.updateBucket(bucket);

const deleteBucket = (id: string) => BucketRepo.deleteBucket(id)

export default {
    createBucket,
    getBucket,
    getBucketByName,
    updateBucket,
    deleteBucket
}