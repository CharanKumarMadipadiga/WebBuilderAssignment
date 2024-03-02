import './index.css'

const RelatedDealsCard=(props)=>{
    const {cardDetails}=props
    const {imageUrl, discount, time, name, specification, mainPrice, oldPrice}=cardDetails

    return (
        <li className='related-card-container'>
            <img src={imageUrl} alt="product-img" className='related-card-img'/>
            <div className='discount-time-container'>
                <div className='discount-container'>
                    <p className='related-discount'>{discount}</p>
                </div>
                <div className='time-container'>
                    <p className='time'>{time}</p>
                </div>
            </div>
            <p className='related-name'>{name}</p>
            <p className='specification'>{specification}</p>
            <div className='price-offer-container'>
                <p className='main-price'>{mainPrice}</p>
                <p className='old-price'>{oldPrice}</p>
                <p className='offer'>({discount})</p>
            </div>
            <button className='view-deal-btn'>View Deal</button>
        </li>
    )
}

export default RelatedDealsCard