import { Layout } from "@/components/Layout"
import { ProductCard } from "@/components/Product/productCard"
import Head from "next/head"
import styles from '../styles/Home.module.css'
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { useState } from "react"

export default function Home({ products }) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState("recommended")
  const [sidebartogle, setSidebartoggle] = useState(true)


  const handleFilterChange = (category, checked) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    )
    setCurrentPage(1)
  }

  const filteredProducts = products
    .filter((product) => {
      const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
      const categoryMatch = product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const searchMatch = titleMatch || categoryMatch

      if (searchQuery) return searchMatch

      const categoryFilterMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)

      return categoryFilterMatch
    })
    .sort((a, b) => {
      if (sortOption === "priceHigh") return b.price - a.price
      if (sortOption === "priceLow") return a.price - b.price
      
      return 0 
    })

  const productsPerPage = 6
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <div className={styles.container}>
     
      {sidebartogle ? (
  <Sidebar
    selectedCategories={selectedCategories}
    onFilterChange={handleFilterChange}
  />
) : null}

        <main className={styles.main}>
         
<div className={styles.decript_main}>
<h2 className={styles.title}>DISCOVER OUR PRODUCTS</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor
          </p>
</div>
          
          <div className={styles.topBar}>
            <div className={styles.itemsCount}>
              <h4>{filteredProducts.length} ITEMS</h4>
            </div>
<div>
<button 
className={styles.sidetogglebtn}
  onClick={() => setSidebartoggle(!sidebartogle)}
>
  {sidebartogle ? "Hide Filter" : "Show Filter"}
</button>

              </div>
             
              
            <div className={styles.sortWrapper}>
        
              <select
                id="sort"
                className={styles.sortSelect}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="recommended">RECOMMENDED</option>
                <option value="newest">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="priceHigh">PRICE : HIGH TO LOW</option>
                <option value="priceLow">PRICE : LOW TO HIGH</option>
              </select>
            </div>
            
          </div>



          
          <section className={styles.grid}>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </section>

          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`${styles.pageButton} ${
                  currentPage === i + 1 ? styles.active : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return {
    props: { products }
  }
}
