var myStud = (function () {
    function myStud(firstName, lastName) {
        this.fname = firstName;
        this.lname = lastName;
        alert(this.fname +' '+ this.lname);
    }
    return myStud;
})();

