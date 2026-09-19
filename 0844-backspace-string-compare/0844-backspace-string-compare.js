var backspaceCompare = function(s, t) {
    s = s.split('')
    t = t.split('')

    for(let i=0; i<s.length; i++){
        if(s[i] == '#'){
            if(i>0){
                s.splice(i-1, 2)
                i = i-2;
            }
            else{
                s.splice(i, 1)
                i--;
            }
        }
    }

    for(let i=0; i<t.length; i++){
        if(t[i] == '#') {
            if(i>0){
                t.splice(i-1, 2)
                i = i-2;
            }
            else{
                t.splice(i, 1)
                i--;
            }
        }
    }

   return s.join('') === t.join('');
};