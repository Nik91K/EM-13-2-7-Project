import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import React from "react"

const LayoutPage = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LayoutPage
