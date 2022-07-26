import classes from '../styles/Filter.module.sass'
import { useState } from 'react'
import Link from 'next/link'

export default function FilterPanel() {

  const brands = ['Audi', 'Honda', 'Hyundai', 'Kia', 'Mitsubishi', 'Volkswagen']

  const [active, setActive] = useState(false)

  const toggleDropDown = () => {
    active ? setActive(false) : setActive(true)
  }

  return (
    <div className={classes.panel + ' col-24 col-xl'}>
      <div className={classes.brand_filter} >
        <div className={classes.title} onClick={toggleDropDown}>
          <p>Марка</p>
          <i className={'fa-solid fa-angle-down' + ` ${active? classes.arrow_active : ''}`} ></i>
        </div>
        <div className={classes.dropdown + ` ${active? classes.dropdown_active : ''}`}>
          {brands.map((brand, i) => 
            <Link key={i} href={`/search/${brand}`}>
              <a>{brand}</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
