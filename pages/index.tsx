import styles from '../styles/Home.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { withSSRGuest } from '../utils/withSSRGuest'

export default function Home() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(e){
    e.preventDefault()
    const data = {
      email,
      password
    }
    await signIn(data);
    
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
    <button type="submit">Enviar</button>
    </form>
  )
}

export const getServerSideProps = withSSRGuest( async (ctx) => {

  return {
    props:{
      
    }
  }
}
)