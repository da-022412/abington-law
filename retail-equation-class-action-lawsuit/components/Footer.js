import { Container } from '@material-ui/core';

const content = {
    copyright: 'Copyright &#169; 2021',
    phone: '918.588.3400',
    phoneTwo: '800.969.6570',
    url: 'abingtonlaw.com',
    disclaimer: 'https://abingtonlaw.com/disclaimer.html',
    sitemap: 'https://abingtonlaw.com/sitemap.xml',
    address: '320 South Boston Avenue, Suite 1130, Tulsa, Oklahoma 74103'
}

const Footer = () => {
    return (
        <footer>
            <Container maxWidth='xs'>
                <ul className="footer-list">
                    <li>{ content.copyright }</li>
                    <li>{ content.phone }</li>
                    <li>{ content.phoneTwo }</li>
                    <li>{ content.url }</li>
                    <li>{ content.disclaimer }</li>
                    <li>{ content.sitemap }</li>
                    <li>{ content.address }</li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;