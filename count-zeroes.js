function countZeroes(arr) {
    let search = 0;
    let left =0;
    let right=arr.length-1;
    let middle= (arr.length-1)/2
    let first_zero;
    while(!first_zero){
        if(arr[middle]===search){
            if(search===0){
                search=1
                right=middle-1
                if(arr[right]==search){
                    first_zero=middle
                }
            }
            else{
                search=0
                left=middle+1
                if(arr[left]==search){
                    first_zero=left
                }
            }
        }
        else{
            if(search===0){
                left=middle+1
                if(arr[left]===search){
                    first_zero=left
                }
            }
            else{
                right=middle-1
                if(arr[right]===search){
                    first_zero=left
                }
            }

        }
        middle = Math.floor((left+right)/2)
    }
    let difference = arr.length-first_zero;
    return difference;
}

module.exports = countZeroes