import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react'


interface ShoppingContextProps {
    children: ReactNode
}

interface CarItems {
    id: number;
    count: number;
    type: string
}

interface ShoppingFn {
    addGood: (id: number, type: string) => void;
    subGood: (id: number) => void,
    getTotalCount: () => number,
    clearCar: () => void,
    getCurcentCount: (id: number) => number,
    carItems: CarItems[]
}

const ShoppingCtx = createContext({} as ShoppingFn)


// export const useShoppingContext = useContext(ShoppingCtx)
export function useShoppingContext() {
    return useContext(ShoppingCtx)
}

export function ShoppingContext({ children }: ShoppingContextProps) {
    // const [carItems, setCarItems] = useState<CarItems[]>([])

    const [carItems, setCarItems] = useState<CarItems[]>(() => {
        let v = localStorage.getItem('shopping')
        if (v) return JSON.parse(v)
        else return []
    })

    useEffect(() => {
        localStorage.setItem('shopping', JSON.stringify(carItems))
    }, [carItems])

    const addGood = (id: number, type: string) => {
        const res = carItems.find(item => item.id === id)
        if (res) {
            setCarItems(pre =>
                pre.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    } else {
                        return item
                    }
                })
            )
        } else {
            setCarItems(pre => {
                return [...pre, {
                    id,
                    type,
                    count: 1
                }]
            })
        }
    }

    const subGood = (id: number) => {
        const res = carItems.find(item => item.id === id)
        if (res) {
            setCarItems(pre =>
                pre.map(item => {
                    if (item.id === id) {
                        if (item.count === 1) {
                            return {
                                ...item,
                                count: 0
                            }
                        } else {
                            return {
                                ...item,
                                count: item.count - 1
                            }
                        }
                    } else {
                        return item
                    }
                })
            )
        }
    }

    const clearCar = () => {
        setCarItems([])
    }

    const getTotalCount = () => {
        const res = carItems.reduce((a, v) => { return a + v.count }, 0)
        return res
    }

    const getCurcentCount = (id: number) => {
        return carItems.find(item => item.id === id)?.count ?? 0
    }



    return (
        <ShoppingCtx.Provider value={{ addGood, subGood, getTotalCount, clearCar, getCurcentCount, carItems }}>
            {children}
        </ShoppingCtx.Provider >
    )
}