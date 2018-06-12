// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.



const finAdvisor = Object.create({}, {
    company: {
        value: "Sun Financial",
        enumerable: true,
        writable:true
    },
    specialty: {
        value: "Real Estate",
        enumerable: true,
        writable: true
    },
    name: {
        first: "Jim",
        last: "Ramsey",
        enumerable: true,
        writable: false
    },
    portfolio: {
        enumerable: false,
        writable: true,
        transactions: []
    },
    purchase: {
        enumerable: false,
        writable: false,
        value: function (ticker, qty, price) {

            const transaction = Object.create({}, {
                type: "buy",
                ticker: ticker,
                qty: qty,
                price: price
            })

            this.portfolio.transactions.push(transaction);
        }
    },
    sell: {
        enumerable: false,
        writable: false,
        value: function (ticker, qty, price) {

            const transaction = Object.create({}, {
                type: "sell",
                ticker: ticker,
                qty: qty,
                price: price
            })

            this.portfolio.transactions.push(transaction);
        }
    },
    worth: {
        enumerable: false,
        writable: false,
        value: function () {
            
            console.log(this.portfolio.transactions)
        }
    }

})

finAdvisor.purchase("AAPL", 70, 100.00);
finAdvisor.purchase("TA", 30, 80.00);
finAdvisor.purchase("JS", 40, 150.00);
finAdvisor.sell("AAPL",20,120.00);
finAdvisor.purchase("TA", 200, 30.00);
finAdvisor.worth();