import { useEffect } from "react"
import { shopService } from "../services/shop.service"

export const Shop = () => {

    const loadShop = async () => {
        const shop = await shopService.query()
        console.log('shop: ', shop);
    }

    useEffect(() => {
        loadShop()
    }, [])


    return (
        <div>

        </div>
    )
}

