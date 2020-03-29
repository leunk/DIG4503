//examples from modules Next Components
import Head from 'next/head';
import Link from 'next/link';
//changed name of css file to include .module in it to see if it does something diff
import styles from '../components/StylePages/style.module.css';
import NameSearch from '../components/NameSearch';


const name = () =>{
    return(
        <div className = {styles.body}>
            {/* maybe h2 needs a class to work? */}
            <h2 className = {styles.heading}>Poke Search</h2>

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