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

const initialBattleMembers = { mage, warrior, dragon };
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

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDamage) => {
    const warriorTurnActions = warriorDamage();
    warrior.damage = warriorTurnActions;
    dragon.healthPoints = dragon.healthPoints - warriorTurnActions;
  },
  mageTurn: (manaAndDamage) => {
    const mageTurnActions = manaAndDamage();
    mage.damage = mageTurnActions.damage;
    mage.mana = mage.mana - mageTurnActions.manaCons;
    dragon.healthPoints = dragon.healthPoints - mage.damage;
  },
  dragonTurn: (dragonDamage) => {
    const dragonTurnActions = dragonDamage();
    dragon.damage = dragonTurnActions;
    mage.healthPoints = mage.healthPoints - dragonTurnActions;
    warrior.healthPoints = warrior.healthPoints - dragonTurnActions;
  },
  attBattleMembers: () => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(manaAndDamage);
    gameActions.dragonTurn(dragonDamage);
    return battleMembers;
  }
};



console.log('Ínicio do turno:');
console.table(initialBattleMembers);
console.log('Após o turno:');
console.table(gameActions.attBattleMembers());
