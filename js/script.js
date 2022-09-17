// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");

// SVOLGIMENTO

const app = new Vue ({
    el: '#root',
    data: contacts,
    methods: {
        getLastMsg(messagesArray){
            // console.log(messagesArray.length);
            let n= messagesArray.length - 1;
            // console.log(n);
            return n;
        }
    
    }
});