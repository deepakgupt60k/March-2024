// "use strict"; when use then undefined

//default binding
// function callBack()
// {
//     console.warn(this); // window / undefined
// }

// callBack(); // is this call site? YES
// Do you have any extra information? NO

let obj = {
    name:"deep",
    func:function(){
        console.log(this,"func");
    }
}

obj.func(); // obj. is a extra information means context

// is this call site? YES
// Do you have any extra information? Yes


