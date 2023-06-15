// Import Controllers
import userController from '../modules/user/user.controller.js';

export default (route) => {
  route.post('/api/createuser', userController);
};
