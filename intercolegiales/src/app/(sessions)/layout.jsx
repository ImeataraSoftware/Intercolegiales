import Aside from '@/src/components/Aside'

const SessionLayout = ({ children }) => {
  return (
    <>
      <Aside />
      {children}
    </>
  )
}

export default SessionLayout
