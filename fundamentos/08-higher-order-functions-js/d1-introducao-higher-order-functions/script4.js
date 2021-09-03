const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const dragonStr = dragon.strength;
  const dragonDamage = Math.floor(Math.random() * (dragonStr - 15 + 1)) + 15;
  return dragonDamage;
}

const warriorDamage = () => {
  const warriorStr = warrior.strength;
  const warriorWeaponDmg = warrior.weaponDmg;
  const maxDamage = warriorStr * warriorWeaponDmg;
  const warriorDamage = Math.floor(Math.random() * (maxDamage - warriorStr + 1)) + warriorStr;
  return warriorDamage;
}

const manaAndDamage = () => {
  const int = mage.intelligence;
  const maxDmg = int * 2;
  let damage = Math.floor(Math.random() * (maxDmg - int + 1)) + int;
  const mageMana = mage.mana;
  let consumedMana = 15;

  if (mageMana < 15) {
    damage = 'Não possui mana suficiente';
    consumedMana = 0;
  }
  
  return {
    damage,
    manaCons: consumedMana,
  }
}
