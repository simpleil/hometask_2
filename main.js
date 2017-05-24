
class Fighter {
		constructor (name = 'batman', power = 15, health = 1000) {
			this.name = name;
			this.power = power;
			this.health = health;
		}
		setDamage(damage){
			this.health = this.health - damage;
			return console.log(` ${this.name} health: ${this.health}`);
		}
		hit(enemy, point=1) {
			let damage = point * this.power;
			console.log(`damage to ${enemy.name}: ${damage}`);
			enemy.setDamage(damage);
		}
	}

	class ImprovedFighter extends Fighter {
		doubleHit (enemy, point) {
			return super.hit(enemy, point*2);
		} 
	}

	 let fight = (fighter, improvedFighter, ...point) => {
		for (i=0; i < point.length; i++) {
			if (i % 2 == 0 && fighter.health > 0)	{ 
					console.log(`hit #${i+1} by ${fighter.name}`);
					fighter.hit(improvedFighter, point[i]);

				}
			if (i % 2 == 0 && fighter.health <= 0) {
				return console.log(`${fighter.name} is dead`);
			}
			if (i % 2 !== 0 && improvedFighter.health > 0) {
				console.log(`hit #${i+1} by ${improvedFighter.name}`);
				improvedFighter.doubleHit(fighter, point[i]);
			} 
			if (i % 2 !== 0 && improvedFighter.health <= 0) {
				return console.log(`${improvedFighter.name} is dead`);
			}
		}
	}

	let fighter = new Fighter ();
	let improvedFighter = new ImprovedFighter ('superman', 25, 1000);
	fight(fighter, improvedFighter, 70, 7, 7, 73);