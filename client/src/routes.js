import AuthPage from "./pages/AuthPage/AuthPage"
import ShopPage from "./pages/ShopPage/ShopPage"
import StockPage from "./pages/StockPage/StockPage"
import { SHOP_ROUTE, STOCK_ROUTE, LOGIN_ROUTE } from "./utils/const"

export const adminRoutes = [
    {
        path: SHOP_ROUTE,
        Component: ShopPage,
    },
]

export const salesManRoutes = [
    {
        path: SHOP_ROUTE,
        Component: ShopPage,
    },
]

export const storeKeeperRoutes = [
    {
        path: STOCK_ROUTE,
        Component: StockPage,
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage,
    }
]