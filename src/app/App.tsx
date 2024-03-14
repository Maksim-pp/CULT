import { PageBanner } from 'src/pages/page-banner'
import './App.css'
import { Head } from 'src/pages/head'
import { PageCase } from 'src/pages/page-case'
import { PageMedia } from 'src/pages/page-media'
import { PageServicesFirst } from 'src/pages/page-services-first'
import { PageServicesSecond } from 'src/pages/page-services-second'
import { PageReviews } from 'src/pages/page-reviews'

function App() {

  return (
    <div>
      <Head />
      <PageServicesFirst />
      <PageServicesSecond />
      <PageCase />
      <PageMedia />
      <PageBanner />
      <PageReviews />
    </div>
  )
}

export default App
