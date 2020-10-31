function getSecondLargest(nums) {
    // Complete the function
    if (nums.length===1) {
        return nums[0];
    }

    const m=Math.max(...nums);
    const sorteda=nums.sort((a, b) =>b-a);
    for (const a of sorteda) {
        if (a <m) {
            return a;
        }
    }
    return  m;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]))
