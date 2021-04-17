class Appliance{
	constructor(name, kind){
		this.name = name;
		this.kind = 'electrical device';
		this.voltage = false;
	}
	//метод - включение устройства
	turnOn() {
		console.log(this.name + " is turned on");
		this.voltage = true;
	}
	//метод - выключение устройства
	turnOff() {
		console.log(this.name + " is turned off");
		this.voltage = false;
	}
}


//устройство - 1
class Radiator extends Appliance{
	constructor(name, brand, power, purpose){
		super(name);
		this.barnd = brand;
		this.power = power;
		this.purpose = "room heating";
	}
}

//устройство -2
class Iron extends Appliance{
	constructor(name, features, weight, purpoise){
		super(name);
		this.features = features;
		this.weight = weight;
		this.purpoise = 'iron clothes';
	}
}

//экземпляр радиатора
const radiator1 = new Radiator('radiator M500', 'Bosh', '1kW');

//экземпляр утюга
const iron1 = new Iron('iron Nimbus2000', 'steam cleaning', '1 kg');

//включить радиатор
radiator1.turnOn()
//выключить утюг
iron1.turnOff()

console.log(radiator1)
console.log(iron1)