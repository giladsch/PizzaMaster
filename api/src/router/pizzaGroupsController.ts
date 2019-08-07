import * as express from 'express';
import IController from '../shared/IController';
import { pizzaGroupsBl } from '../bl/pizzaGroupsBl';


// // middleware that is specific to this router
// router.use((req, res, next)=> {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route

export class pizzaGroupsController implements IController {
  path = '/pizzaGroups';
  router = express.Router()
  private pizzaGroupsBl: pizzaGroupsBl;

  constructor() {
    this.intializeRoutes();
    this.pizzaGroupsBl = new pizzaGroupsBl();
  }

  public intializeRoutes() {

    this.router.get(this.path, async(req, res) => {
      res.send(await this.pizzaGroupsBl.getAll());
    });

    this.router.get(this.path + 'Create', async(req, res) => {
      await this.pizzaGroupsBl.createCollection();
    });

    this.router.post(this.path, async (req, res) => {
      let filter = {
        name: req.body.name,
        location: req.body.location,
        expiredDate: req.body.expiredDate,
        buyingUsers: req.body.buyingUsers,
        isKosher: req.body.isKosher
      }
      await this.pizzaGroupsBl.insertOne(filter)
      res.send(req.body.location)
    });
  }
}
