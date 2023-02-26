import { NavLink } from "react-router-dom";

function MainNavigation(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation