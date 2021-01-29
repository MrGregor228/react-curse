import s from './style.module.css';

const Layout = ({id, title, colorBg, urlBg, children}) => {
    return (
        
        <section className={s.root} id={id} style={colorBg ? {backgroundColor:colorBg} : {background:`url(${urlBg})`}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.full} ${s.desc}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
        
    );
};

export default Layout;