import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import List from './components/List';
import RenderTryCatch from './components/render-try-catch';
import { CompareProvider } from './helpers/compare-context';
import PokemonCompare from './pages/pokemon-compare';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './private-route';

function App() {
  const [selectedLang, setSelectedLang] = useState('fr');
  const { t, i18n } = useTranslation()

  return (
    <BrowserRouter>
      <CompareProvider>
        <div>
          <nav>
            <div className="nav-wrapper teal">
              <Link to="/" className="brand-logo center">
                {t('home.title')}
              </Link>
              <List
                items={['fr', 'en']}
                renderItem={(lang) => (
                  <button key={lang}
                    onClick={() => {
                      i18n.changeLanguage(lang).then(() => {
                        setSelectedLang(lang);
                      });
                    }}
                    disabled={selectedLang === lang}
                  >
                    {lang}
                  </button>
                )}
              />
            </div>
          </nav>
          <RenderTryCatch>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index path="/" element={<PokemonsList />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/pokemons" element={<PokemonsList />} />
                <Route path="/pokemon/add" element={<PokemonAdd />} />
                <Route path="/pokemons/compare" element={<PokemonCompare />} />
                <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
                <Route path="/pokemons/:id" element={<PokemonsDetail />} />
              </Route>
              <Route element={<PageNotFound />} />
            </Routes>
            </Suspense>
          </RenderTryCatch>
        </div>
      </CompareProvider>
    </BrowserRouter>
  );
}

export default App;
