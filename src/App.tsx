import { Routes, Route } from "react-router";

import Layout from "@/app/dashboard/page";
import Testpage from "@/app/testpage/page";
import Newpage from '@/app/newpage/page';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Testpage />} />
            </Route>
            <Route path="/newpage" element ={<Layout/>}>
                <Route index element={<Newpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
