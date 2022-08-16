import { Filter } from "./filter"

export const Header = () => {

    return (
        <header>
            <div className="header-top-container">
                <div className="logo">logo</div>
            </div>
            <div className="header-bottom-container">
                <Filter />
            </div>
        </header>
    )
}

