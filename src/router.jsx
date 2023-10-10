import {Navigate, createBrowserRouter} from 'react-router-dom'
import Invoice from "./components/Invoice/Invoice";
import SingleInvoice from './components/Invoice/SingleInvoice';

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Invoice/>
        },
        {
            path: "/invoice/:invoiceId",
            element: <SingleInvoice  />,
        },
    ]
)
export default router