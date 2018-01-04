import back from '../images/back.jpg';
import images from './card_images';

// export default images.map(front => ({front, back, flipped: false}));

export default images.map( (front, index) => {
    return {
        back: back,
        front: front,
        flipped: false
    }
})