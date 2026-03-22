class user_login
{
    username;
    #password;
    constructor(name,pass)
    {
        this.username=name;
        this.#password=pass;
    }

    validity_check(name,pass,users)
    {
        for(let i=0;i<users.length();i++)
        {
            if(name==users[i].username && pass==user[i].#password)
            {
                console.log("LOGIN SUCCESSFULL");
                return true;
            }
        }
        console.log("YOU HAVE ENTERED WRONG CREDITENTIAL");
        return false;
    }

}