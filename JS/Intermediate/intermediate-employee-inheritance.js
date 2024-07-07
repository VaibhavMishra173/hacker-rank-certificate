'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

//Activtiy list Task/

// Define Activity function
function Activity(amount) {
    this.amount = amount;
}

// Add methods to Activity prototype
Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
        return false;
    } else {
        this.amount = value;
        return true;
    }
};

Activity.prototype.getAmount = function() {
    return this.amount;
};

// Define Payment function
function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
}

// Inherit from Activity
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

// Add methods to Payment prototype
Payment.prototype.setReceiver = function(receiver) {
    this.receiver = receiver;
};

Payment.prototype.getReceiver = function() {
    return this.receiver;
};

// Define Refund function
function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
}

// Inherit from Activity
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

// Add methods to Refund prototype
Refund.prototype.setSender = function(sender) {
    this.sender = sender;
};

Refund.prototype.getSender = function() {
    return this.sender;
};


//Employee Inheritance

// Define Employee function
function Employee(title) {
    this.title = title;
}

// Add methods to Employee prototype
Employee.prototype.setTitle = function(title) {
    this.title = title;
};

Employee.prototype.getTitle = function() {
    return this.title;
};

// Define Engineer function
function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}

// Inherit from Employee
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

// Add methods to Engineer prototype
Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
};

Engineer.prototype.getIsManager = function() {
    return this.isManager;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    var inputs = readLine().split(' ');
    var engineerObject = new Engineer(inputs[0], inputs[1].toLowerCase() === 'true');
    
    ws.write(`Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    engineerObject.setTitle(readLine());
    engineerObject.setIsManager(readLine().toLowerCase() === 'true');
    
    ws.write(`Final Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    ws.write(`Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}\n`);
    ws.write(`Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}\n`);
    ws.write(`Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}\n`);
    ws.write(`Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}\n`);
}'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

// Define Activity function
function Activity(amount) {
    this.amount = amount;
}

// Add methods to Activity prototype
Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
        return false;
    } else {
        this.amount = value;
        return true;
    }
};

Activity.prototype.getAmount = function() {
    return this.amount;
};

// Define Payment function
function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
}

// Inherit from Activity
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

// Add methods to Payment prototype
Payment.prototype.setReceiver = function(receiver) {
    this.receiver = receiver;
};

Payment.prototype.getReceiver = function() {
    return this.receiver;
};

// Define Refund function
function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
}

// Inherit from Activity
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

// Add methods to Refund prototype
Refund.prototype.setSender = function(sender) {
    this.sender = sender;
};

Refund.prototype.getSender = function() {
    return this.sender;
};


//Employee Inheritance

// Define Employee function
function Employee(title) {
    this.title = title;
}

// Add methods to Employee prototype
Employee.prototype.setTitle = function(title) {
    this.title = title;
};

Employee.prototype.getTitle = function() {
    return this.title;
};

// Define Engineer function
function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}

// Inherit from Employee
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

// Add methods to Engineer prototype
Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
};

Engineer.prototype.getIsManager = function() {
    return this.isManager;
};

// Below is the main Function
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    var inputs = readLine().split(' ');
    var engineerObject = new Engineer(inputs[0], inputs[1].toLowerCase() === 'true');
    
    ws.write(`Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    engineerObject.setTitle(readLine());
    engineerObject.setIsManager(readLine().toLowerCase() === 'true');
    
    ws.write(`Final Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    ws.write(`Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}\n`);
    ws.write(`Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}\n`);
    ws.write(`Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}\n`);
    ws.write(`Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}\n`);
}
