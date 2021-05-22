import Head from 'next/head'

import Form from '../components/Form'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <title>The Retail Equation Class Action Lawsuit | JOIN TODAY</title>
        <meta name='description' content='Abington Cole + Ellery: The Retail Equation Class Action Lawsuit Investigation' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content="The Retail Equation, return denied, Class Action, Lawsuit, Advance Auto Parts, Athleta, Bath & Body Works, Bed, Bath & Beyond, Best Buy, Burlington, Buy Buy Baby, CVS, Dick's Sporting Goods, Famous Footwear, Gap, Home Depot, Old Navy, Sephora, TJ Maxx, Victoria's Secret" />

        <link rel='apple-touch-icon' href='images/abingtonlaw.png' />
        <link rel='shortcut icon' href='images/abingtonlaw.ico' />
        <link rel='icon' sizes='192x192' href='images/abingtonlaw.png' />

        <meta name="theme-color" content="#007bff" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
      </Head>
      <Form />
      <Content />
    </>
  )
}
