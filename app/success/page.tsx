import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-secondary-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          شكراً لك! 🤲
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          تم استلام تبرعك بنجاح. بارك الله فيك وجعل هذا العمل في ميزان حسناتك.
          سنستخدم تبرعك لمساعدة المحتاجين في غزة.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/campaigns"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition flex items-center justify-center"
          >
            استكشف حملات أخرى
          </Link>
        </div>
      </div>
    </div>
  )
}
