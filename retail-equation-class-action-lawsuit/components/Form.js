import { Container } from '@material-ui/core'

const content = {
    title: 'Has The Retail Equation prevented you from making a return or exchange?',
    subTitle: 'If so, please submit the following information to participate in the class action:',
    formFooter: 'An attorney client relationship is not formed by submitting information through this web site.'
}

export default function Form() {
  return (
    <section className='section'>
        <Container className='text-center' maxWidth='sm'>
            <h1 className='heading-1'>
                { content.title }
            </h1>
            <h2 className='heading-3 text-muted'>
                { content.subTitle }
            </h2>
            <small className='form-footer small text-muted'>
                <em>{ content.formFooter }</em>
            </small>
        </Container>
    </section>
  )
}