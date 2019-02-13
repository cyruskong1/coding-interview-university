/*At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change. */

var lemonadeChange = function(bills) {
    var canGiveChange = false;
    var cost = 5;
    var cash = [];
    var change = 0;
    for(var i = 0; i < bills.length; i++) {
        cash.push(bills[i]);
        console.log('cash', cash)
        change = bills[i] - cost;
        console.log('change', change)
        if(change !== 0) {
            console.log("do we have cash:", cash.includes(change))
            if(cash.includes(change) && change !== 10 || change !== 20) {
                canGiveChange = true;
                cash = cash.slice(0, cash.indexOf(change)).concat(cash.slice(cash.indexOf(change) + 1));
                console.log('cash after', cash)
            }
        }
    }
    return canGiveChange
};

console.log('lemondaeChange', lemonadeChange([5,5, 10, 10, 20]))