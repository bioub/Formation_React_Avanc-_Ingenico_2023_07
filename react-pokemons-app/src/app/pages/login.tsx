import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/button';
import Counter from '../components/counter';
import { login } from '../services/authentication-service';
import { useNavigate } from 'react-router-dom';

type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  username: Field;
  password: Field;
};

// t('login.banner.error')
// t('login.banner.default')
// t('login.banner.loading')

function Login() {
  console.log('render Login')
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState<Form>({
    username: { value: 'pikachu' },
    password: { value: 'pikachu' },
  });

  const [messageKey, setMessageKey] = useState<string>(
    // Vous êtes déconnecté. (pikachu / pikachu)
    'login.banner.default'
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log('handleInputChange')
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  }

  function validateForm() {
    let newForm: Form = form;

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string =
        'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = {
        value: form.username.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = {
        value: form.username.value,
        error: '',
        isValid: true,
      };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if (form.password.value.length < 6) {
      const errorMsg: string =
        'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = {
        value: form.password.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = {
        value: form.password.value,
        error: '',
        isValid: true,
      };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      // '👉 Tentative de connexion en cours ...'
      setMessageKey('login.banner.loading');
      login(form.username.value, form.password.value).then(
        (isAuthenticated) => {
          if (!isAuthenticated) {
            // '🔐 Identifiant ou mot de passe incorrect.'
            setMessageKey('login.banner.error');
            return;
          }

          navigate('/pokemons');
        }
      );
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {/* Form messageKey */}
                {messageKey && (
                  <div className="form-group">
                    <div className="card-panel grey lighten-5">{t(messageKey)}</div>
                  </div>
                )}
                {/* Field username */}
                <div className="form-group">
                  <label htmlFor="username">Identifiant</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-control"
                    value={form.username.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                  {/* error */}
                  {form.username.error && (
                    <div className="card-panel red accent-1">
                      {form.username.error}
                    </div>
                  )}
                </div>
                {/* Field password */}
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                    value={form.password.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                  {/* error */}
                  {form.password.error && (
                    <div className="card-panel red accent-1">
                      {form.password.error}
                    </div>
                  )}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <Button type="submit">
                  {t('login.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter count={count} onIncrement={() => setCount(count + 1)} />
    </form>
  );
}

export default Login;
