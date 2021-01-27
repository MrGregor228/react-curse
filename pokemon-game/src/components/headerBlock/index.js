import s from './style.module.css'
import ReactLogo from '../../logo.svg';
console.log('####: s', s);
const HeaderBlock = ({title, description}) => {
    return (
        <div>
            <div className={s.wrapper}>
                <img src={ReactLogo} alt=""/>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HeaderBlock;