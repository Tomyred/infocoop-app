import Error404page from "../../pages/error404Page";
import RatesForm from "../main/rates/form";
import RatesTable from "../main/rates/table";

const routes = [
    {
        path: "/rates",
        exact: true,
        component: <RatesTable />,
    },
    {
        path: "/rates/new",
        exact: true,
        component: <RatesForm />,
    },
    {
        path: "/rates/:id",
        exact: true,
        component: <RatesForm />,
    },
    {
        path: "*",
        exact: false,
        component: <Error404page />,
    },
];

export default routes;
