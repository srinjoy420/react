import {create} from "zustand"
import {persist} from "zustand/middleware"

export const useCardtStore=create(persist((set)=>({
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

})))
// persist is a method now state are add are avalible in localstorage also
