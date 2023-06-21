import inquirer from "inquirer";
import fs from 'fs';
import qr from "qr-image";
import { error } from "console";

inquirer.prompt([
    {
        message: "Type your url : ",
        name: "URL",
    },
])
.then((answers)=>{


    const url = answers.URL;

    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("himanshu.png"));
}
)

.catch((error)=>{
    if (error.isTtyError) {

        console.log("couldn't be rendered the website");
        
    }
    else{
        console.log("something went wrong !!!");
    }
})
