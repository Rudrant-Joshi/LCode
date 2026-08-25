var maximumWealth = function(accounts) {
    let max=0;
    
    for(i=0; i<accounts.length; i++){
        let total = 0
        
        for(j=0; j<accounts[i].length; j++){
            total = total + accounts[i][j]
        }
        if (total > max) {
            max = total;
        }

    }
    return max
};