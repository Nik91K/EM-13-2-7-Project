import './App.css'
import LayoutPage from './layout'
import InfoCard from './components/Layout/InfoPanel/InfoCard'
import { use, useEffect } from 'react';
import { getProducts } from './api/store/slices/productsSlice';
import type { AppDispatch, RootState } from './api/store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProducts()).unwrap().then((data) => {
      console.log('Fetched products:', data);
    }).catch(console.error);
  }, [dispatch]);


  return (
    <LayoutPage>
      <div className="grid grid-cols-4 gap-4">
        {loading && <p> loading </p>}
        {error && <p>{error}</p>}
        {products.map(products => (
          <InfoCard 
            id={products.id}
            title={products.title}
            description={products.description}
            image={products.image}
            imageTitle={products.title}
          />
        )) }

      </div>
    </LayoutPage>
  )
}

export default App
