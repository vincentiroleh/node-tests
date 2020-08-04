module.exports.add = (a: number, b: number) => a + b;

module.exports.square = (x: number) => x * x;

module.exports.setName = (user: any, fullName: string) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};