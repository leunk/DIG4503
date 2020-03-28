import Head from 'next/head';
import Link from 'next/link';

const Example = () => {
    return(
        <div>
            <Head>
                <title>
                    This is the example page!
                </title>
            </Head>

            <div>
                <p>This is the content</p>
            </div>

            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    );
}

export default Example;