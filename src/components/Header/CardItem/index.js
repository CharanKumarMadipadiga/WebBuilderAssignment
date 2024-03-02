import {Component} from 'react'

import './index.css'

class CardItem extends Component {
    

    render() {
        const {cardDetails}=this.props
        const {id, brand, description, highlights, imageUrl, ratingValue, ratingInWords, ratingImage, builder, isBestValue, bestChoiceImage}=cardDetails

        return (
            <div className='card-container'>
                {isBestValue && (
                    <span className='best-value-container'>
                        <img src={bestChoiceImage} alt="best choice" className='best-choice-icon'/>
                        {id===1? (<p className='choice'>Best Choice</p>):(<p className='choice'>Best Value</p>)}
                    </span>
                )}
                
                <li className='builder-card'>
                    <div className='card-min-container'>
                        <p className='id'>{id}</p>
                        <div className='img-container'>
                            <img src={imageUrl} alt={builder} className='card-image'/>
                            <p className='builder'>{builder}</p>
                        </div>
                        <div className='card-content-desktop'>
                            <p className='description'><span className='brand'>{brand}-</span>{description}</p>
                            <p className='brand-heading'>Main highlights</p>
                            <p className='highlights'>{highlights}</p>
                            <p className="show-btn">Show more</p>
                        </div>
                        <div className='rating-btn-container'>
                            <div className='rating-container'>
                                <p className='rating'>{ratingValue}</p>
                                <p className='rating-string'>{ratingInWords}</p>
                                <img src={ratingImage} alt="rating" className='rating-img'/>
                            </div>
                            <button type="button" className='view-btn'>View</button>
                        </div>
                    </div>
                    <div className='card-content-mobile'>
                        <p className='description'><span className='brand'>{brand}-</span>{description}</p>
                        <p className='brand-heading'>Main highlights</p>
                        <p className='highlights'>{highlights}</p>
                        <p className='show-btn'>Show more</p>
                    </div>
                </li>
            </div>
        )
    }
}
        


export default CardItem