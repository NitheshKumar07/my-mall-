import React, { useEffect, useState } from 'react'
import '../stylesheets/postProduct.css'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Post = () => {

  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [img,setImg] = useState(null);
  const [preImage,setPreImage] = useState(null);
  const [label,setLabel] = useState('Select Image');
  // color
  const [bgColor,setBgColor] = useState();
  const [panelColor,setPanelColor] = useState(null);
  const [textColor,setTextColor] = useState(null);

  const [disPercent,setDisPercent] = useState();
  const [preDisountPrice,setPreDiscountPrice ] = useState();
  // at uploading time
  const [colorFunction, setColorFunction] = useState({ backgroundColor: '', color: '' }); // blur form
  const [buttonClr,setButtonClr] = useState({});

  const [UploadProduct,setUploadProduct] = useState('Upload Product');

  const [isdisabled, setDisabled] = useState(false); // disable inputs

  const [err,setErr] = useState('');
  const [hasErr,setHasErr] = useState(false);

  const [itemColour,setItemColour] = useState(''); // product color 
  const [productCode,setProductCode] = useState(''); //product code
  const [description,setDiscription] = useState(''); //product details

  const [showCategory,setShowCategory] = useState(false);  //show options
  const [SelectedCategory,setSelectedCategory] = useState('Choose Category') //select one option name
  const [SelectedCategoryID,setSelectedCategoryID] = useState(''); //select one option 1d

  const options = [
    {name:'laptop', id:'66b7094e89c2a12074133b29'},
    {name:'mobile', id:'66dde0197a66622cc0734fee'},
    {name:'TV', id:'66e0ab462e6bda2ea8fee817'},
    {name:'AC', id:'66e0ab0a2e6bda2ea8fee815'},
    {name:'fridge', id:'66e0abb42e6bda2ea8fee819'},
    {name:'games', id:'66e0abe62e6bda2ea8fee81b'},
    {name:'chudidars', id:'66e0ac1e2e6bda2ea8fee81d'},
    {name:'saree', id:'66de8d5d74a2d32f040c29ba'},
    {name:`women's handbag`, id:'66e0ac4a2e6bda2ea8fee81f'},
    {name:`men's shoes`, id:'66e0ac832e6bda2ea8fee821'},
    {name:`men's suits`, id:'66e0acbc2e6bda2ea8fee823'},
    {name:`men's jeans`, id:'66e0ace82e6bda2ea8fee825'}]
    .sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  function handleCategory (takeCategoryName) {
    const selectProductCategory = options.find(option=>option.name === takeCategoryName); //searches name from array as same to option name
    setSelectedCategory(selectProductCategory.name); //selects category name
    setSelectedCategoryID(selectProductCategory.id); //selects category id
    setShowCategory(false);
    document.querySelector('#select-btn-arrowDown').classList.remove('rotate-sel-cat');
  }
  // load for buttons
  const setButtonLoader = () => {
    setUploadProduct('Uploading...');
    
    setButtonClr({ backgroundColor: '#1e88e572',
    pointerEvents: 'none'});

    setColorFunction({
      backgroundColor: "rgba(128, 128, 128, 0.047)",
      color: 'rgba(0, 0, 0, 0.328)'
    })
  }
  const removeButtonLoader = () => {
    setUploadProduct(UploadProduct);
    setButtonClr({ backgroundColor: '',
      pointerEvents: ''});

    setColorFunction({
     backgroundColor: "",
     color: ''
    })
  }
useEffect(() => {
  if (price && disPercent) {
    const decimal = disPercent / 100;
      const originalPrice  = price / (1 - decimal);
      setPreDiscountPrice (originalPrice.toFixed(0));
  }
}, [price, disPercent]);

  const svg=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z"/></svg>
  const svg1=<svg id='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M564-120 290-404v-66h130q57 0 100-37t50-103H240v-60h325q-13-48-53.5-79T420-780H240v-60h480v60H566q23 20 39 51t23 59h92v60h-90q-8 91-67.5 145.5T420-410h-52l279 290h-83Z"/></svg>
  // image
  const applyImage = (e) => {
    if(e.target.files[0]){
      setLabel(e.target.files[0].name);
    }else{
      setLabel(label)}

    setImg(e.target.files[0]);
    URL.revokeObjectURL((e.target.files[0]));
    setPreImage(URL.createObjectURL(e.target.files[0]));
  }

  const navigate = useNavigate();

  // const form = new FormData();
  // form.append('name',name);
  // form.append('photo',img);

  // // loader function

  // //post item by submitting form
  // const postHandler = (e) => {
  //   e.preventDefault();
  //   removeButtonLoader();
  //   setDisabled(false);


  //   setButtonLoader();
  //   setDisabled(true);
  //   setHasErr(false);    
  //   axios.post('http://www.localhost:3000/category',form)
  //   .then(res=>
  //     {
  //       console.log(res);
  //       navigate('/category');
  //     })
  //     .catch(err=>{
  //      setTimeout(() => {
  //       removeButtonLoader();
  //       setDisabled(false);
  //       setHasErr(true);
  //       console.log(err);
  //       setErr('Unable to upload product!');
  //      }, 2000);
  //     })
  // }


  const productform = new FormData();
  productform.append('title',name);
  productform.append('photo',img);
  productform.append('price',price);
  productform.append('realprice',preDisountPrice);
  productform.append('discount',disPercent);
  productform.append('description',description);
  productform.append('colour',itemColour);
  productform.append('productCode',productCode);
  productform.append('ctgry',SelectedCategoryID);

  // loader function

  //post item by submitting form
  const postProduct = (e) => {
    e.preventDefault();
    removeButtonLoader();
    setDisabled(false);


    setButtonLoader();
    setDisabled(true);
    setHasErr(false);    
    axios.post('http://www.localhost:3000/product',productform)
    .then(res=>
      {
        console.log(res);
        navigate('/category');
      })
      .catch(err=>{
       setTimeout(() => {
        removeButtonLoader();
        setDisabled(false);
        setHasErr(true);
        console.log(err);
        setErr('Unable to upload product!');
       }, 2000);
      })
  }
  

  return (<>
  <div className='post-Container'>
  <div id='post-items-links'>
    <NavLink className={({isActive}) => isActive ? 'current-page-post' : 'initial-link'} to='/category'>AllProducts</NavLink>
    <NavLink className={({isActive}) => isActive ? 'current-page-post' : 'initial-link'} to='/post'>Create New Product</NavLink>
    <NavLink className={({isActive})=>isActive ? 'current-page-post' : 'initial-link'} to='/login'>Login</NavLink>
</div>

    <form className='postProducts' onSubmit={postProduct} style={colorFunction}>    
    <h1>Create New Product</h1>
    <hr/>
    <div className='postItemContainer'>  
   <div className='postItem'>
   <h2>Product Details</h2>
   <div className='select-container'>
    <div className='select-btn' onClick={e=>{setShowCategory(!showCategory);
      document.querySelector('#select-btn-arrowDown').classList.toggle('rotate-sel-cat')
    }}>
      <p>{SelectedCategory}</p>
      <svg id='select-btn-arrowDown' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-360 280-560h400L480-360Z"/></svg>
    </div>
    {showCategory && (
      <div className='select-options'>
      {options.map((option)=>
      <div className='select-item' onClick={() => handleCategory(option.name,option.id)} key={option.id} value={option.name}>
        {option.name}</div>)}
      </div>
    )}
   </div>


    <input disabled={isdisabled}type='file' id='select-img' required onChange={applyImage}/>
    <label htmlFor='select-img' id='select-img-btn' style={buttonClr}>{label}</label>
    <input required disabled={isdisabled}style={{textTransform:'capitalize'}} type='text' placeholder='Product Name' onChange={e=>setName(e.target.value)}/>
    <div id='price-dis'>
      <input disabled={isdisabled}type='text' placeholder='Final Price' onChange={e=>setPrice(e.target.value)}/>
      <input disabled={isdisabled}type='number' placeholder='Offer' id='disPercent' onChange={e=>setDisPercent(e.target.value)}/>
    </div>
    <input type='text' placeholder='Original Price' value={preDisountPrice}/>
    <input type='text' placeholder='Product Colour' onChange={(e)=>setItemColour(e.target.value)}/>
    <input type='text' placeholder='Product Code' onChange={(e)=>setProductCode(e.target.value)}/>
    <textarea placeholder='Add Product Details' id='description-text' name='description-text' onChange={e=>setDiscription(e.target.value)}/>
   </div>
  
   <div className='final-look' style={{backgroundColor:bgColor}}>
    <img src={preImage} alt={name} id='imgPreview'/>
    <div className='itemDetail' style={{backgroundColor:panelColor}}>
      <p style={{color:textColor,textTransform:'capitalize'}}>{name}</p>
      <div id='pricePara'>
        <p style={{color:textColor,fontWeight:'700'}}>{svg}{price}</p>
        {disPercent && <span style={{color:'green'}}>{disPercent}% off <span style={{fontSize:'0.75em',textDecoration:'line-through',
        color:'grey',fontWeight:"bolder"}}>{svg1}{preDisountPrice}</span></span>}
      </div>
    </div>
    </div>
    </div>
   
    <div className='panelDetails'> 
    <h2>Panel Details</h2>
    <div id='bac-panel'>
    <input disabled={isdisabled}onChange={e=>setBgColor(e.target.value)} value={bgColor}    type='text' placeholder='Background Color'/>
    <input disabled={isdisabled}onChange={e=>setPanelColor(e.target.value)} value={panelColor} type='text' placeholder='Panel Color '/>
    <input disabled={isdisabled}onChange={e=>setTextColor(e.target.value)} value={textColor}  type='text' placeholder='Text Color' id='text-clr'/></div>
    </div>
    <button   id='uploadItem' type='submit' style={buttonClr}>{UploadProduct}</button> 
    {hasErr && <p style={{color:"red" ,fontSize:'1.25rem',textAlign:'center',fontFamily:'monospace,arial'}}>{err}</p>
  }
    </form>

    

    </div>
  </>)
}

export default Post;