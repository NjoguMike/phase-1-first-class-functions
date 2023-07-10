function receivesAFunction(func){
    return func()
}

function returnsANamedFunction(){
    return function returName(name){
        console.log(name)
    }
}


function returnsAnAnonymousFunction(){
    return function(){
        console.log("anonymous")
    }
}