import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "";
  const [selectedCat, setSelectedCat] = useState(initialCat);
  const [showOnSale, setShowOnSale] = useState(false);

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCat) list = list.filter(p => p.category === selectedCat);
    if (showOnSale) list = list.filter(p => p.isOnSale);
    return list;
  }, [selectedCat, showOnSale]);

  return (
    <div className="min-h-screen">
      <section className="py-10 bg-gradient-dark">
        <div className="container">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-2">Nos Miels</h1>
          <p className="text-muted-foreground">Découvrez notre collection de miels artisanaux tunisiens</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCat("")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                !selectedCat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              Tous
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCat(cat.name === selectedCat ? "" : cat.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                  selectedCat === cat.name ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
            <button
              onClick={() => setShowOnSale(!showOnSale)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                showOnSale ? "bg-honey-sale text-foreground" : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              🏷️ En promotion
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aucun produit trouvé pour ce filtre.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
