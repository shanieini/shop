import { BrandPreview } from "./brand-preview"

export const BrandList = ({ brands }) => {

    return (
        <div>
            {
                brands.map(brand => <BrandPreview brand={brand} key={brand.StoreId} />)
            }
        </div>
    )
}

