


function sortedFrequency(arr, target){
    let initial= binaryFind(arr,target)
    if(initial===-1){return -1}
    let left = leftBound(arr,initial,target)
    let right = rightBound(arr,initial,target)
    return right-left+1

}
function leftBound(arr,initial,target){
    let left = 0;
    let right = initial
    if(arr[0]===target){return 0}
    while(right-left>=0){
        let middle= Math.floor((left+right)/2)
        let current = arr[middle]
        if(current===target){
            if(arr[middle-1]<target){
                return middle
            }
            else{
                right=middle-1
            }
        }
        else{
            if(arr[middle+1]===target){
                return middle+1
            }
            else{
                left = middle+1
            }
        }
    }
}
function rightBound(arr,initial,target){
    let left = initial;
    let right = arr.length-1;
    if(arr[right]===target){return right}
    while(right-left>=0){
        let middle= Math.floor((left+right)/2)
        let current = arr[middle]
        if(current===target){
            if(arr[middle+1]>target){
                return middle
            }
            else{
                left=middle+1
            }
        }
        else{
            if(arr[middle-1]===target){
                return middle-1
            }
            else{
                right = middle-1
            }
        }
    }
}
function binaryFind(arr, element){
    let left=0;
    let right = arr.length-1;
    let index;
    while(right-left >=0){
        let middle= Math.floor((left+right)/2)
        if(arr[middle]===element){
            index=middle
            break
        }
        else if(arr[middle]>element){
            right = middle-1
        }
        else if(arr[middle]<element){
            left = middle + 1
        }
    }
    return index || index === 0 ? index:-1
}



module.exports = sortedFrequency