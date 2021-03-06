import s from './style.module.css';

const Layout = ({id, title, description, colorBg, urlBg}) => {
    console.log(`..${urlBg}`);
    return (
        
        <section className={s.root} id={id} style={colorBg ? {backgroundColor:colorBg} : {background:`url(${urlBg})`}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        <p>{description}</p>
                    </div>
                </article>
            </div>
        </section>
        
    );
};

export default Layout;