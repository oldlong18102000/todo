import Filters from "./Filter";
import Header from "./Header";
import TableUser from "./TableUser";

const Home = (props) => {
    return (
        <>
            <Header />
            {/* <FormAddNew /> */}
            <Filters />
            <TableUser />
        </>
    )
}

export default Home;