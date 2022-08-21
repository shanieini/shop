import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { shopService } from "../services/shop.service"
import { BrandList } from "../cmps/brand-list"
import { loadBrands } from "../store/shop/shop.action"

export const Shop = () => {

    const dispatch = useDispatch()

    let { brands } = useSelector((storeState) => storeState.shopModule)


    useEffect(() => {
        onLoadBrands()
    }, [])

    const onLoadBrands = async () => {
        await dispatch(loadBrands())
    }


    return (
        <div className="shop-container">
            <BrandList brands={brands} />
        </div>
    )
}

