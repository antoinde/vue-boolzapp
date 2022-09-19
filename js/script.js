// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");

// SVOLGIMENTO

const app = new Vue ({
    el: '#root',
    data: {
        activeIndex: 0,
        contacts,
    },
    methods: {
        getLastMsg(messagesArray){
            // console.log(messagesArray.length);
            let n= messagesArray.length - 1;
            // console.log(n);
            return n;
        },
        setActiveContact(position){
            console.log("Hai cliccato il contatto numero: ", position);
            //Settare false tutti gli activeContact
            for(let i=0; i<contacts.length; i++){
                //se scorrendo trova un true, lo setta false
                if(contacts[i].activeContact===true)
                    contacts[i].activeContact=false;
                //se la posizione data coincide con i che scorro ..
                if(position===i) //setto la nuova activeContact
                    contacts[i].activeContact=true;
                    this.activeIndex=position;
            }
            console.log(contacts);
        }
    
    }
});

