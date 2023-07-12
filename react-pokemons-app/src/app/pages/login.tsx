import { forwardRef, Ref, useId, useState } from 'react';
import { FieldError, FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { login } from '../services/authentication-service';
import { useNavigate } from 'react-router-dom';

type Credentials = {
  username: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Credentials>();

  const [message, setMessage] = useState<string>(
    'Vous êtes déconnecté. (pikachu / pikachu)'
  );

  function onSubmit(data: Credentials) {
    setMessage('👉 Tentative de connexion en cours ...');
    login(data.username, data.password).then((isAuthenticated) => {
      if (!isAuthenticated) {
        setMessage('🔐 Identifiant ou mot de passe incorrect.');
        return;
      }

      navigate('/pokemons');
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {/* Form message */}
                {message && (
                  <div className="form-group">
                    <div className="card-panel grey lighten-5">{message}</div>
                  </div>
                )}
                {/* Field username */}
                <div className="form-group">
                  <Input label="Identifiant" type="text" {...register('username', {
                    minLength: {
                      value: 3,
                      message: 'Au moins 3',
                    },
                  })} />
                  <Errors error={errors.username} />
                </div>
                {/* Field password */}
                <div className="form-group">
                  <Input
                    label={'Mot de passe'}
                    type={'password'}
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password error',
                      },
                      minLength: { value: 6, message: 'Password error' },
                    })}
                  />
                  <Errors error={errors.password} />
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

type InputProps = {
  label: string;
  type: string;
};

const Input = forwardRef(function Input({ label, type }: InputProps, ref: Ref<HTMLInputElement>) {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} className="form-control" ref={ref} />
    </>
  );
})

type ErrorsProps = {
  error?: FieldError;
};

function Errors({ error }: ErrorsProps) {
  if (!error) {
    return null;
  }

  return <div className="card-panel red accent-1">{error.message}</div>;
}

export default Login;
