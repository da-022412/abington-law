import { Container } from '@material-ui/core'

import Form from './Form';

const content = {
    title: 'Has The Retail Equation prevented you from making a return or exchange?',
    subTitle: 'If so, please submit the following information to participate in the class action:',
    formFooter: 'An attorney client relationship is not formed by submitting information through this web site.'
}

const FormSection = () => {
  return (
    <section className='intro-section section'>
        <Container className='text-center' maxWidth='sm'>
            <div className='intro-section-wrap'>
                <h1 className='heading-1'>
                    { content.title }
                </h1>
                <h2 className='heading-3 text-muted'>
                    { content.subTitle }
                </h2>
            </div>
            <Form />
            <div className='form-footer'>
                <small className='small text-muted'>
                    <em>{ content.formFooter }</em>
                </small>
            </div>
        </Container>
    </section>
  )
}

export default FormSection;