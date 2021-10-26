function findRotationCount(arr) {
    let boundary = findBoundary(arr)
    if(boundary!==-1){
        return boundary
    }
  
}

function findBoundary(arr){
    let right= arr.length-1;
    let left=0;
    if(arr.length===1 || arr[0]< arr[arr.length-1]) return 0
    while(right-left>=0){
        let middle= Math.floor((left+right)/2)
        let current=arr[middle]
        if(current>arr[middle+1])return middle +1
        else if(arr[left] <= current){
            left= middle +1;
        }
        else{
            right=middle -1;
        }
    }
    return -1

}

module.exports = findRotationCount