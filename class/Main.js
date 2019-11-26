class Main {
    static main(){
        let contact=new Contact('John Doe', "06 118 712", 'job.job@job.fr');
        console.log(contact);
        let worker=new Worker(contact.name, contact.phone,contact.email, 'Consultant Informatique', new Date( '2019-09-30' ));
        console.log(`${worker.name} est ${worker.poste} depuis le ${worker.getDateFormatted()}`)
    }
}
Main.main();
