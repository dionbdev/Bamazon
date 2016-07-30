var inquirer = require('inquirer');
var mysql = require('mysql');

mysql.createConnection({

	host: 'localhost',
	port: 3306,
	database: 'Bamazon',
	user: 'root',
	password:'root1212',

});

connection.connect(function(err){
	if(err) {
		throw err;
	}
});


inquirer.prompt([{
	name: 'choice',
	message: 'What would you like to buy?',
	type: 'list',
	choices: [ 'pen', 'scissors', 'canOpener', 'desk', 'stapler', 'shoes', 'coat', 'tie', 'spoon', 'broom', 'nothing I want']

}]).then(function (a) {

	if(a.choice === 'nothing I want'){
		console.log("Check back later");
	} else {
		shopItem();

	}
});

function shopItem(pen, scissors, canOpener, desk, stapler, shoes, coat, tie, spoon, broom){
	this.pen = pen;
	this.scissors = scissors;
	this.canOpener = canOpener;
	this.desk = desk;
	this.stapler = stapler;
	this.shoes = shoes;
	this.coat = coat;
	this.tie = tie;
	this.spoon = spoon;
	this.broom = broom;
}


function ItemID(opts) {
	this.name = opts.name;
}
ItemID.all = function (callback){
	connection.query('SELECT * FROM items', function (err, results) {
		if (err){
			throw err;
		}
		callback(results);
	});

};


function ItemID.prototype.save = function () {
	connection.query('INSERT INTO items (name) VALUES(?) ', this.name, function (err) {
		if (err) {
			throw err;
		}
	});
};
