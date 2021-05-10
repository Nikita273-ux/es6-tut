const greet=(usertype,firstname,lastname)=>{

    if(firstname !=null && lastname == null){
        switch (usertype) {
            case 1:
                console.log("Thank you"+firstname+" "+lastname+"for your validation");
                break;

            case 2:
                    console.log("Thank you"+firstname+" for keeping the network secure");
                    break;
                    
            case 3:
                console.log("Thank you"+firstname+""+lastname+""+"for using the platform");
                break;
        
            default:
                console.log("Please Enter Valid Usertype");
                break;
        }

    }
    else{
        switch (usertype) {
            case 1:
                console.log("Thank you"+firstname+" "+lastname+"for your validation");
                break;
            
            case 2:
                    console.log("Thank you"+firstname+" "+lastname+"for keeping the network secure");
                    break;
            
            case 3:
                        console.log("Thank you"+firstname+" "+lastname+"for using the platform");
                        break;
                

            default:
                break;
        }
    }
}

greet(1,"Nikita","Arsule");
greet(2,"Nikita");
greet(3,"Nikita","Arsule");