import { Container } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className='footer section'>
            <Container maxWidth='sm'>
                <ul className='footer-list'>
                    <li><small className='small text-muted'>{'\u00A0'}Copyright &#169; 2021 | </small></li>
                    <li><small className='small text-muted'>{'\u00A0'}918.588.3400 | </small></li>
                    <li><small className='small text-muted'>{'\u00A0'}800.969.6570 | </small></li>
                    <li><small className='small text-muted'>{'\u00A0'}abingtonlaw.com | </small></li>
                    <li><small className='small text-muted'><a href='https://abingtonlaw.com/disclaimer.html' target='_blank' rel='noopener noreferrer'>{'\u00A0'}Disclaimer |</a></small></li>
                    <li><small className='small text-muted'><a href='https://abingtonlaw.com/sitemap.xml' target='_blank' rel='noopener noreferrer'>{'\u00A0'}Sitemap</a></small></li>
                    <li><small className='small text-center text-muted'>320 South Boston Avenue, Suite 1130, Tulsa, Oklahoma 74103</small></li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;