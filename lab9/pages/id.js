//from module example
import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/StylePages/index.css';
import IdSearch from '../components/IdSearch';

const id = () => {
    return(
        <div>
            <h2>Poke Search</h2>
            <Head>
                <title>ID Search</title>
            </Head>

            <Link href="/name">
                <a className = {styles.link}>Search Pokemon by Name</a>
            </Link>

            <br />

            <Link href="/type">
                <a className = {styles.link}>Search Pokemons by Type</a>
            </Link>

            <br />

            <IdSearch />
            <div className = {styles.reportarea} id = "reportingArea">
            </div>

        </div>
    )
}

export default id;