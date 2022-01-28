import Rates from "./index";
import RatesForm from "./form";

const ratesRoutes = [
    {
        path: "/rates",
        exact: true,
        component: <Rates/>,
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
]

export default ratesRoutes;