import { Request, Response } from 'express';
import Axios from 'axios';
import { pizzaGroupsController } from './router/pizzaGroupsController';
import App from './app';
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, ".env") })
 
const app = new App(
  [
	  new pizzaGroupsController(),
  ],
  3000
);
 
app.listen();

// app.get("/", (req: Request, res: Response) => {
	// Axios.post('https://speech.googleapis.com/v1p1beta1/speech:recognize', {
	// 	"audio": {
	// 		"content": "/* Your audio */"
	// 	},
	// 	"config": {
	// 		"enableAutomaticPunctuation": true,
	// 		"encoding": "LINEAR16",
	// 		"languageCode": "he-IL",
	// 		"model": "default"
	// 	}
	// }).then((res) => {
	// 	console.log(`statusCode: ${res.status}`)
	// 	console.log(res)
	// })
	// .catch((error) => {
	// })

	//res.send("Hello World")
//});


// async function dropCollection () {

// 	try {		
// 		let soda, content, doc, documents, res;

// 		conn = await oracledb.getConnection(dbConfig);
// 		console.log(conn);

// 		// Create the parent object for SODA
// 		soda = conn.getSodaDatabase();

// 		// Create a new SODA collection and index
// 		// This will open an existing collection, if the name is already in use.
// 		collection = await soda.createCollection("messages");

// 		console.log(collection);

// 	} catch (err) {
// 		console.error(err);
// 	} finally {
//     if (collection) {
//       // Drop the collection
//       let res = await collection.drop();
//       if (res.dropped) {
//         console.log('Collection was dropped');
//       }
//     }
//     if (conn) {
//       try {
//         await conn.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }