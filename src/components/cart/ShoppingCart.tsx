import { Offcanvas, Stack } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useShoppingCart } from "../../app/context/ShoppingCartContext"
import CartItem from "./CartItem"
import { fetchProducts } from "../../supabase/product_queries"
import { Product } from "../../schema/schema"


type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {
              cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
            }
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
