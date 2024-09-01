import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"

import Navbar from "../components/Navbar"

import { styled } from '@mui/material/styles';

import RecursiveChipList from "../components/RecursiveChipList"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';


import TextField from '@mui/material/TextField';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { getProdType, addProdType, delProdType, getCat, getCatLine, delCat, createCat, addProd } from '../app/productSlice';

// for notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useIncDec from '../hook/useIncDec';



const CButton = styled(Button)({
  boxShadow: 'none',

  border: '2px solid #3C3633',

  backgroundColor: '#3C3633',
  color: '#EEEDEB',

  '&:hover': {
    backgroundColor: '#E0CCBE',
    color: '#3C3633',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#E0CCBE',
    color: '#3C3633',

  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


const companys = ['mansa', 'birla white', 'ultratech', 'berger', 'asian paint', 'kasta', 'S.R Industries', "inden", "hp", "surya", "indigo", "prince", "sintex", "finolex", "kisan", "tata", "Dr fixit", "Bond-tide", ""];
const units = ['kg', 'g', 'l', 'ml'];
const colors = ['red', 'black', 'blue', 'green', 'white'];



const Product = () => {

  const { prodType, status, cat, catStatus, catLine } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [prodTypeBtn, setProdTypeBtn] = useState(false);
  const [prodTypeValError, setProdTypeValError] = useState(false);
  const [prodTypeVal, setProdTypeVal] = useState("");

  // for categories 
  const [catData, setCatData] = useState({
    parent: "",
    category: ""
  })

  // for Product's
  const [prodData, setProdData] = useState({
    nikename: "",
    company: "",
    purchasePrice: "0",
    sellPrice: "0",
    qty: "0",
    categoryInfo: "",
    category: "",
    color: "",
    weight: "0",
    unit: "",
    productType: "",

  })

  const [qtyVal, qtyInc, qtyDec, qtySet] = useIncDec(prodData.qty);
  const [weightVal, weightInc, weightDec, weightSet] = useIncDec(prodData.weight);
  const [sellPriceVal, sellPriceInc, sellPriceDec, sellPriceSet] = useIncDec(prodData.sellPrice);
  const [purchasePriceVal, purchasePriceInc, purchasePriceDec, purchasePriceSet] = useIncDec(prodData.purchasePrice);

  const handleTypeValueChnage = (e) => {

    let { value } = e.target

    if (value.trim() == "") {
      setProdTypeValError(true);
    } else {
      setProdTypeValError(false);
    }
    setProdTypeVal(value.trim());

  }

  const handleSubProdType = (e) => {

    setProdTypeBtn(true)

    notify("wait for sec", "info");
    notify(`${prodTypeBtn}`, "info");

    if (prodTypeVal.trim() === "") {
      setProdTypeValError(true)
    } else {
      dispatch(addProdType(prodTypeVal.trim()));
      setProdTypeValError(false);
      notify("Type created", "info");
      console.log(prodTypeVal, status);
    }

    setProdTypeVal((prev) => "");
    setProdTypeBtn(false);
    notify(`${prodTypeBtn}`, "info");

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleProdTypeClick = (e, id) => {

    console.log("edit", id)
  }

  const handleProdTypeDelete = (e, id) => {
    console.log("delete", id)
    dispatch(delProdType(id));
  }

  useEffect(() => {
    dispatch(getProdType());
    console.log(`Hello  ${status}`);
  }, [dispatch, status]);


  // for categories 

  const handleCatData = (val, type) => {
    setCatData({ ...catData, [type]: val });
  }

  const handleCatSubmit = () => {

    const { category, parent } = catData
    if (category.trim() == "") {
      notify('Category is empty', 'error');
    } else {
      dispatch(createCat({ category, parent }));
      notify('Category created', 'success');
    }
  }

  // Placeholder functions for edit, delete, and add
  const handleCatEdit = (category) => {
    console.log(`Edit category: ${category.name}`);
    // Implement your edit logic
  };

  const handleCatDelete = (category) => {
    console.log(`Delete category: `, category);

    if (category.children.length) {
      notify('Category has children', 'error')
    } else {
      dispatch(delCat(category._id));
    }
    // Implement your delete logic
  };

  const handleCatAdd = (category) => {
    console.log(`Add child to category: ${category.name}`);
    // Implement your add logic
  };


  //  for Product's

  const handleProdSubmit = () => {
    let isError = false;

    setProdData((prev) => ({ ...prev, "qty": qtyVal, "purchasePrice": purchasePriceVal, "sellPrice": sellPriceVal, "weight": weightVal }));

    if (!prodData.company) {
      notify("Enter Company name", "warn");
      isError = true
    }

    if (Number(purchasePriceVal) <= 0) {
      notify("Enter Purchase Price", "warn");
      isError = true
    }


    if (Number(prodData.sellPrice) <= 0) {
      notify("Enter Sell Price", "warn");
    }

    if (Number(prodData.sellPrice) < Number(prodData.purchasePrice)) {
      notify("Prise is less than purchase", "error");
      isError = true
    }

    if (!Number(prodData.qty)) {
      notify("Enter Quntity", "error");
      isError = true
    }

    if (!prodData.category) {
      notify("Enter Category", "error");
      isError = true
    }

    if (!prodData.productType) {
      notify("Enter Product Type", "error");
      isError = true
    }

    if (prodData.unit && Number(weightVal) <= 0) {
      notify("Enter Weight", "error");
      isError = true
    }

    if (prodData.weight != "0" && prodData.unit == "") {
      notify("Enter unit ", "error");
      isError = true
    }

    if (isError) {
      notify("Error in product", "error");
      return
    }

    console.log(prodData);

    dispatch(addProd(prodData))

    notify("Product added", "success");

    setProdData({
      nikename: "",
      company: "",
      purchasePrice: "0",
      sellPrice: "0",
      qty: "0",
      categoryInfo: "",
      category: "",
      color: "",
      weight: "0",
      unit: "",
      productType: "",

    })

    qtySet("0");
    weightSet("0");
    sellPriceSet("0");
    purchasePriceSet("0");
  }

  useEffect(() => {
    console.log("call get_cat")
    dispatch(getCat());
    dispatch(getCatLine());
  }, [dispatch, catStatus]);



  console.log(prodData);

  return (
    <>
      < Navbar />

      <Box sx={{ paddingBottom: "80px", minHeight: "100dvh" }} >

        <h1>Product Section</h1>

        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper', display: "flex", justifyContent: "center", margin: "auto" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Add Product" />
            <Tab label="Search Product" />
            <Tab label="Master's" />

          </Tabs>
        </Box>


        {value == 0 && <Box>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Product Types
            </AccordionSummary>
            <AccordionDetails     >

              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  my: 2
                }}
              >
                <FormControl sx={{ m: 1, width: "100%" }}>
                  {/* value={prodTypeVal}  */}
                  <TextField fullWidth error={prodTypeValError} helperText={prodTypeValError ? "Incorrect entry." : ""} onChange={(e) => handleTypeValueChnage(e)} label="Enter Product Type" id="prodType" />
                </FormControl>
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  my: 2
                }}
              >

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <CButton disabled={prodTypeBtn} onClick={handleSubProdType} variant="contained">Add Product Type</CButton>
                </FormControl>
              </Box>
              <Box
                sx={{ display: "flex", flexWrap: "wrap" }}
              >
                {
                  prodType.length === 0 && <h1>No Data</h1>
                }
                {
                  prodType.map((el) => <Chip
                    sx={{ m: 1 }}
                    label={`${el.type.trim("")[0].toUpperCase()}${el.type.slice(1)}`}
                    onClick={(e) => handleProdTypeClick(e, el._id)}
                    onDelete={(e) => handleProdTypeDelete(e, el._id)}
                    deleteIcon={<DeleteIcon sx={{ m: 1 }} />}
                    variant="outlined"
                    key={el._id}
                    className=''
                  />
                  )
                }
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Product Catogory's
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  my: 2
                }}
              >
                {/* value={prodTypeVal}  */}
                <FormControl sx={{ m: 1, width: "100%" }}>

                  <TextField
                    id="outlined-password-input"
                    label="Please enter catogory"
                    type="text"
                    value={catData.category}
                    onChange={(e) => { handleCatData(e.target.value, "category") }}
                  />

                </FormControl>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="select-cat-label">Parent Catogory's</InputLabel>
                  <Select
                    labelId="select-cat-label"
                    id="select-cat-label"
                    value={catData.parent}

                    label="Parent Catogory's"
                    onChange={(e) => { handleCatData(e.target.value, "parent") }}
                  >
                    <MenuItem value=""  >
                      <em>None</em>
                    </MenuItem>
                    {
                      catLine.map((el) => <MenuItem
                        value={el.name}
                        key={el._id}
                        className=''
                      >  <em>{el.name}</em> </MenuItem>
                      )
                    }
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <CButton onClick={handleCatSubmit} variant="contained">Add Catogory</CButton>
                </FormControl>
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  my: 1,
                }}
              >
                {catStatus === "loading" ? (
                  // Shimmer effect using Skeleton
                  <>
                    <Paper sx={{ padding: "1rem" }} >
                      <Skeleton animation="wave" height={35} width="80%" mb={1} />
                      <Skeleton sx={{ my: 1 }} animation="wave" height={25} variant="rounded" width="25%" />
                      <Skeleton sx={{ my: 1, ml: 4 }} animation="wave" height={25} variant="rounded" width="25%" />
                      <Skeleton sx={{ my: 1, ml: 4 }} animation="wave" height={25} variant="rounded" width="25%" />
                      <Skeleton sx={{ my: 1, ml: 7 }} animation="wave" height={25} variant="rounded" width="25%" />
                      <Skeleton sx={{ my: 1 }} animation="wave" height={25} variant="rounded" width="25%" />
                      <Skeleton sx={{ my: 1, ml: 4 }} animation="wave" height={25} variant="rounded" width="25%" />
                    </Paper>

                  </>
                ) : (
                  // Your content when data is loaded
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600 }} > Catogory's </Typography>
                    <RecursiveChipList
                      categories={cat}
                      onEdit={handleCatEdit}
                      onDelete={handleCatDelete}
                      onAdd={handleCatAdd}
                    />
                  </div>
                )}
              </Box>


            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Add Product
            </AccordionSummary>
            <AccordionDetails>

              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  my: 2
                }}
              >
                {/* value={prodTypeVal}  */}

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="select-productData-comp">Company Name</InputLabel>
                  <Select
                    labelId="select-productData-comp"
                    value={prodData.company}
                    label="Company name"
                    onChange={(e) => setProdData({ ...prodData, 'company': e.target.value })}

                  >
                    <MenuItem value=""  >
                      <em>None</em>
                    </MenuItem>
                    {
                      companys.map((el, ind) => <MenuItem
                        value={el}
                        key={ind + 1}
                        className=''
                      >  <em>{`${el}`} </em> </MenuItem>
                      )
                    }
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="select-productData-Type">Product Type</InputLabel>
                  <Select
                    labelId="select-productData-Type"
                    value={prodData.productType}
                    onChange={(e) => setProdData({ ...prodData, "productType": e.target.value })}
                    label="Product Type"
                  >
                    <MenuItem value=""  >
                      <em>None</em>
                    </MenuItem>
                    {
                      prodType.map((el) => <MenuItem
                        value={el.type}
                        key={el._id}
                        className=''
                      >  <em>{`${el.type.trim("")[0].toUpperCase()}${el.type.slice(1)}`} </em> </MenuItem>
                      )

                    }
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="select-productData-cat">Product Catogory's</InputLabel>
                  <Select
                    labelId="select-productData-cat"
                    value={prodData.category}
                    label="Product Catogory's"
                    onChange={(e) => { setProdData({ ...prodData, "category": e.target.value }) }}
                  >
                    <MenuItem value=""  >
                      <em>None</em>
                    </MenuItem>
                    {
                      catLine.map((el) => <MenuItem
                        value={el.name}
                        key={el._id}
                        className=''
                      >  <em><b>{el.name} -</b> <small><span>{el.ancestors}</span> </small></em></MenuItem>
                      )
                    }
                  </Select>
                </FormControl>



                {/* const [sellPriceVal, sellPriceInc, sellPriceDec, sellPriceSet] = useIncDec(prodData.sellPrice);
  const [purchasePriceVal, purchasePriceInc, purchasePriceDec, purchasePriceSet] = useIncDec(prodData.purchasePrice); */}

                <Typography>Purchase Price</Typography>
                <FormControl sx={{ m: 1, width: "100%", display: "flex", flexDirection: "row" }}>
                  <CButton fullWidth disabled={purchasePriceVal <= 0} onClick={() => purchasePriceDec()} variant="contained">-</CButton>

                  <TextField

                    fullWidth

                    id="outlined-password-input"
                    label="Purchase Price"
                    type="text"
                    value={purchasePriceVal}
                    onChange={(e) => purchasePriceSet(e.target.value)}
                  />
                  <CButton fullWidth onClick={() => purchasePriceInc()} variant="contained">+</CButton>
                </FormControl>

                <Typography>Sell Price</Typography>
                <FormControl sx={{ m: 1, width: "100%", display: "flex", flexDirection: "row" }}>
                  <CButton fullWidth disabled={sellPriceVal <= 0} onClick={() => sellPriceDec()} variant="contained">-</CButton>

                  <TextField

                    fullWidth

                    id="outlined-password-input"
                    label="Sell Price"

                    value={sellPriceVal}

                    type="number"
                    inputmode="numeric" pattern="[0-9]*"

                    onChange={(e) => sellPriceSet(e.target.value)}
                  />
                  <CButton fullWidth onClick={() => sellPriceInc()} variant="contained">+</CButton>
                </FormControl>

                <Typography> Oty </Typography>
                <FormControl sx={{ m: 1, width: "100%", display: "flex", flexDirection: "row" }}>
                  <CButton fullWidth disabled={qtyVal <= 0} onClick={() => qtyDec()} variant="contained">-</CButton>

                  <TextField

                    fullWidth
                    id="outlined-password-input"
                    label="Qty"

                    value={qtyVal}
                    onChange={(e) => qtySet(e.target.value)}
                    type="number"
                    inputmode="numeric" pattern="[0-9]*"
                  />
                  <CButton fullWidth onClick={() => qtyInc()} variant="contained">+</CButton>
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="select-product-unit">Colour</InputLabel>
                  <Select
                    labelId="select-product-unit"
                    value={prodData.color}
                    label="Colour"
                    onChange={(e) => setProdData({ ...prodData, 'color': e.target.value })}

                  >
                    <MenuItem value=""  >
                      <em>None</em>
                    </MenuItem>
                    {
                      colors.map((el, ind) => <MenuItem
                        value={el}
                        key={ind + 1}
                        className=''
                      >  <em>{`${el}`} </em> </MenuItem>
                      )
                    }
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="select-product-unit">Units</InputLabel>
                  <Select
                    labelId="select-product-unit"
                    value={prodData.unit}
                    label="Units"
                    onChange={(e) => setProdData({ ...prodData, 'unit': e.target.value })}

                  >
                    <MenuItem value=""  >
                      <em>None</em>
                    </MenuItem>
                    {
                      units.map((el, ind) => <MenuItem
                        value={el}
                        key={ind + 1}
                        className=''
                      >  <em>{`${el}`} </em> </MenuItem>
                      )
                    }
                  </Select>
                </FormControl>




                <Typography> Weight </Typography>
                <FormControl sx={{ m: 1, width: "100%", display: "flex", flexDirection: "row" }}>
                  <CButton fullWidth disabled={weightVal <= 0} onClick={() => weightDec()} variant="contained">-</CButton>

                  <TextField

                    fullWidth

                    label="Weight"

                    value={weightVal}
                    onChange={(e) => weightSet(e.target.value)}
                    // onChange={(e) => purchasePriceSet(e.target.value)}
                    type="number"
                    inputmode="numeric" pattern="[0-9]*"
                  />
                  <CButton fullWidth onClick={() => weightInc()} variant="contained">+</CButton>
                </FormControl>



                <FormControl sx={{ m: 1, width: "100%" }}>
                  <CButton disabled={status == "loading"} onClick={handleProdSubmit} variant="contained">Add Product</CButton>
                </FormControl>
              </Box>


            </AccordionDetails>
            <AccordionActions>

            </AccordionActions>
          </Accordion>

        </Box>
        }
        {value == 1 && <Box>

          two
        </Box>
        }
        {value == 2 && <Box>
          {/* start  master */}
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              my: 2
            }}
          >
            <FormControl sx={{ m: 1, width: "100%" }}>
              {/* value={prodTypeVal}  */}
              <TextField fullWidth error={prodTypeValError} helperText={prodTypeValError ? "Incorrect entry." : ""} onChange={(e) => handleTypeValueChnage(e)} label="Enter Product Type" id="prodType" />
            </FormControl>
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              my: 2
            }}
          >

            <FormControl sx={{ m: 1, width: "100%" }}>

              <CButton disabled={prodTypeBtn} onClick={handleSubProdType} variant="contained">Add Company</CButton>
            </FormControl>
          </Box>

          <Box
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {
              prodType.length === 0 && <h1>No Company</h1>
            }
            {

              prodType.map((el) => <Chip

                sx={{ m: 1 }}
                label={`${el.type.trim("")[0].toUpperCase()}${el.type.slice(1)}`}
                onClick={(e) => handleProdTypeClick(e, el._id)}
                onDelete={(e) => handleProdTypeDelete(e, el._id)}
                deleteIcon={<DeleteIcon sx={{ m: 1 }} />}
                variant="outlined"
                key={el._id}
                className=''
              />
              )
            }
          </Box>

        </Box>
        }
      </Box>

      {/* for notification */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  )
}

export default Product

// for notification
const notify = (msg, type) => {
  toast[type](`🦄 ${msg}`, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

}