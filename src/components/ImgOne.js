import { Parallax } from 'react-parallax';
import Img1 from '../imgs/img1.jpg';

const ImgOne = ()=>(
    <Parallax className='image' blur={0} bgImage={Img1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className='content'>
        <span className="img-txt">A trip to World first Sci-Fi City </span>
    </div>
</Parallax>
);
export default ImgOne;