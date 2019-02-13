var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    var sStorage = {};
    var tStorage = {};
    
    for(var i = 0; i < s.length; i++) {
        if(!sStorage.hasOwnProperty(s[i])) {
            sStorage[s[i]] = 1;
        } else {
            sStorage[s[i]]++
        }
     
       if(!tStorage.hasOwnProperty(t[i])) {
   
        tStorage[t[i]] = 1;
   
       } else {
        tStorage[t[i]]++;

       }
    }
    console.log(sStorage, tStorage);
    for(var key in sStorage) {
        if(!tStorage.hasOwnProperty(key)) {
            return false
        } else {
            if(tStorage[key] !== sStorage[key]) {
                return false
            }
        }
    }
    return true
};

console.log(isAnagram('aacc', "ccac"))