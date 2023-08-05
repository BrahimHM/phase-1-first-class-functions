function receivesAFunction(callback ){
    callback()
}

function returnsANamedFunction(){

    function named () {
        console.log(`Nom nom nom, this is delicious!`);
      };
    return named
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log(`Nom nom nom, this is delicious!`);
      };
}