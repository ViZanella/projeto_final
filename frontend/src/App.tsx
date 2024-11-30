import PerfumeTypeCreatePage from "./app/cases/perfume-type/created"
import PerfumeTypeEditPage from "./app/cases/perfume-type/edit"
import PerfumesTypeLayout from "./app/cases/perfume-type/layout"
import PerfumeMarkCreatePage from "./app/cases/perfume-mark/created"
import PerfumeMarkEditPage from "./app/cases/perfume-mark/edit"
import PerfumeMarkLayout from "./app/cases/perfume-mark/layout"
import PerfumeBottlesizeCreatePage from "./app/cases/perfume-bottlesize/created"
import PerfumeBottlesizeEditPage from "./app/cases/perfume-bottlesize/edit"
import PerfumeBottlesizeLayout from "./app/cases/perfume-bottlesize/layout"
import PerfumeCreatePage from "./app/cases/perfumes/created"
import PerfumeEditPage from "./app/cases/perfumes/edit"
import PerfumeLayout from "./app/cases/perfumes/layout"
import Header from "./app/componentes/uI/header"
import SideMenu from "./app/componentes/uI/side-menu"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>

          <Route path="/perfume-types" element={<PerfumesTypeLayout/>}>
            <Route path="new" element={<PerfumeTypeCreatePage/>} />
            <Route path=":id" element={<PerfumeTypeEditPage/>} />
          </Route>


          <Route path="/perfume-marks" element={<PerfumeMarkLayout/>}>
            <Route path="new" element={<PerfumeMarkCreatePage/>} />
            <Route path=":id" element={<PerfumeMarkEditPage/>} />
          </Route>

           <Route path="/perfume-bottlesizes" element={<PerfumeBottlesizeLayout/>}>
            <Route path="new" element={<PerfumeBottlesizeCreatePage/>} />
            <Route path=":id" element={<PerfumeBottlesizeEditPage/>} />
          </Route>

          <Route path="/perfumes" element={<PerfumeLayout/>}>
            <Route path="new" element={<PerfumeCreatePage/>} />
            <Route path=":id" element={<PerfumeEditPage/>} />
          </Route> 

        </Routes>

      </main>
      <ToastContainer />
    </div>
  )
}

export default App
