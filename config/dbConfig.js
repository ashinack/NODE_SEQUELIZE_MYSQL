module.exports={
	HOST:'localhost',
	USER:'root',
	PASSWORD:'mysql',
	DB:'node_sequelize_api_db',
	dialect:'mysql',
	port:"8080",

	pool:{
		max:5,
		min:0,
		acquire:30000,
		idle:10000
	}
}