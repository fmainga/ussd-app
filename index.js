const UssdMenu = require('ussd-menu-builder');
let menu = new UssdMenu();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



//hold inputs
let fname = []
let sname = []
let age = []

// Defining states...
menu.startState({
    run: () => {
        fname = []
        sname = []
        age =[]

        // Welcome Screen      
        menu.con(' Hello and Welcome. Please provide your Fist name, Second name and Age'+
                   '\n Reply with 1 to continue:' +
                 '\n1. Agree'
            );
    },
    // next object links to next state based on user input
    next: {
        '1': 'firstname',
        
    }
});

//Deets collection
menu.state('firstname', {
    run: () => {
        menu.con('Please enter your first name')
    },
    next: {
        '*[a-zA-Z]+': 'fname'
    }
})

menu.state('fname', {
    run: () => {
        fname.push(String(menu.val))
        menu.con(`Hey ${fname[0]}, Enter your second name`)
    },
    next: {
        
        '*[a-zA-Z]+': 'sname'
    }
})

menu.state('sname', {
    run: () => {
        sname.push(String(menu.val))
        menu.con(`Hey ${fname[0]} ${sname[0]}, Enter your Age`)
    },
    next: {
        
        '*\\d+': 'age'
    }
})

menu.state('age', {
    run: () => {
        age.push(Number(menu.val))
        //Check Age limits brackets
        if(age>=55) {
            menu.end(`Hey ${fname[0]} ${sname[0]}, you are ${age[0]} years old. Time to retire `)
        }

        if(age >=18 && age <55 ) {
            menu.end(`Hey ${fname[0]} ${sname[0]}, you are ${age[0]} years old. Keep working.
            \n Remember to stop and hydrate:)`)
        }   
        
        if( age>1 && age<18){
            menu.end(`Hey ${fname[0]} ${sname[0]}, you are ${age[0]} years old. How's School? `)

        }

    }
})

 
// Registering USSD handler with Express
 
app.post('/', function(req, res){
    menu.run(req.body, ussdResult => {
        res.send(ussdResult);
    });
});

app.listen(PORT, () => console.log(`Port ${PORT} is all ears...` ));
