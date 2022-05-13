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
    let hash = getHash();
    let route = await resolveRoutes(hash);
    console.log(route)
    let render= routes[route] ? routes[route]: error404;
    console.log(render)
    content.innerHTML = render();
}
export default router;