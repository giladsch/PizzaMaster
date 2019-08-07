
import * as oracledb from 'oracledb';
import { getConnection, Connection } from 'oracledb';
(<any>oracledb).autoCommit = true;
(<any>oracledb).poolTimeout = 0;

export class dbHandler {
    static conn: Connection

    public async insertOne(collectionName: string, document) {
        let collection = await this.getCollection(collectionName);
        await collection.insertOneAndGet(document);
    }

    async createCollection(collectionName: string) {
        let db = await this.getDb();
        await db.createCollection(collectionName);
    }

    public async getOne(collectionName: string, filter: Record<string, any>) {
        let collection = await this.getCollection(collectionName);
        return collection.find().filter(filter);
    }

    public async getAll(collectionName: string) {
        let dataToReturn: Array<Record<string, any>> = [];
        let collection = await this.getCollection(collectionName);
        let results = await collection.find().getDocuments();
        results.forEach(result => {
            dataToReturn.push(result.getContent());
        })
        return dataToReturn;
    }

    private async getCollection(collectionName: string) {
        let db = await this.getDb();
        return await db.createCollection(collectionName);
    }



    private async getDb() {
        if (!dbHandler.conn) {
            let dbConfig = {
                user: process.env.user,
                password: process.env.password,
                connectString: process.env.connectString,
                externalAuth: false
            }
            dbHandler.conn = await getConnection(dbConfig);
        }
        return dbHandler.conn.getSodaDatabase();
    }
}