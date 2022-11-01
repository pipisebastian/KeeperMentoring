const crypto = require('crypto');
//단방향 알고리즘
//TODO 인코딩_알고리즘 : 'base64'
//TODO 출력_바이트 : 16
//TODO 해시_알고리즘 : 'sha512'
//TODO 반복횟수 : 마음대로!!!

const createHashedPassword = (password) => {
    const salt = crypto.randomBytes(출력_바이트).toString(인코딩_알고리즘)
    const hashPw = crypto.pbkdf2Sync(password, salt, 반복횟수, 출력_바이트, 해시_알고리즘).toString(인코딩_알고리즘)
    return hashPw
};

console.log(createHashedPassword("keeper"));
console.log(createHashedPassword("keeper"));
console.log(createHashedPassword("keeper1"));
//TODO 3개는 모두 달라야함.
//TODO IF, salt가 랜덤이 아니라, 고정되어있다면? keeper, keeper 결과값은 어떻게 되는가!