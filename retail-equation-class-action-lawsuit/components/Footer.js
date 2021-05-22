import { Container } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className='footer section'>
            <Container maxWidth='sm'>
                <ul className='footer-list'>
                    <li>Copyright &#169; 2021 | </li>
                    <li>918.588.3400 | </li>
                    <li>800.969.6570 | </li>
                    <li>abingtonlaw.com | </li>
                    <li>
                        <a href='https://abingtonlaw.com/disclaimer.html' target='_blank' rel='noopener noreferrer'>
                            Disclaimer
                        </a>
                    </li>
                    <li>
                        <a href='https://abingtonlaw.com/sitemap.xml' target='_blank' rel='noopener noreferrer'>
                            Sitemap
                        </a>
                    </li>
                    <li>320 South Boston Avenue, Suite 1130, Tulsa, Oklahoma 74103</li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;