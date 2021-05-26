import { Container, Grid } from '@material-ui/core';


const content = {
    logo: 'Abington Cole + Ellery'
}

const Header = () => {
    return (
        <header className='header is-white'>
            <Container maxWidth='lg'>
                <Grid container alignItems='center' justify='space-between'>
                    <Grid item xs={6}>
                        <div className='logo-wrap'>
                            <h3 className='logo'>
                                { content.logo }
                            </h3>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;