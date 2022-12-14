var express = require('express');
const { response } = require('../app');
var router = express.Router();
const multer = require('multer');
const adminControl = require("../controller/adminControl");
const middlewares = require('../middlewares/multer');
const categoryModel = require('../models/categoryModel');
const ProductModel = require('../models/ProductModel');
const userModel = require('../models/userModel');
const userControl = require('../controller/userControl');
const { getCategory } = require('../controller/adminControl');
const orderControl=require('../controller/orderControl')

/* GET users listing. */
router.get('/', adminControl.adminLogin,adminControl.home);
router.get('/', adminControl.adminLogout);
router.get("/getGraphDetails",adminControl.getGraphDetails)
router.get('/getuserdata', adminControl.getUserdata)
router.get('/getcategory', adminControl.getCategory,)
router.get('/product', adminControl.getProduct)
router.get('/banner',adminControl.banner)
router.get('/coupon',adminControl.coupon)

router.post("/blockuser/:id", adminControl.blockUser)
router.post('/activeUser/:id', adminControl.activeUser)
router.post('/addCategory', adminControl.addCategory)
router.post('/editCategory/:id', adminControl.editCategory)
router.post('/deletecategory/:id', adminControl.deleteCategory)
router.post('/addproduct', middlewares.productImage, adminControl.addProduct)
router.post('/editproduct/:id', adminControl.editproduct)
router.post('/deleteproduct/:id', adminControl.deleteProduct)
router.post('/addBanner',middlewares.bannerImage,adminControl.addBanner)
router.post('/blockBanner/:id',adminControl.bannerDeactivate)
router.post('/activeBanner/:id',adminControl.bannerActivate)
router.post('/addCoupon',adminControl.addCoupon)
router.post('/deactivateCoupon/:id',adminControl.deActivateCoupon)
router.post('/activateCoupon/:id',adminControl.activateCoupon)
router.get('/order',adminControl.orders)
  
router.put("/packOrder/:id",orderControl.packOrder)
router.put("/shipOrder/:id", orderControl.shipOrder)
router.put("/outForDelivery/:id", orderControl.outForDelivery)
router.put("/deliverPackage/:id", orderControl.deliverPackage)
router.put("/cancelOrder/:id", orderControl.cancelOrder)

module.exports = router;
