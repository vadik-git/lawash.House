import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const styles = {
  btn: {
    padding: 0,
    margin: '0 20px',
    borderColor: '#fff',
    '&:hover': {
      borderColor: '#ff7e7e',
    },
  },
  link: {
    padding: '5px 15px',
    color: '#fff'
  }
}

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to="/lawash">Шаурма</Link>
          </Button>

          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to="/createLawash">Создать шаурму</Link>
          </Button>
        </div>
        
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
      <div style={{height: '100px'}}></div>
    </>
  )
}
