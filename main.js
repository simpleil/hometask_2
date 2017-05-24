
class Fighter {
		constructor (name = 'duke', power = 15, health = 1000) {
			this.name = name;
			this.power = power;
			this.health = health;
			console.log("new created");
		}
		setDamage(damage){
			console.log("start damage");
			this.health = this.health - damage;
			console.log("end damage");
			return console.log(` ${this.name} health: ${this.health}`);
		}
		hit(enemy, point=1) {
			console.log("start hit");
			let damage = point * this.power;
			console.log(damage);
			enemy.setDamage(damage);
			console.log("end hit");
		}
	}

	class ImprovedFighter extends Fighter {
		doubleHit (enemy, point) {
			return super.hit(enemy, point*2);
		} 
	}

	 let fight = (fighter, improvedFighter, ...point) => {
		
		for (i=0; i < point.length; i++) {
			console.log('index' + i);
			if (i % 2 == 0) {
				if (fighter.health > 0) { 
				   fighter.hit(improvedFighter, point[i]);}
			   else { return console.log(`${fighter.name} is dead`)} }
			else {
				if (improvedFighter.health > 0) {
				   improvedFighter.doubleHit(fighter, point[i]);}
				else { return console.log(`${improvedFighter.name} is dead`)} 
			}
		}
	}

	let fighter = new Fighter ();
	let improvedFighter = new ImprovedFighter ('zorro');
	fight(fighter, improvedFighter, 1, 2, 3);