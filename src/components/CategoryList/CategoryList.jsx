import { Link } from "react-router-dom"
import { useGetCategory } from "../../hook/useCategory"
import './categorylist.scss'

const CategoryList = () => {

    const { categories } = useGetCategory()
    return (
    <div className="category-list">
    <h3 className="category-list__titulo">Filtra por categorias</h3>
       <ul className="category-list__categorias">
        {
            categories.map((category, index) => {
                return( 
                    <li className="category-list__categoria" key={index}>
                        <Link to={`/products/${category}`}>
                            {category}
                        </Link>
                    </li>
                )
            })
        }
       </ul>
    </div> 
  )
}

export default CategoryList