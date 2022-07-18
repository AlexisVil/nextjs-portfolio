import Layout from "../components/layout";

const _error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Couldn't load your page</p>
                ) : (
                    <p>Couldn't get this page</p>
                )
            }

        </Layout>
    )
}

export default _error