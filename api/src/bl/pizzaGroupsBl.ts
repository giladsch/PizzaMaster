import { SodaDocument } from 'oracledb';

import {dbHandler} from '../dal/dbHandler'

export class pizzaGroupsBl {
    private collectionName = 'pizzaGroups';
    private dbHandler:dbHandler;

    constructor() {
        this.dbHandler = new dbHandler();
    }

    async createCollection(){
        return await this.dbHandler.createCollection(this.collectionName);
    }

    async insertOne(document){
        return await this.dbHandler.insertOne(this.collectionName,document);
    }

    async getOne(filter: Record<string, any>){
        return await this.dbHandler.getOne(this.collectionName,filter);
    };

    async getAll(){
        return await this.dbHandler.getAll(this.collectionName);
    }
}
