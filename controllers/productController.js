const { products } = require('../models')
const db=require('../models')

const Product=db.products
const Review=db.reviews


//create product

const addProduct=async(req,res)=>{
	let info={
		title:req.body.title,
		price:req.body.price,
		description:req.body.description,
		published:req.body.published?req.body.published:false
}

const product=await Product.create(info)
res.status(200).send(product)
console.log(product);


}

// get all products

const getProduct=async(req,res)=>{
	let products=await Product.findAll({
		attributes:[
			'title',
			'price'
		]
	})
	res.status(200).send(products)
}


//get single product

const getOneProduct=async(req,res)=>{
	const id=req.params.id
	const products=await Product.findOne({where:{id:id}})
	res.status(200).send(products)
}

//update product
const updateProduct=async(req,res)=>{
	const products=await Product.update(req.body,{where:{id:id}})
	console.log(products);
	res.status(200).send(products)
}

//delete product
const deleteProduct=async(req,res)=>{
	const id=req.params.id
	await Product.destroy({where:{id:id}})
	res.status(200).send('products is deleted')

}

//get published product

const getPublishedproduct=async(req,res)=>{
	const products=await Product.findall({where:{published:true}})
	res.status(200).send(products.title)
}

module.exports={addProduct,getProduct,getOneProduct,deleteProduct,getPublishedproduct,updateProduct}