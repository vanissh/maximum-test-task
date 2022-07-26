import classes from '../styles/Card.module.sass'
import Image from 'next/image'
import img_1 from '../assets/1.webp'
import img_2 from '../assets/2.webp'
import img_3 from '../assets/3.webp'

export default function Card({vin, price, probeg, color, engine, transmission, year, name, packet}) {

    const colorName = color.charAt(0).toUpperCase() + color.slice(1)

    const totalPacket = packet ? packet.length : null
    const packetPreview = packet ? packet[0].packetAccName.slice(0, 25) + '...' : null
    const packetPrice = packet ? packet.reduce((acc, item) => acc + +item.packetsAccPrice, 0) : null

    return (
        <div className={'col-8 ' + classes.card}>
            <div className={classes.title}>{name} <span>{year}</span></div>
            <div className={classes.vin}>{vin}</div>
            <div className={classes.slider}>
                <div className={classes.slider_inner}>
                    <div className={classes.slider_item}>
                        <Image src={img_1} alt="car"/>
                    </div>
                    <div className={classes.slider_item}>
                        <Image src={img_2} alt="car"/>
                    </div>
                    <div className={classes.slider_item}>
                        <Image src={img_3} alt="car"/>
                    </div>
                </div>
            </div>
            <div className={classes.descr}>
                <div className={classes.descr_item}>
                    <p className={classes.descr_title}>двигатель</p>
                    <p className={classes.descr_value}>{engine}</p>
                </div>
                <div className={classes.descr_item}>
                    <p className={classes.descr_title}>кпп</p>
                    <p className={classes.descr_value}>{transmission}</p>
                </div>
                <div className={classes.descr_item}>
                    <p className={classes.descr_title}>пробег</p>
                    <p className={classes.descr_value}>{probeg} км</p>
                </div>
                <div className={classes.descr_item}>
                    <p className={classes.descr_title}>Цвет</p>
                    <p className={classes.descr_value}>{colorName}</p>
                </div>
                {packet && 
                    <div className={classes.descr_item_package}>
                        <p className={classes.descr_title}>пакеты</p>
                        <p className={classes.descr_value}>{packetPreview} <span>(+ ещё {totalPacket-1} пакетов)</span></p>
                    </div>
                }
            </div>

            <div className={classes.price_block}>
                <div className={classes.price}>
                    <div className={classes.total}><span>{price}</span> ₽</div>
                    {packet && <div className={classes.options}>Доп. опции на <span>{packetPrice}</span> ₽</div>}
                </div>
                <button className={classes.buy}><span>купить</span></button>
            </div>
        </div>
    )
}