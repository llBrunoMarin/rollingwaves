import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0077b6] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Página no encontrada</h2>
        <p className="mb-8">Lo sentimos, la página que buscas no existe.</p>
        <Link 
          href="/" 
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
} 