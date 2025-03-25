import { useCallback, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import http from '../config/http';



const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Product name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Product price',
    width: 150,
    editable: true,
    type: Number,
  },
  {
    field: 'brand',
    headerName: 'Product brand',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Product quantity',
    width: 160,
    type: Number,
    
  },
  {
    field: 'categories',
    headerName: 'Product categories',
    width: 160,
    
  },
];


export  function ProductTable() {

    const [ products , setProducts ] = useState([]);

    const fetchProducts = useCallback (async()=>{
        try {
            const {data} = await http.get('/api/products');
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(()=>{

        fetchProducts();

    },[fetchProducts]);

    const formattedRows = useMemo(
        () => products.map(product => ({
            id: product._id,
            name: product.name,
            price: product.price,
            brand: product.brand,
            quantity: product.quantity,
            categories: product.categories,
        })),
        [products]
    );

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={formattedRows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
