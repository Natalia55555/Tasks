function objClone(obj) {
   if (obj === null)
  return null;
  
  let newObjClone = {...obj};

for (let key in newObjClone){

  newObjClone[key] =
   (typeof newObjClone[key] === 'object' ? objClone(obj[key]) : obj[key])
  };

  return newObjClone;

};


    const obj = {
  a: 1,
  b: 'str',
  c: null,
  d: undefined,
  obj: {
    a: 2,
    b: 'str2',
    c: null,
    obj2: {
      a: 3
    },
    arr2: [3,4,5]
  },
  arr: [1,2,3]
}



let newObj = objClone(obj);


newObj.a = 2;
newObj.obj.a = 25;
newObj.arr[0] = 'str';
newObj.obj.arr2[0] = 'qwe';
newObj.obj.obj2.a = 12;

console.log('obj.a !== 2', obj.a !== 2)
console.log('obj.obj.a !== 25', obj.obj.a !== 25)
console.log("obj.arr[0] !== 'str'", obj.arr[0] !== 'str')
console.log("obj.obj.arr2[0] !== 'qwe'", obj.obj.arr2[0] !== 'qwe')
console.log("obj.obj.obj2.a !== 12", obj.obj.obj2.a !== 12)
console.log('newObj.c === null', newObj.c === null)