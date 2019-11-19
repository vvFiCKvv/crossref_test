import { Injectable } from '@nestjs/common';
import { IPublication } from '../interfaces/IPublication';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DatabaseService {

    constructor(
        @InjectModel('Publication') public readonly publicationModel: Model<IPublication>
    ) {

    }

}
