const Header = () => {
    return ( 
        <div className="card header">
            <h1>Parent-Teacher Connect Hub</h1>
            <div className="search">
                <input type="search" className="input" placeholder="search"></input>
                <button className="button"><i class="fa-jelly fa-regular fa-lg fa-magnifying-glass"></i></button>
            </div>
            <button className="button"><i class="fa-jelly fa-regular fa-xl fa-sun"></i></button>
            <button className="button"><i class="fa-jelly fa-regular fa-moon fa-xl"></i></button>
        </div>
     );
}
 
export default Header;