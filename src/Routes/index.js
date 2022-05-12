import header from '../template/header'
import home from '../Pages/home'
import character from '../Pages/characters'
import error404 from '../Pages/error404'
import resolveRoutes from '../Utils/resolveRoutes'
import getHash from '../Utils/getHash'

const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'contac'
}
const router = async () =>{
    const Header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    Header.innerHTML = await header();
}
export default router;