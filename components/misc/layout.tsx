import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div style={{overflow: 'hidden'}}>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
