import { Link } from '../components/Link'

const I18n = {
  es: {
    title: 'Acerca de',
    description: 'Soy José Ramírez y estoy creando un clon de React Router. 🌩️',
    button: 'Volver al inicio'
  },
  en: {
    title: 'About',
    description: 'I am José Ramírez and I am creating a React Router clone. 🌩️',
    button: 'Go back to home'
  }
}

const useI18n = (lang) => {
  return I18n[lang] || I18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/138532719?v=4' alt='José Ramírez' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
