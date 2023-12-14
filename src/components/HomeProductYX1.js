import { Button2 } from './Buttons'
import UseMediaQuery from '../hooks/UseMediaQuery'
import '../styles/buttons.css'
import '../styles/homeproductyx1.css'

const HomeProductYX1 = ({ products }) => {

    const isDesktop = UseMediaQuery('(min-width: 1023px)').matches;
    const isTablet = UseMediaQuery('(min-width: 768px)').matches;
    const isMobile = UseMediaQuery('(min-width: 375px)').matches;

    const getImage = () => {
        if (isDesktop) {
            return '/images/home/desktop/image-earphones-yx1.jpg'
        } else if (isTablet) {
            return '/images/home/tablet/image-earphones-yx1.jpg'
        } else if (isMobile) {
            console.log()
            return '/images/home/mobile/image-earphones-yx1.jpg'
        }
    }

    return (
        <div className="home-yx1-container">
            <div className="home-yx1-image">
                <img src={getImage()} alt={products[0].name} />
            </div>
            <div className="home-yx1-details">
                <div className='home-yx1-information'>
                    <h4>{products[0].slug}</h4>
                    <Button2 to={`/product/${products[0].name}`}/>
                </div>
            </div>
        </div>
    )
}

export default HomeProductYX1