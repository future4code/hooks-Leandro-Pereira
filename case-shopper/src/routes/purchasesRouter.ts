import express from 'express'
import { PurchaseController } from '../controller/PurchaseController'

export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

purchaseRouter.get('/customer-purchase/:name', purchaseController.getCustomerPurchases);

purchaseRouter.post('/add-purchase', purchaseController.addPurchase);

purchaseRouter.put('/update-product', purchaseController.updateProduct);

purchaseRouter.delete('/delete-product', purchaseController.deleteProduct);

