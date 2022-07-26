import Head from 'next/head'
import FilterPanel from '../components/FilterPanel'

export default function Filter() {
  return (
    <div>
      <Head>
        <title>Carmart</title>
      </Head>

      <main>
        <div className="container-fluid">
          <div className="row">
            <FilterPanel/>
            <h1 className='title'>Выберите марку авто</h1>
          </div>
        </div>
      </main>
    </div>
  )
}