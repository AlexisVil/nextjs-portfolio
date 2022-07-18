import Layout from "../components/layout"
import Link from "next/link"

const custom404 = () => (
    <Layout>

        <div className="text-center">
            <h1>404 Not Found  jalepelos</h1>
            <p>
                This page dosn't exists. Please return to <Link href="/">
                    <a>Home Page</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default custom404;