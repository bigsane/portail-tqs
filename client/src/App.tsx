import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomeContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
