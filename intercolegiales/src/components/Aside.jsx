import Link from 'next/link'

const Aside = () => {
  const role = 'admin' //localStorage.role
  const options = {
    admin: [
      {
        title: 'Inicio',
        link: '/admin-sesion'
      },
      {
        title: 'Configuración general',
        link: '/admin-sesion/general-config'
      },
      {
        title: 'Administrar deportes',
        link: '/admin-sesion/admin-sports'
      },
      {
        title: 'Administrar delegados',
        link: '/admin-sesion/admin-delegates'
      },
      {
        title: 'Administrar escuelas',
        link: '/admin-sesion/admin-schools'
      },
      {
        title: 'Ver datos globales',
        link: '/admin-sesion/global-data'
      }
    ],
    delegate: [
      {
        title: 'Administrar escuelas',
        link: '/delegate-sesion/admin-schools'
      },
      {
        title: 'Ver datos globales',
        link: '/delegate-sesion/global-data'
      }
    ],
    director: [
      {
        title: 'Administrar profesores',
        link: '/director-sesion/admin-professors'
      },
      {
        title: 'Ver datos globales',
        link: '/director-sesion/global-data'
      }
    ],
    teacher: [
      {
        title: 'Completar tabla de alumnos escolar',
        link: '/professor-sesion/scholar-table'
      },
      {
        title: 'Inscribir alumnos',
        link: '/professor-sesion/enroll-students'
      },
      {
        title: 'Modificar planillas',
        link: '/professor-sesion/modify-sheets'
      }
    ]
  }

  return (
    <>
      <aside className="bg-blue-500">
        <ul>
          {options[role].map(({ title, link }, index) => (
            <li key={index}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Aside
