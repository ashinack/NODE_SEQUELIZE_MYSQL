const express=require('express')
const router=express.Router()
const {addProduct,getProduct,getOneProduct,deleteProduct,getPublishedproduct,updateProduct}=require('../controllers/productController')

router.post('/',addProduct)
router.get('/getProduct',getProduct)
router.get('/:id',getOneProduct)
router.post('/:id',updateProduct)
router.delete('/:id',deleteProduct)
router.get('/getpubpro',getPublishedproduct)

module.exports=router