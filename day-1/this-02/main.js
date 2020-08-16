//Ex 06 ->
const beansCost = 1;

const coffeeShop = {
    beans: 40,

    money: 20,
  
    drinkRequirements: {
        latte: {
            beanRequirement: 10, 
            price: 5
        },
        americano: {
        beanRequirement: 5, 
        price: 3
        },
        doubleShot: {
            beanRequirement: 15, 
            price: 3
        },
        frenchPress: {
            beanRequirement: 12, 
            price: 4
        }
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
        if (!this.drinkRequirements[drinkType]) {
            return alert(`Sorry, we don't make ${drinkType}`);
        }

        if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
            return alert(`Sorry, we're all out of beans!`);
        }

        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        console.log(this.beans);
        return false;
    },

    buyBeans: function (numBeans) {
        if (this.money >= numBeans * beansCost) {
            this.money -= numBeans * beansCost;
            this.beans += numBeans
            console.log(this.money, this.beans);
        } else {
            return alert('Not enough money to buy the beans!');
        }
        
        
    },

    buyDrink: function (drinkType) {
        const noIsuueWithDrink = this.makeDrink(drinkType);

        if (noIsuueWithDrink) {
            this.money += this.drinkRequirements[drinkType].price;
        }
    }   
}
  
coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyBeans(10); //should print 21 , 20
