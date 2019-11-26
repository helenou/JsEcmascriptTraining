class Contact {
    constructor(name=null, phone=null, email=null){

        this._name = name;
        this._phone = phone;
        this._email = email;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

}