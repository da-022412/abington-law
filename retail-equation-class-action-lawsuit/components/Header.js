import { Container, Grid } from '@material-ui/core';

const content = {
    logo: 'Abington Cole + Ellery'
}

const Header = ({  }) => {
    return (
        <header className='header'>
            <Container maxWidth='lg'>
                <Grid container justify='flex-start'>
                    <Grid item xs={6}>
                        <div className='logo-wrap'>
                            <h3 className='heading-3 logo'>
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