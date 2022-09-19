// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");

// SVOLGIMENTO

const app = new Vue ({
    el: '#root',
    data: {
        getText: '',
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
                //se la position data coincide con i che scorro ..
                if(position===i) //setto la nuova activeContact
                    contacts[i].activeContact=true;
                    this.activeIndex=position;
            }
        },
        sendMessage() {
            const msgToPush = this.getText;
            console.log(msgToPush);
            //inserisco il messaggio all'interno della chat
            
            const objectToPush = {
                date: '10/01/2020 15:30:55',
                message: '',
                status: 'sent'
            };
            objectToPush.date = this.getNewDate();
            objectToPush.message = msgToPush;
            console.log(objectToPush);
            this.contacts[this.activeIndex].messages.push(objectToPush);
            // una volta finito cancella cosa sta scritto in input:
            this.getText= '';

            // RISPOSTA AUTOMATICA
                setTimeout( () => {
                    const objectToPush = {
                        date: '',
                        message: 'ok!',
                        status: 'riceived'
                    };
                    objectToPush.date=this.getNewDate();
                    this.contacts[this.activeIndex].messages.push(objectToPush);
                }, 2000);
        },
        getNewDate() {
            const date = new Date;
            /*
            console.log(date); // Mon Sep 19 2022 16:39:30 GMT+0200 (Ora legale dell’Europa centrale)
            console.log(date.getDate()); // 19
            console.log(date.getDay()); // 1
            console.log(date.getFullYear()); // 2022
            console.log(date.getHours()); // 16
            console.log(date.getMilliseconds()); // 886
            console.log(date.getMinutes()); // 39
            console.log(date.getMonth()); // 8
            console.log(date.getSeconds()); // 30
            console.log(date.getTime()); // 1663598370886
            console.log(date.getTimezoneOffset()); // -120
            */
            const HoursAndMinutes = date.getHours() + ":" + date.getMinutes();
            console.log(HoursAndMinutes); // 16:39
            const HoursAndMinutesAndSeconds = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log(HoursAndMinutes); // 16:39:30
            const Day_Month_Year = 
            date.getDate() + "/" + (date.getMonth() < 10 ? '0' : '') +(date.getMonth()+1) + "/" + date.getFullYear();
            console.log(Day_Month_Year); // 19/09/2022
            console.log(Day_Month_Year + " " + HoursAndMinutes);
            return Day_Month_Year + " " + HoursAndMinutes;
        }
    }
});

