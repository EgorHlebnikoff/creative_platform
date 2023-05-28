import { Layout } from "antd";
import { useSelector } from "react-redux";
import Header from "../../components/Layout/Header";
import { selectCurrentUser } from "../../store/user";
import Catalog from "./Catalog";

const { Content } = Layout;

const IndexPage = () => {
    const user = useSelector(selectCurrentUser);

    return (
        <Layout className="layout">
            <Header user={user} />
            <Content>
                <Catalog user={user} />
            </Content>
        </Layout>
    );
};

export default IndexPage;
