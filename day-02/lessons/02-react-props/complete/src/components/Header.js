function Header({ title, slogan }) {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{slogan}</h2>
        </header>
    );
}

Header.defaultProps = {
    title: 'React App',
    slogan: 'This is a React App'
}

export default Header;
