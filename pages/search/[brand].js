import FilterPanel from '../../components/FilterPanel'
import Card from '../../components/Card'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Brand ({cars}) {
    const {query} = useRouter()

    return (
      <>
        <Head>
          <title>{query.brand}</title>
        </Head>
        <div className="container-fluid">
          <div className="row">
            <FilterPanel/>
              <div className='col container-fluid'>
                <div className="row">
                  {cars && <Cars data={cars}/>}
                </div>
              </div>
          </div>
        </div>
      </>
    )
}

export async function getServerSideProps({query}){
  const response = await fetch(`https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew[0]=1&orderBy[0][field]=year&orderBy[0][direction]=desc&brand[0]=${query.brand}`)
  const data = await response.json()

  const cars = data.list
  return {props: {cars}}
}

const Cars = ({data}) => 
  data.map(car => {
      const feedData = car.feedData
      return <Card
        key={car._id}
        vin={car.vin} 
        price={feedData.autoPrice}
        year={feedData.modelYear} 
        name={feedData.brandName + ' ' +feedData.modelName}
        engine={feedData.engine.engineName}
        transmission={feedData.equipmentVariantTransmissionType}
        probeg={feedData.autoProbeg}
        color={feedData.colorByClassifierName}
        packet={feedData.noFactoryOptions ? feedData.noFactoryOptions.packetAcc : null}
      />
  })
