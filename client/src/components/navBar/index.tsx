import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { RiShoppingBasketFill } from 'react-icons/ri'

import { 
  BASKET_PATH, 
  CREATE_PATH, 
  AUTH_PATH,
} from "../../consts";
import { useAuth } from "../../hooks";

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav style={styles.nav}>
        <div>
          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to={`/content`}>Шаурма</Link>
          </Button>

          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to={`/content/createLawash`}>Создать шаурму</Link>
          </Button>
        </div>
        
        <div>
          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to={`/${AUTH_PATH}`}>{user}</Link>
          </Button>
          <Button 
            variant="outlined"
            sx={styles.btn}
          >
            <Link style={styles.link} to={`/${BASKET_PATH}`}>
              <RiShoppingBasketFill size={20} style={{marginTop: '5px'}}/>
            </Link>
          </Button>
        </div>
      </nav>
      <div style={{height: '100px'}}></div>
    </>
  )
}

const styles = {
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 50px',
    backgroundColor: '#242424',
    position: 'fixed' as 'fixed',
  },
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