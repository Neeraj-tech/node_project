import Header from './Header'

const Home = function () {

    return <div>
        <Header/>
        <div className= "container">
            <h2> App demostrating Sign In & Sign Up Functionality</h2>
                <h3> Using </h3>
                    <ul>
                        <li>React on client side</li>
                        <li>Node on Server Side</li>
                    </ul>
        </div>
    </div>
}

export default Home;