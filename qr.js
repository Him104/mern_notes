import inquirer from 'inquirer';
import qr  from "qr-image";
import fs from 'fs';
import { Console } from 'console';

inquirer.prompt([
{
    message: "Type in ur URL: ",
    name: "URL",
},
  ])
  .then((answers) => {

    const url = answers.URL;
    let qr_svg  = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      Console.log("couldn't be rendered in the local environment !!!")
    } else {
      console.log("something went wrong !!!")
    }
  });