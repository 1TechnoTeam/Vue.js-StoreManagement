import { ref } from 'vue'
import {  push } from 'notivue';
const Products = ref([])
const loading = ref(false);
const isUpdating = ref(false);
const newProduct = ref({
  id: Date.now().toString(),
  name: null,
  description: null,
  image: null,
  price: null,
  count: null,
})

const getProductById = (id)=>{
 return Products.value.find(x=>x.id == id);
}
const getProductIndex = (id)=>{
  return Products.value.findIndex(x=>x.id ==id)
}

const addProduct = async () => {
  const hasEmptyField = Object.values(newProduct.value).some(
    (value) => value === null || value === undefined,
  )

  if (hasEmptyField) {
    push.warning("Fields Can not Be Empty")
    return
  }
  push.success('Product Added Successfuly')
  Products.value.push({...newProduct.value,
    'pending' : true
  });
  const added = getProductById(newProduct.value.id);
  const index = getProductIndex(added.id);
  try {
    const response = await fetch('http://localhost:3001/Products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({...newProduct.value}),
    })
    if (response.ok) {
      added.pending =false;
      Products.value.splice(index , 0 );

      newProduct.value={
        id: Date.now().toString(),
        name: null,
        description: null,
        image: null,
        price: null,
        count: null,
      }
    }
    else{
      Products.value.splice(index , 1 );
      throw new Error('Adding Is not Succesfully')
    }
  } catch (e) {
    push.error(e.message ?? e)
  }
}
const removeProduct = async(id)=>{
  const index = getProductIndex(id);
  const data = getProductById(id)
  try{
    Products.value.splice(index , 1);
    push.success('Product Removed Successfuly')
    const response = await fetch(`http://localhost:3001/Products/${id}`,{method:'DELETE'})
  if (!response.ok) {
    Products.value.splice(index,0,data)
    throw new Error ('Some Error Occured While Try To Removing Product')
  }
  }catch (e)
  {
    Products.value.splice(index,0,data)
    push.error(e.message || 'Some Error Occured')
  }
}
const fetchData = async () => {
  try {
    loading.value = true
    const response = await fetch('http://localhost:3001/Products')
    console.log(response)
    Products.value = await response.json()
  } catch (e) {
    push.error(e.message)
  } finally {
    loading.value = false
  }
}

const updateClicking = (id)=>{
  document.getElementById('add-product')?.scrollIntoView({ behavior: 'smooth' });
  isUpdating.value = true;
  const data = getProductById(id);

  newProduct.value = data

}

const updateProduct = async (id)=>{
  let data = getProductById(id);
  const index = getProductIndex(id);

  Products.value.splice(index , 1 , newProduct.value);
  push.success('Product Update Successfully')
  console.log(id);
  console.log({...newProduct.value});
  try{
    const response = await fetch(`http://localhost:3001/Products`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({...newProduct.value}),
    })
    if (!response.ok) {
      Products.value.splice(index , 1 , data)
      throw new Error('Error Occured While Fetching Data')
    }
  }catch(e){
    push.error(e.message ?? e)
  }
}

export default function setProducts() {
  return {
    Products,
    fetchData,
    loading,
    newProduct,
    addProduct,
    removeProduct,
    isUpdating,
    updateClicking,
    updateProduct
  }
}
