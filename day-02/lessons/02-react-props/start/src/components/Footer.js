import { getYear } from '../utilities/dates';

function Footer() {
    return (
        <footer>
            <p>&copy; { getYear() } Michael Whyte</p>
        </footer>
    );
}

export default Footer;
