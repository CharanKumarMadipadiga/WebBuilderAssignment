import { IoCheckmarkOutline } from "react-icons/io5";

import './index.css'

const LastCard=(props)=>{
    const {lastCardObj}=props
    const {id, brand, description, imageUrl, ratingValue, ratingInWords, ratingImage, builder, discount, highlights, features}=lastCardObj
    

    return (
        
        <div className='builder-card-4'>
            <div className='card-min-container-4'>
                <p className='id-4'>{id}</p>
                <div className='img-container-4'>
                    <img src={imageUrl} alt={builder} className='card-image-4'/>
                    <p className='builder-4'>{builder}</p>
                </div>
                <div className='card-content-desktop-4'>
                    <p className='description-4'><span className='brand-4'>{brand}-</span>{description}</p>
                    <p className='discount-4'>{discount}</p>
                    <p className='brand-4'>Main highlights</p>
                    <ul className='highlights-list'>
                        {highlights.map(eachItem=>(
                            <div className='highlights-container'>
                                <p className='value'>{eachItem.value}</p>
                                <p className="feature-value">{eachItem.caption}</p>
                            </div>
                        ))}
                    </ul>
                    <p className="features-heading">Why we love it</p>
                    <ul className='highlights-list'>
                         {features.map(eachItem=>(
                            <div className='benefits-container'>
                                <IoCheckmarkOutline className="check-icon"/>
                                <p>{eachItem.feature}</p>
                            </div>
                         ))}
                    </ul>
                    <p className="show-btn">Show more</p>

                </div>
                <div className='rating-btn-container-4'>
                    <div className='rating-container-4'>
                        <p className='rating-4'>{ratingValue}</p>
                        <p className='rating-string-4'>{ratingInWords}</p>
                        <img src={ratingImage} alt="rating-4" className='rating-img-4'/>
                    </div>
                    <button type="button" className='view-btn-4'>View</button>
                </div>
            </div>
            <div className='card-content-mobile-4'>
                <p className='description-4'><span className='brand-4'>{brand}-</span>{description}</p>
                <p className='brand-4'>Main highlights</p>
                <ul className='highlights-list'>
                        {highlights.map(eachItem=>(
                            <div className='highlights-container'>
                                <p className='value'>{eachItem.value}</p>
                                <p className="feature-value">{eachItem.caption}</p>
                            </div>
                        ))}
                    </ul>
                    <p className="features-heading">Why we love it</p>
                    <ul className='highlights-list'>
                         {features.map(eachItem=>(
                            <div className='benefits-container'>
                                <IoCheckmarkOutline className="check-icon"/>
                                <p>{eachItem.feature}</p>
                            </div>
                         ))}
                    </ul>
                    <p className="show-btn">Show more</p>
            </div>
                    
        </div>
    )
}

export default LastCard