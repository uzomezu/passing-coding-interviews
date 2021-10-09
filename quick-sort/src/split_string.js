(()=>{
    function solution(A) {
        let myString = A.toString();
        var arr = [];
        for(let i = 1; i < myString.length; i++){
            // Slice the Array two halfs, and parse for an Integer
            // Push the difference of the two resulting integers
            // For Instace: arr.push('12' - '001')
            // |1 - 2001| == 2000
            // |12 - 1| == 11
            // ... etc.
            arr.push(Math.abs(parseInt(myString.slice(0,i))- parseInt(myString.slice(i))));
        }
        // Use reduce callback to approximate the min value for array
        const min_value = arr.reduce(function(x,y){
           return Math.min(x,y)
        })
        // Console log the min value from array
        console.log(min_value);
    };
    solution(12001);
    solution(7007);
    solution(510);
})();