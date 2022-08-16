import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { loadShop } from "../store/shop/shop.action"
import { Filter } from "./filter"
export const Header = () => {
    const dispatch = useDispatch()
    let { shop } = useSelector((storeState) => storeState.shopModule)

    useEffect(() => {
        onLoadShop()
    }, [])

    const onLoadShop = async () => {
        await dispatch(loadShop())
    }
    console.log(shop)
    return (
        <header>
            <div className="header-top-container">
                <div className="logo">logo</div>
            </div>
            <div className="header-bottom-container">
                {shop && shop.filterTypes?.map((filter, idx) => {
                    return <Filter key={idx} name={filter.name} filter={shop[filter.field]} />
                })}
            </div>
        </header>
    )
}

