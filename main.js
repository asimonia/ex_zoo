function Animal () {
	this.animalName = "Eukaryote";
}

function Tenodera () {
	this.genusName = "Tenodera";
}

function Homo () {
	this.genusName = "Homo";
}

function Elephas () {
	this.genusName = "Elephas";
}

Tenodera.prototype = new Animal();
Homo.prototype = new Animal();
Elephas.prototype = new Animal();

function TenoderaSinensis () {
  	this.speciesName = "Sinensis";
}

function HomoSapiens () {
	this.speciesName = "Sapiens";
}

function ElephasMaximus () {
	this.speciesName = "Maximus";
}

TenoderaSinensis.prototype = new Tenodera();
HomoSapiens.prototype = new Homo();
ElephasMaximus.prototype = new Elephas();


var bug = new TenoderaSinensis();
var person = new HomoSapiens();
var elephant = new ElephasMaximus();

// Output the name, genus name, and species name for your TenoderaSinensis
console.log('name', bug.animalName);
console.log('genus', bug.genusName);
console.log('species', bug.speciesName);


// Output the name, genus name, and species name for your HomoSapiens
console.log('name', person.animalName);
console.log('genus', person.genusName);
console.log('species', person.speciesName);

// Output the name, genus name, and species name for your Elephant
console.log('name', elephant.animalName);
console.log('genus', elephant.genusName);
console.log('species', elephant.speciesName);