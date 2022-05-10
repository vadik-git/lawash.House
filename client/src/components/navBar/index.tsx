import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const styles = {
  btn: {
    margin: '0 20px',
    borderColor: '#fff',
    '&:hover': {
      borderColor: '#ff7e7e',
    },
  },
  link: {
    color: '#fff'
  }
}

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Button 
          variant="outlined"
          sx={styles.btn}
        >
          <Link style={styles.link} to="/lawash">Шаурма</Link>
        </Button>
        
        <div>
          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to="/login">Войти</Link>
          </Button>
          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to="/basket">Корзина</Link>
          </Button>
        </div>
      </nav>
    </>
  )
}
