import './NavBar.css'

function Button({handleClick}){

}

function NavBar({text, link}){
    return(
        <div class="div1">
            <a href={link}>{text}</a>
        </div>
    )
}

export default NavBar