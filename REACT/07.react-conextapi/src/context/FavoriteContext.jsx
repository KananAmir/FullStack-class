import { createContext, useState } from "react"


export const FavoriteContext = createContext(null)

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(
        localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    )

    const toggleFavorite = (product) => {
        const isFavorite = favorites.find(fav => fav.id === product.id)
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== product.id))
            localStorage.setItem('favorites', JSON.stringify(favorites.filter(fav => fav.id !== product.id)))
        } else {
            setFavorites([...favorites, product])
            localStorage.setItem('favorites', JSON.stringify([...favorites, product]))
        }
        
    }

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider