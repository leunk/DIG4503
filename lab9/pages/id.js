//from module example
import Head from 'next/head';
import Link from 'next/link';
//changed name of the css file to see if it werks
import styles from '../components/StylePages/style.module.css';
import IdSearch from '../components/IdSearch';

const id = () => {
    return(
        <div className = {styles.body}>
            <h2 className = {styles.heading}>Poke Search</h2>
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