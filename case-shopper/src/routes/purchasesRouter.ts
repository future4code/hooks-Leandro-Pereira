import express from 'express'
import { PurchaseController } from '../controller/PurchaseController'

export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

purchaseRouter.get('/customer-purchase/:name', purchaseController.getCustomerPurchases);

purchaseRouter.post('/add-purchase', purchaseController.addPurchase);

purchaseRouter.post('/update-product', purchaseController.updateProduct);

purchaseRouter.post('/delete-product', purchaseController.deleteProduct);

