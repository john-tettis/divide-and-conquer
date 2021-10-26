function findFloor(arr, element){
    let left=0;
    let right = arr.length-1;
    while(right-left >=0){
        let middle= Math.floor((left+right)/2)
//         console.log(middle,arr[middle])
        if(arr[middle]===element){
            return element
        }
        else if(arr[middle]>element){
            right = middle-1
            
        }
        else if(arr[middle]<element){
            if(arr[middle+1]>element || middle>=arr.length-1){
                return arr[middle]
            }
            left = middle + 1
        }
    }
    return -1
}

module.exports = findFloor