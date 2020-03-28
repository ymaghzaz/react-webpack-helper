import React, { useEffect } from "react"

const withCounterModule = counter => {
  useEffect(() => {
    const module_n = counter % 2
    if (module_n === 0) {
      console.log(`${counter} module 2 wow`)
    }
  }, [counter])
}

export default withCounterModule
