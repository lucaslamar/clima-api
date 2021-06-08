// password = teste123
module.exports = {
    up: (queryInterface) =>
        queryInterface.bulkInsert(
            'Users',
            [
                {
                    firstName: 'admin',
                    lastName: 'admin',
                    password:
                        '535f56e6447ea0fcf3ef1bf5397066d037e9ebb7fd141068e8de9a23ece8eb6e7acf46d0e6bbf17edf2ebe6c80405991be53366138e835c3153019f164340619',
                    email: 'admin@admin.com',
                    cpf: '12345678989',
                    accountType: 'admin',
                    nickName: 'admin',
                },
                {
                    firstName: 'usuario',
                    lastName: 'usuario',
                    password:
                        '535f56e6447ea0fcf3ef1bf5397066d037e9ebb7fd141068e8de9a23ece8eb6e7acf46d0e6bbf17edf2ebe6c80405991be53366138e835c3153019f164340619',
                    email: 'usuario@usuario.com',
                    cpf: '98765432132',
                    accountType: 'usuario',
                    nickName: 'user',
                },
                {
                    firstName: 'vip',
                    lastName: 'vip',
                    password:
                        '535f56e6447ea0fcf3ef1bf5397066d037e9ebb7fd141068e8de9a23ece8eb6e7acf46d0e6bbf17edf2ebe6c80405991be53366138e835c3153019f164340619',
                    email: 'vip@vip.com',
                    cpf: '15935745685',
                    accountType: 'vip',
                    nickName: 'vip',
                },
            ],
            {}
        ),

    down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
