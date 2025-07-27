let expect = function(val) {
    return {
        toBe: function(expected){
            if(val === expected){
                return true;
            }else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function(otherVal) {
            if(val !== otherVal){
                return true
            }else{
                throw new Error("Equal")
            }
        }
    }
};