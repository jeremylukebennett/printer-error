"use strict";

console.log("test");



function printerError(s) {

    if(!s.match( /[n-z]/ig || [])){
        return "0/"+ s.length;
    } else {
        let totalChars = s.length;
        let errorChars = s.match( /[n-z]/ig || []).length;
    
        return errorChars.toString()+"/"+totalChars.toString();
    }

}


printerError("aaaa");