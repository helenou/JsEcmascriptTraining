class Worker extends Contact{

    constructor(name=null, phone=null, email=null, poste=null, date_debut=new Date()) {
        super(name, phone, email);
        this._poste = poste;
        if(!(date_debut instanceof Date)){
            throw new Error('La date de début doit être une date valide FDP !');
        }
        this._date_debut = date_debut;
    }


    get poste() {
        return this._poste;
    }

    set poste(value) {
        this._poste = value;
    }

    get date_debut() {
        return this._date_debut;
    }

    set date_debut(value) {
        this._date_debut = value;
    }
    getDateFormatted(){
        return`${this.date_debut.getDate()}/ ${this.date_debut.getMonth()+1}/${this.date_debut.getFullYear()}`;
    }
}