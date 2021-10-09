(async ()=>{
    // quick sorting algorithm 
    const fs = require('fs');
    const path = require('path');
    fs.readFile('../generated.json', 'utf8', async (err,data)=>{
        if (err) {
            throw err
        } else {
            const info = JSON.parse(data);
            for (const item of info){
                for (const entry in item){
                    console.log(item[entry]);
                }

            }
            var randomFile = '../hello.txt';
            var realFile = '../generated.json';
            console.log(randomFile, " Exists?", fs.existsSync(randomFile))
            console.log(realFile, " Exists?", fs.existsSync(realFile));
        }
    })
    function quickSort(scrambled = new Array()){
        const list = [...scrambled];
        if (list.length < 2){ 
            return new Promise((resolve,reject)=>{
                resolve(list);
            })
        }
        const pivot = Math.floor(list[0]);

        const smaller = list.filter((item)=>Math.floor(item)<pivot);
        const larger  = list.filter((item)=>Math.floor(item)>pivot);
        console.log(smaller,larger);
        return new Promise(async (resolve,reject)=>{
            reCurList = [... await quickSort(smaller),pivot,... await quickSort(larger)];
            resolve(reCurList);
        });
        
    }
   
    //quickSort([11,3,5,12,8,2,6,1]);

    // const myForm = document.forms[0];
    // const myList = document.getElementById('myList');
    // myForm.addEventListener('submit', async (e)=>{
    //     e.preventDefault();
    //     console.log('form submitted');
    //     const arrayOfNums = myList.value.split(',');
    //     console.log(arrayOfNums);
        
    //     console.log(await quickSort(arrayOfNums));
        
        
    // });
})();