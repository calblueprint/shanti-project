export type User = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  pet_information: string;
  user_id: string; // UUID
  order_option: boolean;
  address: number; // index of the address the street, city, and zipcode to build the address
  street: string[];
  city: string[];
  zipcode: string[];
  cart_items: Record<string, number>; // JSONB with item as key and quantity as value

};

export type Order = {
  id: number; // bigint generated by default as identity
  user_id: string; // UUID not null
  cart: number; // bigint[] null
  status: string; // bigint null
  pickup_time: number; // bigint null
};

export type Schedule = {
  id: number; // bigint generated by default as identity
  date: string; // text not null
  start_time: string; // text null
  end_time: string; // text null
};

export type Product = {
  imgUrl: string | undefined;
  product_id: number; // bigint generated by default as identity
  name: string; // text not null;
  description: string; // text null;
  category: string; // numeric not null;
  quantity: number; // numeric not null;
  photo: string; // text null;
  updated_at: string; // timestamp with time zone not null default now();
};

export type Cart = {
  id: number; // bigint generated by default as identity
  user_id: string; // UUID not null
  product_id: Record<string, number>; // JSONB with item as key and quantity as value
};
