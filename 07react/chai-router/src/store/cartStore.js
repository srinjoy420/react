import {create} from "zustand"

export const useCardtStore=create((set)=>({
    cart:[],

    addToCart:(item)=>
        set((state)=>({
            cart:[...state.cart,item]
        })),

    removeFromcart:(id)=>
        set((state)=>({
            cart:state.cart.filter((item)=>item.id !==id)
        })),
    clearcart:()=>
        set((state)=>({
            cart:[]
        }))

}))