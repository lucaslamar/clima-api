import UserService from '@/app/services/User';

class UserController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const { items, total } = await UserService.getAllUsers(req.query);
        return res.json({ items, total, page: parseInt(page, 10) });
    }
}

export default new UserController();
