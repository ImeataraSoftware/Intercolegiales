import Menu from '@/src/components/Menu'

const Page = () => {
  let options = [
    {
      title: 'Administrar profesores',
      link: '/director-sesion/admin-professors'
    },
    {
      title: 'Ver datos globales',
      link: '/director-sesion/global-data'
    }
  ]

  return (
    <>
      <Menu title={'Menu Director'} options={options} />
    </>
  )
}

export default Page
