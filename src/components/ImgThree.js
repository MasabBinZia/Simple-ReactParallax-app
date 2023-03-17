import { Parallax } from 'react-parallax';
import Img3 from '../imgs/img3.jpg';

const ImgThree = ()=>(
    <Parallax className='image' blur={0} bgImage={Img3} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className='content'>
        <span className="img-txt">Step Into a Science Fiction Universe: Visiting the World's Most Innovative City</span>
    </div>
</Parallax>
);
export default ImgThree;
