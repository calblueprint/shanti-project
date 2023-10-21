/* eslint-disable no-console */
import { useEffect, useState } from "react"
import { Button, Stack } from "react-bootstrap"
import { Product } from "../../schema/schema"
import { fetchProducts } from "../../supabase/product_queries"
import { useShoppingCart } from "../../app/context/ShoppingCartContext"
// or import { Button } from "@/app/login/styles" if you have set up the alias correctly

type CartItemProps = {
  productId: number
  quantity: number
}

export default function CartItem({ productId, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const [storeItems, setStoreItems] = useState<Product[]>([])

  useEffect(() => {
    async function fetchStoreItems() {
      const { data, error } = await fetchProducts()
      if (error) {
        console.error(error)
        return
      }
      setStoreItems(data)
    }
    fetchStoreItems()
  }, [])

  if (storeItems.length === 0) return null

  const item = storeItems.find((i) => i.product_id === productId)
  if (item == null) return null


  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
      </div>
      <div> {quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.product_id)}
      >
        &times;
      </Button>
    </Stack>
  )
}





