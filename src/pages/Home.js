import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { searchProducts } from '../logic/Products'

import { setProduct as setProductRedux } from '../redux/actions/productActions';

import { createProduct, showProducts } from '../logic/User'

import '../styles/home.scss'

import { FileInput } from '../components/form'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      //marginLeft: '40%',
    },
  },
  formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      //marginLeft: '40%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const Home = ({ history }) => {
  const classes = useStyles();
  const [product, setProduct] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const isLogged = useSelector(state => state.user ? state.user.logged : false);

  const cart = useSelector(state => state.product)

  const resetForm = () => {
    setProduct('');
    setDetail('');
    setPrice('');
    setStock('');
    setImage('');
  }

  const addProduct = () => {
    const element = document.getElementById("notShow");
    element.classList.toggle("show");
  }
  const create = async (event) => {
    event.preventDefault();

    const result = await createProduct(image, product, detail, price, stock);
    if (!result.success) { 
      setError(result.message);
    } else {
      console.log("Producto añadido")
      resetForm();
      history.push("/");
    }
  }

  useEffect(() => {
    showProducts(setProducts);
  }, [])
  const addCart = (item) => {
    const cartFiltered = cart.filter((cartProduct) => {
      return cartProduct.id === item.id
    })

    if(cartFiltered[0] && cartFiltered[0].quantity > item.stock){
      alert("Máximo permitido por disponibilidad")
    } else if(item.stock > 0){
      dispatch(setProductRedux(item));
    }else{
      alert("No hay stock")
    }
  }

  const searchButton = async (event) => {
    const result = await searchProducts(search); 
    setProducts(result)
  }

  const handlerStock = (event) => {
    const stockTarget = Number(event.target.value)
    setStock(stockTarget)
  }

  const handlerPrice = (event) => {
    const priceTarget = Number(event.target.value)
    setPrice(priceTarget)
  }

    return(
        <div>
          <div className="content">
            <div className="homeJS">
            <div className="home">Home</div>
            <br />
            <div className="buscador">
              <TextField id="buscador" label="Buscador" variant="outlined" type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
              <Button id="buttonSearch" variant="contained" onClick={searchButton}>Buscar</Button>
            </div>
            {isLogged && (<Button id="addProduct" variant="contained" onClick={addProduct}>Añadir producto</Button>)}

            <form className={classes.root} id="notShow" noValidate autoComplete="off">
                <FileInput collection="products" onImageUploaded={setImage} />
                <br/>
                <TextField id="product" label="Producto" variant="outlined" type="text" value={product} onChange={(event) => setProduct(event.target.value)} />
                <br/>
                <TextField id="detail" label="Detalle" type="text" variant="outlined" value={detail} onChange={(event) => setDetail(event.target.value)} />
                <br/>
                <TextField id="price" label="Precio" variant="outlined" type="number" value={price} onChange={handlerPrice} />
                <br/>
                <TextField id="stock" label="Stock" variant="outlined" type="number" value={stock} onChange={handlerStock} />
                <br/>
                <Button id="createProduct" variant="contained" onClick={create}>Crear</Button>
            </form>
            </div>
            <br />
            <br />
            <div> Productos : </div>
            <br />
            <div className="container">
            {products.map(item => (            
                <Card className={classes.root} key={item.id} id="carta">
                  <CardActionArea>
                  {item.image && <CardMedia className={classes.media} image={item.image} style={{ maxWidth: '100%' }} />}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.product}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Detalle: {item.detail}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Precio: {item.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Existencias: {item.stock}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div className="addCart"><Button variant="contained" size="small" onClick={() => addCart(item)}>Añadir al carrito</Button></div>
                  </CardActions>
                </Card>
            ))}
            </div>
            {error !== '' && <span>{error}</span>}
            </div>
        </div>
    )
}

export default Home;