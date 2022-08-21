import { ProductPreview } from "./product-preview";

export const BrandList = ({ brands }) => {

    return (

        <div className="brand-list">
            {brands &&
                brands.map(brand => {
                    return <>
                        {brand.Products.map(product => <ProductPreview product={product} brand={brand} />)}
                    </>
                })
            }
        </div>
    )
}

