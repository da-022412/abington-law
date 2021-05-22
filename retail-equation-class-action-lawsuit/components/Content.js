import { Container } from '@material-ui/core'

const content = {
    intro: 'The Retail Equation Denied Return Class Action Lawsuit',
    subTitle: 'Attention: Consumers who have had a valid return or exchange denied by a retailer.',
}

export default function Content() {
  return (
    <section className='section content-section'>
        <Container className='text-center' maxWidth='lg'>
            <Container maxWidth='sm'>
                <h2 className='heading-2'>
                    { content.intro }
                </h2>
            </Container>
            <div className='content-wrap'>
                <h3 className='heading-3'>
                    <em>{ content.subTitle }</em>
                </h3>
                <p className='body-text'>
                    Abington Cole + Ellery is conducting an investigation regarding the business practices of The Retail Equation and retailers utilizing its services. To the detriment of consumers, these business practices often result in the denial of valid returns and exchanges of merchandise to retailers.
                </p>
                <p className='body-text'>
                    Retailers that use or have used The Retail Equation to deny returns and exchanges include, but are not limited to: <b><em>Advance Auto Parts, Athleta, Bath &amp; Body Works, Bed, Bath &amp; Beyond, Best Buy, Burlington, Buy Buy Baby, CVS, Dick's Sporting Goods, Famous Footwear, Gap, Home Depot, Old Navy, Sephora, TJ Maxx, and Victoria's Secret.</em></b>
                </p>
                <p className='body-text'>
                    If you are a consumer who has had a valid return or exchange denied at a retailer and would like to participate in a class action lawsuit regarding this matter, please complete the following brief questionnaire: <a href='https://forms.gle/peRJi7ovD763Nnue6' target='_blank' rel='noopener noreferrer'>The Retail Equation Potential Class Representative Questionnaire</a>
                </p>
                <p className='body-text'>
                    The Retail Equation provides "retail transaction optimization solutions." The Retail Equation's Verify Return Authorization System uses statistical modeling and analytics to detect "fraudulent and abusive" behavior when returns are processed at return counters of retailers utilizing the system. This system may result in consumers receiving a denied return or a warning that future returns may be declined.
                </p>
                <p className='body-text'>
                    As a result, consumers are complaining that The Retail Equation's Verify Return Authorization System may be denying valid returns and/or exchanges in violation of the return and exchange policies of the various retailers utilizing the system.
                </p>
                <p className='body-text'>
                    This website is not associated with nor authorized by The Retail Equation or any of its clients, partners, or affiliates.
                </p>
            </div>
        </Container>
    </section>
  )
}