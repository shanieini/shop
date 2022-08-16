import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadShop } from "../store/shop/shop.action"
export const Filter = () => {

    const dispatch = useDispatch()

    let { shop } = useSelector((storeState) => storeState.shopModule)

    useEffect(() => {
        onLoadShop()
    }, [])

    const onLoadShop = async () => {
        await dispatch(loadShop())
    }

    console.log('shop-filter: ', shop);
    return (
        <div>
            <select name="" id="">
                {

                }
            </select>
        </div>
    )
}

