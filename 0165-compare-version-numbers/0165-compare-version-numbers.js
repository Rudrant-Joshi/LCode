var compareVersion = function(version1, version2) {
    let s1 = version1.split(".");
    let s2 = version2.split(".");

    let n = Math.max(s1.length, s2.length);

    for(let i = 0; i < n; i++) {
        let a = Number(s1[i] || 0);
        let b = Number(s2[i] || 0);

        if(a > b) return 1;
        if(a < b) return -1;
    }

    return 0;
};