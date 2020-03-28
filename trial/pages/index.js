import Head from 'next/head';
import Link from 'next/link';


const Home = () => {
  return(
    <div>
      <Head>
        <title>This is the homepage!</title>
      </Head>

    <div>
      <p>
        This is page content!
      </p>

      <Link href = "/example">
        <a>Example</a>
      </Link>
    </div>
    </div>
  );
}

export default Home;