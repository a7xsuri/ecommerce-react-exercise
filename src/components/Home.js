import classes from './Home.module.css'

function Home(){
    return(
        <div className="container-fluid mx-0 px-0 position-relative">
            <img className={classes.imgLarge} src="https://images.unsplash.com/photo-1554223090-7e482851df45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80"/>
            <div className={classes.background}>
                <section>
                    <div className={classes.text}>
                        <h1>Example Title</h1>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home