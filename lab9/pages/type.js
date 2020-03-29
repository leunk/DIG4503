import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/StylePages/style.module.css';
import TypeSearch from '../components/TypeSearch';

const type = () => {
    render(

        <div>
            <h2>Poke Search</h2>

            <Head>
                <title>Type Search</title>
            </Head>

            <Link href="/name">
                <a className={styles.link}>Search Pokemon by Name</a>
            </Link>

            <br />

            <Link href="/id">
                <a className={styles.link}>Search Pokemon by ID</a>
            </Link>

            <br />

            <TypeSearch />
            <div className={styles.reportarea} id="reportingArea">
            </div>
        </div>
    )
}

