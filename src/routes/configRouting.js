
import Home from "../page/Home"
import Error404 from "../page/Error404"

export default [
    {
        path: "/",
        excat: true,
        page: Home
    },
    {
        path:"*",
        page: Error404
    }
];