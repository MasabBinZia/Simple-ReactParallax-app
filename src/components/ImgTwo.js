import { Parallax } from 'react-parallax';
import Img2 from '../imgs/img2.jpg';

const ImgTwo = ()=>(
    <Parallax className='image' blur={0} bgImage={Img2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className='content'>
        <span className="img-txt">Journey to the Future: Exploring the World's First Sci-Fi City</span>
    </div>
</Parallax>
);
export default ImgTwo;
