


//given a rotated array, and a search value, uses binary search algorithm to find index
function findRotatedIndex(arr,target){
    let bound = findBoundary(arr)
    let right= arr.length-1;
    let left=0;
    if(arr[bound]<= target && arr[right]>=target){
        left = bound
    }
    else{
        right= bound
    }
    while(right>=left){
        let middle= Math.floor((right+left)/2)
        if(arr[middle]===target)return middle
        else if(arr[middle]>target){
            right = middle - 1
        }
        else if(arr[middle]<target){
            left = middle + 1
        }

    }
    return -1
}
//given a rotated array, returns index where rotation occurs [5,6,7,8,1,2,3,4]=>4
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

module.exports = findRotatedIndex