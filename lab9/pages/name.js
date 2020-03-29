//examples from modules Next Components
import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/StylePages/style.module.css';
import NameSearch from '../components/NameSearch';


const name = () =>{
    return(
        <div>
            <h2>Poke Search</h2>

            <Head>
                <title>Name Search</title>
            </Head>

            <Link href="/id">
                <a className = {styles.link}>Search Pokemon by ID</a>
            </Link>

            <br />

            <Link href = "/type">
                <a className = {styles.link}>Search Pokemon by Type</a>
            </Link>

            <br />

            <NameSearch />
            <div className = {styles.reportarea} id="reportingArea">
            </div> 
        </div>
    )
}

export default name;