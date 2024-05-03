// title:nodejs
//name:Kalaiarasan P
//Date:
//reviewed by:

var fs=require('fs');

// To read content from file
fs.readFile("Async.txt",(err,data)=>{
    if(err){
        console.log("error while reading the file");
    }
    else{
        console.log(data.toString());
    }
});

// Append new data

var newdata="This is the new line appended in the file"

fs.appendFile("kalai.txt",newdata,'utf-8',(err)=>{
    if(err){
        console.log("Error while trying to append the file");
    }
    else{
        console.log("New line appended successfuly.");
    }
});

// Rename the file

fs.rename("Sample.txt","Sync.txt",(err)=>{
    if(err){
        console.log("Error occured while renaming");
    }
    else{
        console.log("file renamed successfully");
    }
})

// Delete a file

fs.unlink("delete.txt",(err)=>{
    if(err){
        console.log("Error occured in deleting a file ");
    }
    else{
        console.log("Successfully deleted");
    }
})