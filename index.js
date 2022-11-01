const crypto = require('crypto');
//단방향 알고리즘
//TODO 인코딩_알고리즘 : 'base64'
//TODO 출력_바이트 : 16
//TODO 해시_알고리즘 : 'sha512'

const createHashedPassword = (password) => {
    const salt = crypto.randomBytes(출력_바이트).toString(인코딩_알고리즘)
    const hashPw = crypto.pbkdf2Sync(password, salt, 반복횟수, 출력_바이트, 해시_알고리즘).toString(인코딩_알고리즘)
    return hashPw
};

console.log(createHashedPassword("keeper"));
console.log(createHashedPassword("keeper"));
console.log(createHashedPassword("keeper1"));