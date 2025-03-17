interface Address {
    city: string;
    country: string;
  }



interface UserInterface {
    name : string;
    age : number;
    email : string;
   address?:Address;

}





const mango : UserInterface ={
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
    city: 'New York',
    country: 'USA'
    }
    };
    
    const poly : UserInterface = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
    };
    
    console.log(mango);
    console.log(poly);
    
    