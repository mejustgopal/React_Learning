import { useEffect } from "react"


const Navbar = ({ color }) => {

    //Case 1: Run on every render
    useEffect(() => {
        alert('Hey, I am running on every render!')
    })

    //Case 2: Run only on first render
    useEffect(() => {
        alert('Hey welcome to the page. This is the first render!')
    }, [])


    //Case 3: Run when color changes
    useEffect(() => {
        alert('I am running because color was changed to: ' + color)
    }, [color])

    // Example of a cleanup function
    useEffect(
        () => {
            alert('This is the first render of the App.jsx component!')

            return () => {
                alert('This is the cleanup function of the App.jsx component! It runs when the component is unmounted or before the next effect runs.')
            }
        }
    )

    return (
        <div>
            I am a Navbar of {color} color component
        </div>
    )
}

export default Navbar
