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

  const handleFilterChange = (category, checked) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    )
    setCurrentPage(1)
  }

  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const categoryMatch = product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const searchMatch = titleMatch || categoryMatch

    if (searchQuery) return searchMatch

    const categoryFilterMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category)

    return categoryFilterMatch
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
        <Sidebar
          selectedCategories={selectedCategories}
          onFilterChange={handleFilterChange}
        />

        <main className={styles.main}>
          <h2 className={styles.title}>DISCOVER OUR PRODUCTS</h2>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus  <br></br> scelerisque. 
          Dolor integer scelerisque nibh amet mi ut elementum dolor</p>

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
