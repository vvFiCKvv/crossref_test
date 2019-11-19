import { Document } from 'mongoose';

export interface IPublication extends Document {
    doi: string
    title: string
    issn: string[]
}
