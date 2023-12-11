import { getYear } from '../utilities/dates';

function Footer({ copyright, author }) {
    return (
        <footer>
            <p>&copy; { copyright } {author}</p>
        </footer>
    );
}

Footer.defaultProps = {
    copyright: getYear()
}

export default Footer;
