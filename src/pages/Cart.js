import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { setEmptyCart, setRemoveProductFromCart, setProduct } from '../redux/actions/productActions'


import { useSelector, useDispatch } from 'react-redux';

import { updateProductPurchase, updateUserPurchase } from '../logic/User';

import '../styles/cart.scss'

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

const Cart = ({ history }) => {
    const classes = useStyles();
    const productos = useSelector(state => state.product);
    console.log("productos", productos)
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    let total = productos.reduce((suma, product) => suma + product.price, 0);

    const updateProduct = async () => {
        productos.forEach(async (producto) => {
           await updateProductPurchase(producto.id, producto.stock - 1);
        });
    }

    const updateUser = async () => {
      await updateUserPurchase(user.id, user.compras +1);
    }

    const deleteCartButton = async (item) => {
      dispatch(setEmptyCart());
    }

    const addProductButton = async (item) => {
      dispatch(setProduct(item));
    }

    const deleteProductButton = async (item) => {
      dispatch(setRemoveProductFromCart(item));
    }

      const done = (item) => {
        updateProduct();
        updateUser();
        dispatch(setEmptyCart());
        history.push("/success");
        //comprobar bien
        /*
        if(item === undefined){
          //comprobar bien
            console.log("Error 0 products")
        }else{
            updateProduct();
            updateUser();
            dispatch(setEmptyCart());
            history.push("/success");
        }*/
      }

    return(
        <div className="content">
            <div className="titleCart"> Productos en el carrito : </div>
            <br />
            <div className="container">
            {productos.map(item => (            
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
                  </CardContent>
                </CardActionArea>
                <div className="botonera">
                  <Button variant="contained" onClick={() => deleteProductButton(item)}>-</Button>
                  <div>&nbsp;</div>
                  <span className="botonera-span">{item.quantity}</span>
                  <div>&nbsp;</div>
                  <Button variant="contained" onClick={() => addProductButton(item)}>+</Button>
                </div>
              </Card>
            ))}
            </div>
            <Button variant="contained" onClick={() => deleteCartButton()}>Eliminar carrito</Button>
            <div className="totalPrice"> Precio total: {total}</div>
            <div className="buttonDone"><Button variant="contained" onClick={() => done()}>Finalizar pedido</Button></div>

        </div>
    )
}

export default Cart;