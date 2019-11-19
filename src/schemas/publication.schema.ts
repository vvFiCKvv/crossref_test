import * as mongoose from 'mongoose';
export const PublicationSchema = new mongoose.Schema({
    doi: String,
    title: String,
    issn: [String]
});