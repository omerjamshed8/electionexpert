import { useState } from "react"
import { Data } from "./likebutton"

function DataProvider({ children }) {
    const [favorites, setFavorites] = useState([])
    const value = {
        favorites,
        addFavorite: (item) => {
            setFavorites(old => [...old, item])
        },
        removeFavorite: (item) => {
            let index = favorites.indexOf(item)
            setFavorites(favorites.filter((item, i) => i !== index))
        }
    }
    return (
        <Data.Provider value={value}>
            {children}
        </Data.Provider>
    )
}

export default DataProvider