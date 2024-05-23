var divisorGame = function(n) {
    let count = 0; // Alice의 턴을 추적 (짝수일 때 Alice의 차례)
    
    while (n > 1) {
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                n -= i;
                count++;
                break;
            }
        }
    }
    
    return count % 2 === 1;
};