import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
    return (
      <aside>
        <List
          component="nav"
        >
          <ListItemText 
            primary="Cadastros" />
          <ListItemButton
            href="/perfume-types"
          >
            <ListItemText primary="Tipos de Perfume" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            href="/perfume-marks"
          >
            <ListItemText primary="Marcas disponiveis" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            href="/perfume-bottlesizes"
          >
            <ListItemText primary="Tamanho do recipiente" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            href="/perfumes"
          >
            <ListItemText primary="Perfumes" />
          </ListItemButton>
        </List>
      </aside>
    )
  }

export default SideMenu;