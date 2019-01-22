function attr4(key:string):any;
function attr4(key:number, val:any):void;
let myobj:any = {};

function attr4(key:string, val:any) {
    if(arguments.length > 1){
        myobj[key] = val;
    }else{
        return myobj[key];
    }
}

attr4('name','wudandan');
console.log(attr4('name'));